import Image from 'next/image'

export default function About() {
  return (
    <section className="section-padding gradient-section">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Sobre ReUsa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¿Qué es <span className="text-gradient">ReUsa</span>?
          </h2>
          <div className="w-24 h-1 bg-[linear-gradient(to_right,#059669,#10b981)] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                ReUsa es una <span className="font-semibold text-green-600">plataforma colaborativa</span> creada para que madres, padres y cuidadores puedan intercambiar, donar, vender o adquirir ropa, juguetes y libros infantiles en buen estado, de forma segura, práctica y solidaria.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Nació con el propósito de darle una <span className="font-semibold text-green-600">segunda vida</span> a los artículos que los niños ya no usan, fomentando el consumo consciente, reduciendo el desperdicio y creando una comunidad que comparte y se apoya mutuamente.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="card card-hover p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">♻️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Reutilización Sostenible</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Extendemos la vida útil de artículos infantiles</p>
              </div>

              <div className="card card-hover p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Comunidad Solidaria</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Conectamos familias que comparten valores</p>
              </div>

              <div className="card card-hover p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">💰</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Ahorro Familiar</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Reducimos costos para las familias</p>
              </div>

              <div className="card card-hover p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Impacto Ambiental</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Reducimos la huella de carbono</p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-[linear-gradient(to_right,#f0fdf4,#f0f9ff)] p-6 sm:p-8 rounded-xl sm:rounded-2xl border-l-4 border-green-500">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-2xl sm:text-4xl">💚</div>
                <div>
                  <p className="text-base sm:text-lg text-gray-800 font-medium italic mb-2">
                    &quot;En ReUsa, reutilizar es cuidar. No solo ahorras y liberas espacio, también creas un impacto positivo en otras familias y en el planeta.&quot;
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">— Nuestra comunidad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="relative h-48 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/family1.jpg"
                    alt="Familia feliz"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="relative h-36 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/kids1.jpg"
                    alt="Niños jugando"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                <div className="relative h-36 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/toys1.jpg"
                    alt="Juguetes infantiles"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="relative h-48 sm:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/assets/family2.jpg"
                    alt="Familia compartiendo"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-sm sm:text-lg">⭐</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm sm:text-base">100%</div>
                  <div className="text-xs text-gray-600">Seguro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 