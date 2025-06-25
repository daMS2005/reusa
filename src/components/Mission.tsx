import Image from 'next/image'

export default function Mission() {
  return (
    <section className="py-20 px-4 bg-[linear-gradient(135deg,#f0fdf4_0%,#f0f9ff_100%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Nuestra Misión
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Statement */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Empoderar a las familias para extender la vida útil de ropa, libros y juguetes infantiles mediante una plataforma accesible, sostenible y solidaria, que promueve la reutilización responsable, el ahorro y el bienestar de la comunidad.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-800">Propuesta de Valor</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              ReUsa conecta a padres y madres con una red confiable para intercambiar, donar o adquirir artículos infantiles de calidad, reduciendo el desperdicio, fomentando el consumo consciente y generando impacto positivo en sus hogares y en el planeta.
            </p>
          </div>
        </div>

        {/* Visual Element */}
        <div className="text-center">
          <div className="relative max-w-2xl mx-auto">
            <Image
              src="/assets/playing_with_baby1.jpg"
              alt="Padres jugando con bebé"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 