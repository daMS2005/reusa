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
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

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
        eventLogger.log('newsletter_success', { email: formData.email, name: formData.name })
      } else {
        throw new Error('Formspree submission failed')
      }
    } catch (error) {
      console.error('Newsletter signup error:', error)
      eventLogger.log('newsletter_error', { error: error instanceof Error ? error.message : 'Unknown error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="section-padding bg-[linear-gradient(135deg,#059669_0%,#047857_100%)] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass p-12 rounded-3xl">
              <div className="text-8xl mb-8 animate-bounce">🎉</div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                ¡Gracias por unirte!
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Te mantendremos informado sobre el lanzamiento de ReUsa y todas las novedades de nuestra comunidad sostenible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
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
    <section className="section-padding bg-[linear-gradient(135deg,#059669_0%,#047857_100%)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass p-12 lg:p-16 rounded-3xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Únete a la comunidad
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                ¿Te interesa formar parte de <span className="text-green-200">ReUsa</span>?
              </h2>
              <p className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Déjanos tu nombre y correo para enterarte cuando lancemos la plataforma y ser parte de nuestra comunidad desde el primer día.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-3">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input bg-white/90 backdrop-blur-sm"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input bg-white/90 backdrop-blur-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-50 disabled:bg-gray-300 text-green-700 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg disabled:transform-none disabled:shadow-none text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-700 mr-3"></div>
                    Procesando...
                  </div>
                ) : (
                  'ÚNETE A REUSA'
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="text-center mt-8">
              <p className="text-sm text-green-200">
                🔒 Tus datos están seguros • 📧 Sin spam • 🚫 Puedes cancelar en cualquier momento
              </p>
            </div>

            {/* Additional CTAs */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-6">
                <button
                  onClick={() => eventLogger.logButtonClick('compartir_redes', 'newsletter')}
                  className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <span className="text-2xl">📱</span>
                  <span>Compartir en redes</span>
                </button>
                
                <button
                  onClick={() => eventLogger.logButtonClick('saber_mas_plataforma', 'newsletter')}
                  className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <span className="text-2xl">💬</span>
                  <span>Saber más</span>
                </button>
                
                <button
                  onClick={() => eventLogger.logButtonClick('contacto_directo', 'newsletter')}
                  className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                >
                  <span className="text-2xl">📧</span>
                  <span>Contacto directo</span>
                </button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 text-center">
              <p className="text-green-200 text-sm mb-4">Ya se han unido más de 500 familias</p>
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 