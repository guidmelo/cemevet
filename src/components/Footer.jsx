import { motion } from 'framer-motion'
import { PawPrint, MapPin, Phone } from 'lucide-react'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8 px-5 md:px-8"
      style={{ background: 'linear-gradient(160deg, #1a3a0a 0%, #2d6a1f 100%)' }}
    >
      {/* Blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 blob-2"
        style={{ background: 'radial-gradient(circle, #6db85c, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 opacity-10 blob-1"
        style={{ background: 'radial-gradient(circle, #a8d5a2, transparent)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top CTA strip */}
        <div
          className="rounded-3xl p-8 md:p-10 mb-14 text-center"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <p className="text-4xl mb-3">🐾</p>
          <h2
            className="text-2xl md:text-3xl font-semibold text-white mb-3"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Pronto para começar sua jornada?
          </h2>
          <p
            className="text-white/70 mb-6 text-base"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Vagas limitadas por turma. Garanta a sua agora.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5581999999999?text=Quero+me+matricular+na+Cemevet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-bold text-green-bio bg-white transition-all hover:scale-105 hover:shadow-xl text-base"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Quero me matricular agora →
            </a>
            <a
              href="https://wa.me/5581999999999?text=Quero+tirar+dúvidas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-white text-base transition-all hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Tirar dúvidas
            </a>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-green-glow/20 flex items-center justify-center border border-green-glow/30">
                <PawPrint size={18} className="text-green-pale" />
              </div>
              <span
                className="text-xl font-semibold text-white"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                Cemevet Cursos
              </span>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed mb-4"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Formando auxiliares veterinários com estágio garantido e
              certificação CRMV em Camaragibe, Pernambuco.
            </p>
            <div className="flex gap-3">
              {[
                { icon: InstagramIcon, label: 'Instagram', href: '#' },
                { icon: FacebookIcon, label: 'Facebook', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                  aria-label={label}
                >
                  <Icon size={16} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className="font-semibold text-white mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Como é estudar', href: '#journey' },
                { label: 'Módulos', href: '#modules' },
                { label: 'Workshop Silvestres', href: '#wildlife' },
                { label: 'Estágio Garantido', href: '#internship' },
                { label: 'Depoimentos', href: '#testimonials' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-semibold text-white mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Contato
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-green-pale mt-0.5 shrink-0" />
                <p className="text-white/60 text-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Camaragibe, Pernambuco<br />
                  Grande Recife — PE
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-pale shrink-0" />
                <a
                  href="https://wa.me/5581999999999"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  (81) 9 9999-9999
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p className="text-white/40 text-xs" style={{ fontFamily: "'Nunito', sans-serif" }}>
            © {new Date().getFullYear()} Cemevet Cursos. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Camaragibe • Recife • Pernambuco
          </p>
        </div>
      </div>
    </footer>
  )
}
