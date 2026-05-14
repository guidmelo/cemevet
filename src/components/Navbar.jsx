import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, PawPrint } from 'lucide-react'

const links = [
  { label: 'Sobre', href: '#journey' },
  { label: 'Módulos', href: '#modules' },
  { label: 'Silvestres', href: '#wildlife' },
  { label: 'Estágio', href: '#internship' },
  { label: 'Depoimentos', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-green-bio/10 border-b border-green-pale/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-green-bio flex items-center justify-center animate-breathe">
            <PawPrint size={18} className="text-white" />
          </div>
          <span
            className="text-xl font-display font-semibold"
            style={{ fontFamily: "'Fredoka', sans-serif", color: '#2d6a1f' }}
          >
            Cemevet
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-green-bio transition-colors duration-300 relative group"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-green-bio rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5581999999999?text=Quero+saber+mais+sobre+o+curso+de+Auxiliar+Veterinário"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #2d6a1f, #4a8a2a)',
            fontFamily: "'Nunito', sans-serif",
            boxShadow: '0 4px 15px rgba(45,106,31,0.35)',
          }}
        >
          Quero me matricular
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg text-green-bio"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-green-pale/40 px-5 pb-5"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-gray-700 hover:text-green-bio transition-colors"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/5581999999999?text=Quero+saber+mais+sobre+o+curso+de+Auxiliar+Veterinário"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-full text-white font-semibold"
                  style={{ background: 'linear-gradient(135deg, #2d6a1f, #4a8a2a)' }}
                >
                  Quero me matricular
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
