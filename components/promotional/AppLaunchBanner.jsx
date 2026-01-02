'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export function AppLaunchBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, i18n } = useTranslation('promotional')
  const currentLocale = i18n.language

  useEffect(() => {
    setIsVisible(true)

    // Check if banner was already dismissed
    const bannerState = localStorage.getItem('appLaunchBanner')
    if (bannerState !== 'dismissed') {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('appLaunchBanner', 'dismissed')
  }

  // Get banner config from translations
  const banner = t('appLaunch.banner', { returnObjects: true })

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40"
        >
          <div className="relative">
            {/* Banner Image - Clickable */}
            <a 
              href={banner.downloadPageUrl || `/download-app`}
              className="block cursor-pointer"
            >
              {/* Mobile Banner */}
              <div className="relative w-full h-12 md:hidden">
                <Image
                  src={banner.mobileImageUrl || `/images/promotional/banner-mobile-${currentLocale}.jpg`}
                  alt={banner.altText || 'Download our app'}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Desktop Banner */}
              <div className="relative w-full h-16 hidden md:block">
                <Image
                  src={banner.desktopImageUrl || `/images/promotional/banner-desktop-${currentLocale}.jpg`}
                  alt={banner.altText || 'Download our app'}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </a>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-2 bg-black/20 hover:bg-black/30 rounded-full transition-colors"
              aria-label={banner.closeLabel || 'Close banner'}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}