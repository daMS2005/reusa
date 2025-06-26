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
            <div className="flex space-x-3 sm:space-x-4">
              <button
                onClick={() => handleSocialClick('instagram')}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <span className="text-sm sm:text-base">📷</span>
              </button>
              <button
                onClick={() => handleSocialClick('facebook')}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <span className="text-sm sm:text-base">📘</span>
              </button>
              <button
                onClick={() => handleSocialClick('tiktok')}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="TikTok"
              >
                <span className="text-sm sm:text-base">🎵</span>
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