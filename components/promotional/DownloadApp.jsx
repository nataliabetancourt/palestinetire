'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export default function DownloadApp() {
  const { t } = useTranslation('promotional')
  
  // Get download page content from translations
  const downloadPage = t('downloadPage', { returnObjects: true })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                {downloadPage.title || 'The Tire Store Service Center app is built with our customers in mind'}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {downloadPage.description || 'Earn points with every visit and redeem them for exclusive rewards and discounts.'}
              </p>

              {/* Download Buttons with Official Badges */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start">
                <a
                  href={downloadPage.playStoreUrl || 'https://play.google.com/store/search?q=tire%20store%20service%20center&c=apps&hl=en_US'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/app-badges/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={180}
                    height={53}
                    className="h-[53px] w-auto"
                  />
                </a>

                <a
                  href={downloadPage.appStoreUrl || 'https://apps.apple.com/us/app/tire-store-service-center/id6752694218'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/images/app-badges/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-[53px] w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Right Column - App Screenshot */}
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src={downloadPage.appScreenshot || '/images/app-screenshot.png'}
                alt="Tire Store App Screenshot"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {downloadPage.featuresTitle || 'Why Download Our App?'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Rewards Points */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{downloadPage.feature1Title || 'Earn Rewards Points'}</h3>
              <p className="text-gray-600">{downloadPage.feature1Desc || 'Get points for every dollar spent and every visit to our service centers.'}</p>
            </div>

            {/* Feature 2 - Exclusive Deals */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{downloadPage.feature2Title || 'Exclusive Offers'}</h3>
              <p className="text-gray-600">{downloadPage.feature2Desc || 'Access app-only discounts and special promotions on services.'}</p>
            </div>

            {/* Feature 3 - Track Points */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{downloadPage.feature3Title || 'Track Your Points'}</h3>
              <p className="text-gray-600">{downloadPage.feature3Desc || 'Monitor your points balance and reward status in real-time.'}</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Purple CTA Section with Rounded Corners - WhatsApp Style */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-violet-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {downloadPage.ctaTitle || 'Download app'}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              {downloadPage.ctaDescription || 'The Tire Store Service Center App offers a rewarding experience so you can save more on every visit.'}
            </p>
            
            {/* Download Buttons with Official Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Google Play Badge */}
              <a
                href={downloadPage.playStoreUrl || 'https://play.google.com/store/apps/your-app'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/images/app-badges/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-[53px] w-auto"
                />
              </a>

              {/* App Store Badge */}
              <a
                href={downloadPage.appStoreUrl || 'https://apps.apple.com/your-app'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/images/app-badges/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                  className="h-[53px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}