import { MapPin, Phone } from 'lucide-react'

const G = '#1f7a3c'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

const navLinks = [
  { label: 'Sobre a Cemevet',     href: '#sobre' },
  { label: 'Grade Curricular',    href: '#modulos' },
  { label: 'Workshop Silvestres', href: '#silvestres' },
  { label: 'Estágio Garantido',   href: '#estagio' },
  { label: 'Depoimentos',         href: '#depoimentos' },
  { label: 'Dúvidas Frequentes',  href: '#faq' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #e5e7eb' }}>

      {/* Final CTA block */}
      <div style={{ padding: '64px 24px', textAlign: 'center', background: '#1f7a3c' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 700, color: '#a0d4b0', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
            Próximo passo
          </p>
          <h2 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.3rem)', fontWeight: 600, color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
            Pronto para começar sua jornada?
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
            Vagas limitadas por turma. Fale com a equipe agora e garanta a sua.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5581999999999?text=Quero+me+matricular+na+Cemevet"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, background: '#fff', fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: G, textDecoration: 'none' }}
            >
              Quero me matricular agora
            </a>
            <a
              href="https://wa.me/5581999999999?text=Quero+tirar+duvidas+sobre+a+Cemevet"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 28px', borderRadius: 8, border: '1.5px solid rgba(255,255,255,0.35)', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#fff', textDecoration: 'none' }}
            >
              Tirar dúvidas
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }} className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: G, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5"/>
                  <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.96-1.45-2.344-2.5"/>
                  <path d="M8 14v.5M16 14v.5"/>
                  <path d="M11.25 16.25h1.5L12 17l-.75-.75z"/>
                  <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#111827', lineHeight: 1.2 }}>Cemevet Cursos</p>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.68rem', color: '#9ca3af', lineHeight: 1.3 }}>Auxiliar de Medicina Veterinária</p>
              </div>
            </div>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
              Formando auxiliares veterinários com estágio garantido e
              certificação CRMV em Camaragibe, Pernambuco.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[{ Icon: InstagramIcon, label: 'Instagram' }, { Icon: FacebookIcon, label: 'Facebook' }].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{ width: 36, height: 36, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e5e7eb', color: '#6b7280', textDecoration: 'none' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#111827', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
              Navegação
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#111827', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
              Contato
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={15} style={{ color: G, marginTop: 2, flexShrink: 0 }} />
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.6 }}>
                  Camaragibe, Pernambuco<br />Grande Recife — PE
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={15} style={{ color: G, flexShrink: 0 }} />
                <a href="https://wa.me/5581999999999" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#6b7280', textDecoration: 'none' }}>
                  (81) 9 9999-9999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div style={{ borderTop: '1px solid #e5e7eb', padding: '20px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: 8 }} className="sm:flex-row">
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', color: '#9ca3af' }}>
            © {new Date().getFullYear()} Cemevet Cursos. Todos os direitos reservados.
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            {['Termos de uso', 'Privacidade'].map((l) => (
              <a key={l} href="#" style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', color: '#9ca3af', textDecoration: 'none' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
