'use client'

import { useState, useEffect } from 'react'
import { AppLaunchBanner } from './AppLaunchBanner'
import { AppLaunchPopup } from './AppLaunchPopup'
import TranslationsProvider from '@/TranslationsProvider'

// Configuration for different promotions
const PROMOTIONS = {
  appLaunch: {
    enabled: true,
    banner: {
      enabled: true,
      component: AppLaunchBanner
    },
    popup: {
      enabled: true,
      delay: 7000, // 7 seconds
      frequency: 'always', // Options: 'always', 'session', 'daily', 'hourly', 'pageviews'
      component: AppLaunchPopup
    }
  },
  // Add more promotions here as needed
  // Example:
  // blackFriday: {
  //   enabled: false,
  //   banner: { enabled: true, component: BlackFridayBanner },
  //   popup: { enabled: true, delay: 3000, frequency: 'session', component: BlackFridayPopup }
  // }
}

export function PromotionalSystem({ locale, resources }) {
  const [activePromotion, setActivePromotion] = useState(null)

  useEffect(() => {
    // Find the first enabled promotion
    const active = Object.entries(PROMOTIONS).find(([_, config]) => config.enabled)
    if (active) {
      setActivePromotion(active[0])
    }
  }, [])

  if (!activePromotion) return null

  const promotion = PROMOTIONS[activePromotion]
  const BannerComponent = promotion.banner?.component
  const PopupComponent = promotion.popup?.component

  // If resources are provided, wrap in TranslationsProvider
  if (resources) {
    return (
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={['promotional']}
      >
        {promotion.banner?.enabled && BannerComponent && <BannerComponent />}
        {promotion.popup?.enabled && PopupComponent && (
          <PopupComponent 
            delay={promotion.popup.delay} 
            frequency={promotion.popup.frequency}
          />
        )}
      </TranslationsProvider>
    )
  }

  // Otherwise render without translations provider (assumes it's already wrapped)
  return (
    <>
      {promotion.banner?.enabled && BannerComponent && <BannerComponent />}
      {promotion.popup?.enabled && PopupComponent && (
        <PopupComponent 
          delay={promotion.popup.delay}
          frequency={promotion.popup.frequency}
        />
      )}
    </>
  )
}