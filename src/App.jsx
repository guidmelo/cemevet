import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Journey from './components/Journey'
import Modules from './components/Modules'
import Wildlife from './components/Wildlife'
import Internship from './components/Internship'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <Journey />
      <Modules />
      <Wildlife />
      <Internship />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
