import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Publica lo que ya no usas',
      description: 'Sube fotos de ropa, juguetes o libros que tu hijo ya no necesita. Es rápido y fácil.',
      icon: '📱',
      image: '/assets/sorting_clothes1.jpg'
    },
    {
      number: '02',
      title: 'Conecta con otras familias',
      description: 'Encuentra familias cercanas con perfiles verificados y artículos que te interesan.',
      icon: '🤝',
      image: '/assets/sorting_clothes2.jpg'
    },
    {
      number: '03',
      title: 'Intercambia, dona o vende',
      description: 'Acuerda el intercambio, la donación o la venta de forma segura y confiable.',
      icon: '✅',
      image: '/assets/sorting_clothes3.jpg'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            ¿Cómo Funciona?
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tres pasos simples para darle una segunda vida a los artículos infantiles
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Image */}
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-300 transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a nuestra comunidad y comienza a reutilizar de forma responsable
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
              Únete a ReUsa
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 