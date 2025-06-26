'use client'

import { eventLogger } from '@/utils/logger'

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    eventLogger.logSocialClick(platform, 'footer')
  }

  const handleContactClick = (method: string) => {
    eventLogger.logContactClick(method, 'footer')
  }

  const handleNavigationClick = (destination: string) => {
    eventLogger.logNavigationClick(destination, 'footer')
  }

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-3 sm:mb-4">ReUsa</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Reutilizar es cuidar. Una plataforma colaborativa para intercambiar, donar, vender o comprar artículos infantiles de forma sostenible y solidaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => handleSocialClick('instagram')}
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition-all duration-300 text-white font-medium text-sm"
                aria-label="Síguenos en Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="hidden sm:inline">Instagram</span>
              </button>
              <button
                onClick={() => handleSocialClick('facebook')}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 rounded-lg hover:scale-105 transition-all duration-300 text-white font-medium text-sm"
                aria-label="Síguenos en Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="hidden sm:inline">Facebook</span>
              </button>
              <button
                onClick={() => handleSocialClick('tiktok')}
                className="flex items-center gap-2 px-3 py-2 bg-black rounded-lg hover:scale-105 transition-all duration-300 text-white font-medium text-sm"
                aria-label="Síguenos en TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                <span className="hidden sm:inline">TikTok</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigationClick('about')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  ¿Qué es ReUsa?
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick('how_it_works')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Cómo funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick('impact')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Nuestro impacto
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigationClick('join')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Únete a ReUsa
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-400">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <span className="mr-2">📧</span>
                  hola@reusa.com
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleContactClick('whatsapp')}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <span className="mr-2">📱</span>
                  WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleContactClick('form')}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  <span className="mr-2">📝</span>
                  Formulario de contacto
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
              © 2024 ReUsa. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <button
                onClick={() => handleNavigationClick('privacy')}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => handleNavigationClick('terms')}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                Términos de Servicio
              </button>
              <button
                onClick={() => handleNavigationClick('cookies')}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup in Footer */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-800 rounded-lg sm:rounded-xl">
          <div className="text-center">
            <h4 className="text-base sm:text-lg font-semibold mb-2 text-green-400">
              ¿No quieres perderte nada?
            </h4>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              Suscríbete para recibir las últimas novedades de ReUsa
            </p>
            <button
              onClick={() => eventLogger.logButtonClick('footer_newsletter', 'footer')}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 