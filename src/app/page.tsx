import Hero from '@/components/Hero'
import About from '@/components/About'
import Mission from '@/components/Mission'
import HowItWorks from '@/components/HowItWorks'
import Impact from '@/components/Impact'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Mission />
      <HowItWorks />
      <Impact />
      <Newsletter />
      <Footer />
    </main>
  )
}
