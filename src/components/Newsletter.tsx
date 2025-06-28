'use client'

import { useState } from 'react'
import { eventLogger } from '@/utils/logger'

export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Track form field interactions
    eventLogger.logFormInteraction(name, 'input', 'newsletter')
  }

  const handleInputFocus = (fieldName: string) => {
    eventLogger.logFormInteraction(fieldName, 'focus', 'newsletter')
  }

  const handleInputBlur = (fieldName: string) => {
    eventLogger.logFormInteraction(fieldName, 'blur', 'newsletter')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Track form submission attempt
    eventLogger.logFormSubmission('newsletter', 'newsletter', false)

    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mnnvobqd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email
        })
      })
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '' })
        eventLogger.log('newsletter_success', { 
          email: formData.email, 
          name: formData.name,
          section: 'newsletter'
        })
        // Track successful signup
        eventLogger.logFormSubmission('newsletter', 'newsletter', true)
      } else {
        throw new Error('Formspree submission failed')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      eventLogger.log('newsletter_error', { 
        error: error instanceof Error ? error.message : 'Unknown error',
        section: 'newsletter'
      })
      // Track failed signup
      eventLogger.logFormSubmission('newsletter', 'newsletter', false)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="newsletter" className="section-padding bg-[linear-gradient(135deg,#059669_0%,#047857_100%)] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass p-8 sm:p-12 rounded-2xl sm:rounded-3xl">
              <div className="text-6xl sm:text-8xl mb-6 sm:mb-8 animate-bounce">🎉</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                ¡Gracias por unirte!
              </h2>
              <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 leading-relaxed">
                Te mantendremos informado sobre el lanzamiento de ReUsa y todas las novedades de nuestra comunidad sostenible.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  eventLogger.logNewsletterAction('invitar_amigos')
                }}
                className="btn-primary text-sm sm:text-base"
              >
                Invitar a más amigos
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="newsletter" className="section-padding bg-[linear-gradient(135deg,#059669_0%,#047857_100%)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-80 sm:h-80 bg-white/5 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Únete a la comunidad
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                ¿Te interesa formar parte de <span className="text-green-200">ReUsa</span>?
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed px-4">
                Déjanos tu nombre y correo para enterarte cuando lancemos la plataforma y ser parte de nuestra comunidad desde el primer día.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2 sm:mb-3">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('name')}
                  onBlur={() => handleInputBlur('name')}
                  required
                  className="form-input bg-white/90 backdrop-blur-sm"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2 sm:mb-3">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus('email')}
                  onBlur={() => handleInputBlur('email')}
                  required
                  className="form-input bg-white/90 backdrop-blur-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => {
                  if (!isSubmitting) {
                    eventLogger.logNewsletterAction('submit')
                  }
                }}
                className="w-full bg-white hover:bg-gray-50 disabled:bg-gray-300 text-green-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg disabled:transform-none disabled:shadow-none text-base sm:text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-green-700 mr-2 sm:mr-3"></div>
                    Procesando...
                  </div>
                ) : (
                  'ÚNETE A REUSA'
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="text-center mt-6 sm:mt-8">
              <p className="text-xs sm:text-sm text-green-200 px-4">
                🔒 Tus datos están seguros • 📧 Sin spam • 🚫 Puedes cancelar en cualquier momento
              </p>
            </div>

            {/* Additional CTAs */}
            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <button
                  onClick={() => eventLogger.logNewsletterAction('compartir_redes')}
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                >
                  <span className="text-xl sm:text-2xl">📱</span>
                  <span>Compartir en redes</span>
                </button>
                
                <button
                  onClick={() => eventLogger.logNewsletterAction('saber_mas_plataforma')}
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                >
                  <span className="text-xl sm:text-2xl">💬</span>
                  <span>Saber más</span>
                </button>
                
                <button
                  onClick={() => eventLogger.logNewsletterAction('contacto_directo')}
                  className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 hover:bg-white/20 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 text-sm sm:text-base"
                >
                  <span className="text-xl sm:text-2xl">📧</span>
                  <span>Contacto directo</span>
                </button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 sm:mt-12 text-center">
              <p className="text-green-200 text-xs sm:text-sm mb-3 sm:mb-4">Ya se han unido más de 500 familias</p>
              <div className="flex justify-center space-x-1 sm:space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 