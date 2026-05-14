import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, PawPrint } from 'lucide-react'

const links = [
  { label: 'Sobre',        href: '#journey' },
  { label: 'Módulos',      href: '#modules' },
  { label: 'Silvestres',   href: '#wildlife' },
  { label: 'Estágio',      href: '#internship' },
  { label: 'Depoimentos',  href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(237,247,234,0.8)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(45,106,31,0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-[64px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center animate-breathe"
            style={{ background: scrolled ? '#2d6a1f' : 'rgba(255,255,255,0.18)' }}
          >
            <PawPrint size={15} style={{ color: scrolled ? 'white' : 'rgba(168,213,162,0.9)' }} strokeWidth={2} />
          </div>
          <span
            className="text-[1.1rem] font-semibold transition-colors duration-300"
            style={{
              fontFamily: "'Fredoka', sans-serif",
              color: scrolled ? '#2d6a1f' : 'white',
            }}
          >
            Cemevet
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[0.88rem] font-medium transition-colors duration-200 group"
                style={{
                  color: scrolled ? '#4a5e44' : 'rgba(255,255,255,0.75)',
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px rounded-full transition-all duration-300 w-0 group-hover:w-full"
                  style={{ background: scrolled ? '#2d6a1f' : 'rgba(168,213,162,0.8)' }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="https://wa.me/5581999999999?text=Quero+saber+mais+sobre+o+curso"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center px-5 py-2 rounded-full text-white text-[0.84rem] font-semibold transition-all hover:scale-105 hover:shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #2d6a1f, #4a8a2a)',
            boxShadow: '0 4px 14px rgba(45,106,31,0.35)',
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Matricular-me
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: scrolled ? '#2d6a1f' : 'white' }}
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
            className="md:hidden overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.97)',
              borderTop: '1px solid #edf7ea',
              backdropFilter: 'blur(20px)',
            }}
          >
            <ul className="flex flex-col px-6 py-5 gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-[0.95rem] font-medium text-ink-soft hover:text-green-bio transition-colors"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/5581999999999?text=Quero+me+matricular"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-full text-white font-semibold text-[0.9rem]"
                  style={{
                    background: 'linear-gradient(135deg, #2d6a1f, #4a8a2a)',
                    fontFamily: "'Nunito', sans-serif",
                  }}
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
