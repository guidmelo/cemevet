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

const navLinks = [
  { label: 'Como é estudar',    href: '#journey' },
  { label: 'Módulos',          href: '#modules' },
  { label: 'Workshop Silvestres', href: '#wildlife' },
  { label: 'Estágio Garantido', href: '#internship' },
  { label: 'Depoimentos',      href: '#testimonials' },
]

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-20 pb-8 px-6 md:px-10"
      style={{ background: 'linear-gradient(150deg, #0d1f06 0%, #1a3a0a 40%, #2d6a1f 100%)' }}
    >
      {/* Blobs */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-10 blob-2"
        style={{ background: 'radial-gradient(circle, #6db85c, transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none opacity-10 blob-1"
        style={{ background: 'radial-gradient(circle, #a8d5a2, transparent)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Final CTA block */}
        <div
          className="rounded-3xl p-10 md:p-14 mb-16 text-center"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <p
            className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] mb-4"
            style={{ color: '#a8d5a2', fontFamily: "'Nunito', sans-serif" }}
          >
            Próximo passo
          </p>
          <h2
            className="text-[2rem] md:text-[2.6rem] font-semibold text-white mb-3 leading-tight"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Pronto para começar sua jornada?
          </h2>
          <p
            className="text-white/55 mb-8 text-[0.95rem] max-w-md mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Vagas limitadas por turma. Garanta a sua agora.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5581999999999?text=Quero+me+matricular+na+Cemevet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-bold text-green-bio bg-white text-[0.95rem] transition-all hover:scale-105 hover:shadow-2xl"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Quero me matricular agora
            </a>
            <a
              href="https://wa.me/5581999999999?text=Quero+tirar+dúvidas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-semibold text-white text-[0.95rem] transition-all hover:bg-white/15"
              style={{
                background: 'rgba(255,255,255,0.09)',
                border: '1.5px solid rgba(255,255,255,0.18)',
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Tirar dúvidas
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(168,213,162,0.15)', border: '1px solid rgba(168,213,162,0.25)' }}
              >
                <PawPrint size={16} className="text-green-pale" strokeWidth={1.8} />
              </div>
              <span
                className="text-[1.1rem] font-semibold text-white"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                Cemevet Cursos
              </span>
            </div>
            <p
              className="text-white/50 text-[0.85rem] leading-relaxed mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Formando auxiliares veterinários com estágio garantido
              e certificação CRMV em Camaragibe, Pernambuco.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: FacebookIcon,  label: 'Facebook' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3
              className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white/40 mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Navegação
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/55 text-[0.88rem] hover:text-white transition-colors"
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
              className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white/40 mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Contato
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-green-pale mt-0.5 shrink-0" strokeWidth={1.8} />
                <p className="text-white/55 text-[0.875rem] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Camaragibe, Pernambuco<br />
                  Grande Recife — PE
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} className="text-green-pale shrink-0" strokeWidth={1.8} />
                <a
                  href="https://wa.me/5581999999999"
                  className="text-white/55 text-[0.875rem] hover:text-white transition-colors"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  (81) 9 9999-9999
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-white/30 text-[0.78rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
            © {new Date().getFullYear()} Cemevet Cursos. Todos os direitos reservados.
          </p>
          <p className="text-white/25 text-[0.78rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
            Camaragibe · Recife · Pernambuco
          </p>
        </div>
      </div>
    </footer>
  )
}
