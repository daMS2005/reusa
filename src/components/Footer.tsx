'use client'

import { useState } from 'react'
import { eventLogger } from '@/utils/logger'
import ComingSoonModal from './ComingSoonModal'

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalAction, setModalAction] = useState('')

  const handleSocialClick = (platform: string) => {
    eventLogger.logFooterAction(platform, 'social')
    
    // Open Instagram link for Instagram clicks
    if (platform === 'instagram') {
      window.open('https://www.instagram.com/reusan.do?igsh=aXN1ZTR3ZTAyNjBl&utm_source=qr', '_blank')
    }
  }

  const handleContactClick = (method: string) => {
    eventLogger.logFooterAction(method, 'contact')
  }

  const handleNavigationClick = (destination: string) => {
    eventLogger.logFooterAction(destination, 'navigation')
    setModalAction(destination)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalAction('')
  }

  return (
    <>
      <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand */}
            <div className="sm:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-green-400 mb-3 sm:mb-4">ReUsa</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Reutilizar es cuidar. Una plataforma colaborativa para intercambiar, donar, vender o comprar artículos infantiles de forma sostenible y solidaria.
              </p>
              
              {/* Social Media */}
              <div className="flex flex-wrap gap-3">
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
                  onClick={() => handleSocialClick('instagram')}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:scale-105 transition-all duration-300 text-white font-medium text-sm"
                  aria-label="Síguenos en Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                  <span className="hidden sm:inline">Instagram</span>
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
                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>info@reusa.do</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleContactClick('whatsapp')}
                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>+1 (809) 555-0123</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8 sm:pt-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 ReUsa. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm">
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
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Coming Soon Modal */}
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        action={modalAction}
      />
    </>
  )
} 