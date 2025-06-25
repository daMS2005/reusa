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
    <section className="py-20 px-4 bg-[linear-gradient(135deg,#f0fdf4_0%,#f0f9ff_100%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Nuestro Impacto
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada transacción en ReUsa ayuda a crear un futuro más sostenible
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 ${getColorClasses(stat.color)} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Cada transacción en ReUsa ayuda a:
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Evitar el desperdicio de prendas en buen estado</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Reducir la huella de carbono</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Apoyar a familias que buscan opciones accesibles y responsables</p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700">Fortalecer una comunidad solidaria y sostenible</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/assets/playing_with_baby2.jpg"
              alt="Familia sostenible"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Visual Impact Chart */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
            Progreso hacia nuestros objetivos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
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
                  <span className="text-2xl font-bold text-green-600">75%</span>
                </div>
              </div>
              <p className="text-gray-600">Objetivo de reutilización</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
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
                  <span className="text-2xl font-bold text-blue-600">60%</span>
                </div>
              </div>
              <p className="text-gray-600">Reducción de CO₂</p>
            </div>
            
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
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
                  <span className="text-2xl font-bold text-purple-600">85%</span>
                </div>
              </div>
              <p className="text-gray-600">Ahorro familiar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 