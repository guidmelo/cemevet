import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const G = '#1a6b3c'   // green brand
const links = [
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Módulos',     href: '#modulos' },
  { label: 'Silvestres',  href: '#silvestres' },
  { label: 'Estágio',     href: '#estagio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ',         href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: scrolled ? '0 1px 10px rgba(0,0,0,0.08)' : 'none',
      transition: 'box-shadow 0.3s',
    }}>
      {/* Top strip */}
      <div style={{ background: G, padding: '6px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Phone size={12} color="rgba(255,255,255,0.7)" />
            <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>
              (81) 9 9999-9999 · Camaragibe, PE
            </span>
          </div>
          <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>
            Reconhecido pelo CRMV · Estágio garantido
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div className="anim-breathe" style={{ width: 36, height: 36, borderRadius: 8, background: G, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/>
              <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5"/>
              <path d="M8 14v.5M16 14v.5"/>
              <path d="M11.25 16.25h1.5L12 17l-.75-.75z"/>
              <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/>
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 18, fontWeight: 600, color: '#111827', lineHeight: 1 }}>Cemevet</p>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 11, color: '#9ca3af', lineHeight: 1, marginTop: 2 }}>Cursos Veterinários</p>
          </div>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 28, listStyle: 'none', margin: 0, padding: 0 }} className="hidden md:flex">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 600, color: '#374151', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = G}
                onMouseLeave={e => e.target.style.color = '#374151'}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="https://wa.me/5581999999999?text=Quero+me+matricular+na+Cemevet"
          target="_blank" rel="noopener noreferrer"
          className="hidden md:flex"
          style={{ fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', background: G, padding: '9px 20px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 2px 10px rgba(26,107,60,0.3)', transition: 'opacity 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Matricular-me
        </a>

        {/* Burger */}
        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#374151', padding: 4 }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden', borderTop: '1px solid #e5e7eb', background: '#fff' }}>
            <ul style={{ listStyle: 'none', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 600, color: '#374151', textDecoration: 'none' }}>{l.label}</a>
                </li>
              ))}
              <li>
                <a href="https://wa.me/5581999999999?text=Quero+me+matricular"
                  target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', fontFamily: 'Nunito, sans-serif', fontSize: 15, fontWeight: 700, color: '#fff', background: G, padding: '12px', borderRadius: 8, textDecoration: 'none' }}>
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
