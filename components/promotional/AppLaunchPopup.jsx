'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export function AppLaunchPopup({ delay = 3000 }) {
  const [isVisible, setIsVisible] = useState(false)
  const { t, i18n } = useTranslation('promotional')
  const currentLocale = i18n.language

  useEffect(() => {
    // Show once per hour
    const now = new Date().getTime()
    const lastShownTime = localStorage.getItem('appLaunchPopupTime')
    const oneHour = 60 * 60 * 1000 // milliseconds
    
    const shouldShow = !lastShownTime || (now - parseInt(lastShownTime)) > oneHour

    if (shouldShow) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [delay])

  const handleClose = () => {
    setIsVisible(false)
    
    // Save current time to track hourly display
    const now = new Date().getTime()
    localStorage.setItem('appLaunchPopupTime', now.toString())
  }

  // Get popup config from translations
  const popup = t('appLaunch.popup', { returnObjects: true })

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          
          {/* Popup - Properly Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, type: 'spring', bounce: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="relative w-full max-w-xs md:max-w-sm">
              {/* Popup Image - Clickable */}
              <a 
                href={popup.downloadPageUrl || `/download-app`}
                className="block cursor-pointer"
              >
                {/* Mobile Popup */}
                <div className="relative w-full aspect-square md:hidden rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={popup.mobileImageUrl || `/images/promotional/popup-mobile-${currentLocale}.jpg`}
                    alt={popup.altText || 'Download our app'}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Desktop Popup */}
                <div className="relative w-full aspect-[3/4] hidden md:block rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={popup.desktopImageUrl || `/images/promotional/popup-desktop-${currentLocale}.jpg`}
                    alt={popup.altText || 'Download our app'}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </a>

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
                aria-label={popup.closeLabel || 'Close popup'}
              >
                <svg className="w-5 h-5 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}