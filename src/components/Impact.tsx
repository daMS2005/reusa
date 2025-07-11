import Image from 'next/image'

export default function Impact() {
  const stats = [
    {
      number: '1,200+',
      label: 'Artículos reutilizados',
      icon: '♻️',
      color: 'green'
    },
    {
      number: '3.2',
      label: 'Toneladas de CO₂ evitadas',
      icon: '🌱',
      color: 'blue'
    },
    {
      number: 'RD$ 2,150,000',
      label: 'Ahorrados por las familias',
      icon: '💰',
      color: 'purple'
    },
    {
      number: '500+',
      label: 'Familias conectadas',
      icon: '👨‍👩‍👧‍👦',
      color: 'orange'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-50 border-green-200 text-green-800',
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800'
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-[linear-gradient(135deg,#f0fdf4_0%,#f0f9ff_100%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4 sm:mb-6">
            Nuestro Impacto
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Cada transacción en ReUsa ayuda a crear un futuro más sostenible
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 ${getColorClasses(stat.color)} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{stat.icon}</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6">
              Cada transacción en ReUsa ayuda a:
            </h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Evitar el desperdicio de prendas en buen estado</p>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Reducir la huella de carbono</p>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Apoyar a familias que buscan opciones accesibles y responsables</p>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs sm:text-sm">✓</span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">Fortalecer una comunidad solidaria y sostenible</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <Image
              src="/assets/playing_with_baby2.jpg"
              alt="Familia sostenible"
              width={600}
              height={400}
              className="rounded-xl sm:rounded-2xl shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 to-transparent rounded-xl sm:rounded-2xl"></div>
          </div>
        </div>

        {/* Visual Impact Chart */}
        <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-6 text-center">
            Progreso hacia nuestros objetivos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="75, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg sm:text-2xl font-bold text-green-600">75%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">Objetivo de reutilización</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="60, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg sm:text-2xl font-bold text-blue-600">60%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">Reducción de CO₂</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg sm:text-2xl font-bold text-purple-600">85%</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">Ahorro familiar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 