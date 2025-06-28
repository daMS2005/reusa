'use client'

import { useEffect } from 'react'
import { eventLogger } from '@/utils/logger'

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
  action?: string
}

export default function ComingSoonModal({ isOpen, onClose, action }: ComingSoonModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open')
      // Prevent iOS Safari bounce scroll
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('modal-open')
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('modal-open')
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
    }
  }, [isOpen])

  const handleNewsletterRedirect = () => {
    eventLogger.logNewsletterAction('coming_soon_redirect')
    onClose()
    
    // Small delay to ensure modal closes before scrolling
    setTimeout(() => {
      const newsletterSection = document.getElementById('newsletter')
      if (newsletterSection) {
        newsletterSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleClose = () => {
    eventLogger.logNewsletterAction('coming_soon_close')
    onClose()
  }

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 max-w-sm sm:max-w-md w-full mx-2 sm:mx-4 shadow-2xl modal-animate-in max-h-[90vh] overflow-y-auto modal-mobile">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="text-5xl sm:text-6xl lg:text-8xl mb-3 sm:mb-4 animate-bounce">🚀</div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
            ¡Próximamente!
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            {action ? `La función "${action}" estará disponible muy pronto.` : 'Esta función estará disponible muy pronto.'}
          </p>
        </div>

        {/* Content */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">
            Mientras tanto, únete a nuestra comunidad y sé el primero en saber cuando lancemos esta funcionalidad.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl sm:text-2xl">📧</span>
              <span className="font-semibold text-green-800 text-sm sm:text-base">Newsletter Exclusivo</span>
            </div>
            <p className="text-green-700 text-xs sm:text-sm">
              Recibe actualizaciones, consejos de sostenibilidad y acceso anticipado a nuevas funciones.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleNewsletterRedirect}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg touch-manipulation"
            style={{ minHeight: '44px' }}
          >
            <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
              <span>📧</span>
              <span>Únete Ahora</span>
            </span>
          </button>
          
          <button
            onClick={handleClose}
            className="w-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 font-medium py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 touch-manipulation"
            style={{ minHeight: '44px' }}
          >
            <span className="text-sm sm:text-base">Cerrar</span>
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 active:text-gray-800 p-2 transition-colors duration-300 touch-manipulation"
          aria-label="Cerrar modal"
          style={{ minHeight: '44px', minWidth: '44px' }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
} 