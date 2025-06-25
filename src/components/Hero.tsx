'use client'

import Image from 'next/image'
import { eventLogger } from '@/utils/logger'

export default function Hero() {
  const handleButtonClick = (action: string) => {
    eventLogger.logButtonClick(action, 'hero')
  }

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Plataforma de reutilización sostenible
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">ReUsa</span>
              <br />
              <span className="text-gray-800">Reutilizar es</span>
              <br />
              <span className="text-gradient">cuidar</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Intercambia, dona, vende o compra artículos infantiles de forma práctica y solidaria. 
              <span className="font-semibold text-green-600"> Construyendo un futuro más sostenible.</span>
            </p>

            {/* Main CTA Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl">
              <button
                onClick={() => handleButtonClick('intercambiar')}
                className="group bg-[linear-gradient(to_right,#059669,#10b981)] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🔄</div>
                <div className="text-sm">Intercambiar</div>
              </button>

              <button
                onClick={() => handleButtonClick('donar')}
                className="group bg-[linear-gradient(to_right,#3b82f6,#2563eb)] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🎁</div>
                <div className="text-sm">Donar</div>
              </button>

              <button
                onClick={() => handleButtonClick('vender')}
                className="group bg-[linear-gradient(to_right,#8b5cf6,#7c3aed)] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">💸</div>
                <div className="text-sm">Vender</div>
              </button>

              <button
                onClick={() => handleButtonClick('comprar')}
                className="group bg-[linear-gradient(to_right,#f59e42,#f97316)] text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🛒</div>
                <div className="text-sm">Comprar</div>
              </button>
            </div>

            {/* Additional CTAs */}
            <div className="flex flex-wrap gap-6 mt-6">
              <button
                onClick={() => handleButtonClick('quiero_donar')}
                className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-[linear-gradient(135deg,#fff,#e0f7ef)] border border-green-200 shadow-lg hover:shadow-2xl hover:bg-[linear-gradient(135deg,#e0ffe6,#c6f6d5)] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"
                style={{ fontWeight: 700, fontSize: '1.25rem' }}
              >
                <span className="text-3xl">❤️</span>
                <span className="font-bold text-gray-700">Quiero Donar</span>
              </button>

              <button
                onClick={() => handleButtonClick('saber_mas')}
                className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-[linear-gradient(135deg,#fff,#e6f0fa)] border border-blue-200 shadow-lg hover:shadow-2xl hover:bg-[linear-gradient(135deg,#e6f7ff,#dbeafe)] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
                style={{ fontWeight: 700, fontSize: '1.25rem' }}
              >
                <span className="text-3xl">💬</span>
                <span className="font-bold text-gray-700">Saber Más</span>
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative z-0">
            <div className="relative z-10">
              <Image
                src="/assets/large_image_kids.jpg"
                alt="Niños jugando felices"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">♻️</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">1,200+</div>
                  <div className="text-sm text-gray-600">Artículos reutilizados</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Familias conectadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 