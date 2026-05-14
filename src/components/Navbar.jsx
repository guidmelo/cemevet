import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Módulos',     href: '#modulos' },
  { label: 'Silvestres',  href: '#silvestres' },
  { label: 'Estágio',     href: '#estagio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ',         href: '#faq' },
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen]   = useState(false)

  useEffect(() => {
    const h = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solid ? '#ffffff' : 'rgba(255,255,255,0.96)',
        borderBottom: `1px solid ${solid ? '#e5e7eb' : 'transparent'}`,
        boxShadow: solid ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      {/* Top bar — phone + socials */}
      <div
        className="hidden md:flex items-center justify-between px-8 lg:px-12 py-2 text-[0.75rem]"
        style={{ background: '#1f7a3c', color: 'rgba(255,255,255,0.85)' }}
      >
        <div className="flex items-center gap-1.5">
          <Phone size={11} className="opacity-70" />
          <span style={{ fontFamily: "'Nunito', sans-serif" }}>
            (81) 9 9999-9999 — Camaragibe, Pernambuco
          </span>
        </div>
        <span style={{ fontFamily: "'Nunito', sans-serif" }}>
          Reconhecido pelo CRMV · Estágio garantido
        </span>
      </div>

      {/* Main bar */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center animate-breathe"
            style={{ background: '#1f7a3c' }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/>
              <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5"/>
              <path d="M8 14v.5"/>
              <path d="M16 14v.5"/>
              <path d="M11.25 16.25h1.5L12 17l-.75-.75z"/>
              <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/>
            </svg>
          </div>
          <div>
            <p className="font-semibold text-ink leading-none text-[1rem]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              Cemevet
            </p>
            <p className="text-ink-muted text-[0.62rem] leading-none" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Cursos Veterinários
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.85rem] font-semibold text-ink-soft hover:text-brand transition-colors duration-200"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/5581999999999?text=Quero+me+matricular+no+curso+da+Cemevet"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex btn-primary text-[0.82rem] py-2.5 px-5"
        >
          Matricular-me
        </a>

        {/* Burger */}
        <button
          className="md:hidden p-1.5 text-ink-mid"
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
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-line bg-white"
          >
            <ul className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-[0.95rem] font-semibold text-ink-mid hover:text-brand transition-colors"
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
                  className="btn-primary w-full justify-center"
                >
                  Quero me matricular
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
