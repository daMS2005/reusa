'use client'

import { eventLogger } from '@/utils/logger'

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    eventLogger.logButtonClick(`social_${platform}`, 'footer')
  }

  const handleContactClick = (method: string) => {
    eventLogger.logButtonClick(`contact_${method}`, 'footer')
  }

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">ReUsa</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Reutilizar es cuidar. Una plataforma colaborativa para intercambiar, donar, vender o comprar artículos infantiles de forma sostenible y solidaria.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick('instagram')}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                📷
              </button>
              <button
                onClick={() => handleSocialClick('facebook')}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                📘
              </button>
              <button
                onClick={() => handleSocialClick('tiktok')}
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="TikTok"
              >
                🎵
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => eventLogger.logButtonClick('footer_about', 'footer')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  ¿Qué es ReUsa?
                </button>
              </li>
              <li>
                <button
                  onClick={() => eventLogger.logButtonClick('footer_how_it_works', 'footer')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Cómo funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => eventLogger.logButtonClick('footer_impact', 'footer')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Nuestro impacto
                </button>
              </li>
              <li>
                <button
                  onClick={() => eventLogger.logButtonClick('footer_join', 'footer')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  Únete a ReUsa
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleContactClick('email')}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <span className="mr-2">📧</span>
                  hola@reusa.com
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleContactClick('whatsapp')}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <span className="mr-2">📱</span>
                  WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleContactClick('form')}
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  <span className="mr-2">📝</span>
                  Formulario de contacto
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ReUsa. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => eventLogger.logButtonClick('footer_privacy', 'footer')}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => eventLogger.logButtonClick('footer_terms', 'footer')}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                Términos de Servicio
              </button>
              <button
                onClick={() => eventLogger.logButtonClick('footer_cookies', 'footer')}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup in Footer */}
        <div className="mt-12 p-6 bg-gray-800 rounded-xl">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2 text-green-400">
              ¿No quieres perderte nada?
            </h4>
            <p className="text-gray-300 mb-4">
              Suscríbete para recibir las últimas novedades de ReUsa
            </p>
            <button
              onClick={() => eventLogger.logButtonClick('footer_newsletter', 'footer')}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
} 