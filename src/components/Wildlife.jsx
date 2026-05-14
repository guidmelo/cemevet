import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const G = '#1f7a3c'

const species = [
  {
    title: 'Psitacídeos',
    sub: 'Araras, periquitos, papagaios e cacatuas',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 32, height: 32 }}>
        <ellipse cx="24" cy="28" rx="10" ry="14" fill="#c8e6d1" />
        <ellipse cx="24" cy="16" rx="8" ry="10" fill="#a0d4b0" />
        <polygon points="16,19 9,22 16,25" fill="#f59e0b" opacity="0.8" />
        <path d="M14,30 Q6,36 4,44" stroke="#a0d4b0" strokeWidth="4" strokeLinecap="round" />
        <path d="M34,30 Q42,36 44,44" stroke="#a0d4b0" strokeWidth="4" strokeLinecap="round" />
        <circle cx="20" cy="14" r="2.5" fill={G} />
        <circle cx="28" cy="14" r="2.5" fill={G} />
      </svg>
    ),
  },
  {
    title: 'Répteis',
    sub: 'Lagartos, serpentes e quelônios',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 32, height: 32 }}>
        <ellipse cx="20" cy="26" rx="16" ry="10" fill="#c8e6d1" />
        <ellipse cx="14" cy="26" rx="10" ry="7" fill="#a0d4b0" />
        <path d="M36,26 Q42,23 46,24 Q46,26 46,28 Q42,29 36,26Z" fill="#a0d4b0" />
        <path d="M4,19 Q1,14 3,10" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
        <path d="M4,33 Q1,38 3,42" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
        <path d="M14,14 Q13,8 15,5" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
        <path d="M14,38 Q13,44 15,47" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Rapinantes',
    sub: 'Gaviões, corujas, falcões e urubus',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 32, height: 32 }}>
        <ellipse cx="24" cy="28" rx="8" ry="12" fill="#c8e6d1" />
        <ellipse cx="24" cy="18" rx="7" ry="9" fill="#a0d4b0" />
        <path d="M16,26 Q6,20 2,24 Q10,29 16,28Z" fill="#a0d4b0" />
        <path d="M32,26 Q42,20 46,24 Q38,29 32,28Z" fill="#a0d4b0" />
        <polygon points="20,20 16,17 24,18" fill="#d97706" opacity="0.8" />
        <circle cx="20" cy="16" r="2" fill={G} />
        <circle cx="28" cy="16" r="2" fill={G} />
      </svg>
    ),
  },
  {
    title: 'Pequenos Mamíferos',
    sub: 'Ouriços, roedores exóticos e furões',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 32, height: 32 }}>
        <ellipse cx="24" cy="30" rx="16" ry="12" fill="#c8e6d1" />
        <ellipse cx="23" cy="18" rx="12" ry="13" fill="#a0d4b0" />
        <ellipse cx="14" cy="10" rx="5" ry="8" fill="#a0d4b0" />
        <ellipse cx="32" cy="10" rx="5" ry="8" fill="#a0d4b0" />
        <path d="M38,36 Q44,31 46,24" stroke="#a0d4b0" strokeWidth="4" strokeLinecap="round" />
        <circle cx="19" cy="18" r="2" fill={G} />
        <circle cx="27" cy="18" r="2" fill={G} />
        <ellipse cx="23" cy="24" rx="3" ry="2" fill="#d97706" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Anfíbios',
    sub: 'Pererecas, sapos e salamandras',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 32, height: 32 }}>
        <ellipse cx="24" cy="28" rx="14" ry="10" fill="#c8e6d1" />
        <ellipse cx="24" cy="20" rx="11" ry="12" fill="#a0d4b0" />
        <circle cx="18" cy="14" r="5" fill="#a0d4b0" />
        <circle cx="30" cy="14" r="5" fill="#a0d4b0" />
        <circle cx="18" cy="14" r="2.5" fill="white" />
        <circle cx="30" cy="14" r="2.5" fill="white" />
        <circle cx="19" cy="14" r="1.2" fill={G} />
        <circle cx="31" cy="14" r="1.2" fill={G} />
        <path d="M10,36 Q4,42 2,46" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
        <path d="M38,36 Q44,42 46,46" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Crocodilianos',
    sub: 'Jacarés e suas particularidades clínicas',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 32, height: 32 }}>
        <ellipse cx="22" cy="26" rx="18" ry="10" fill="#c8e6d1" />
        <path d="M40,26 Q46,23 46,26 Q46,29 40,26Z" fill="#a0d4b0" />
        <path d="M4,18 Q2,13 4,8" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
        <rect x="8" y="32" width="5" height="9" rx="2.5" fill="#a0d4b0" />
        <rect x="18" y="34" width="5" height="7" rx="2.5" fill="#a0d4b0" />
        <rect x="28" y="34" width="5" height="7" rx="2.5" fill="#a0d4b0" />
        <rect x="36" y="32" width="5" height="9" rx="2.5" fill="#a0d4b0" />
        <circle cx="12" cy="20" r="2" fill={G} opacity="0.7" />
      </svg>
    ),
  },
]

export default function Wildlife() {
  const { ref, inView } = useReveal()

  return (
    <section id="silvestres" ref={ref} style={{ padding: '80px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{ width: 40, height: 3, background: G, borderRadius: 2, marginBottom: 16 }} />
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
              Exclusivo Cemevet
            </p>
            <h2 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', fontWeight: 600, color: '#111827', lineHeight: 1.15, marginBottom: 20 }}>
              Workshop de<br />
              <span style={{ background: 'linear-gradient(135deg, #1f7a3c, #2da861)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Animais Silvestres
              </span>
            </h2>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.75, marginBottom: 24 }}>
              Um fim de semana intensivo que vai além do currículo padrão.
              Aprenda a manejar, auxiliar no atendimento e compreender a
              biologia de espécies exóticas — uma habilidade cada vez mais
              valorizada no mercado veterinário.
            </p>

            <div className="grid grid-cols-2 gap-4" style={{ marginBottom: 32 }}>
              {[
                { icon: Calendar, label: 'Formato',  value: 'Fim de semana' },
                { icon: Clock,    label: 'Duração',  value: '16h práticas' },
                { icon: MapPin,   label: 'Local',    value: 'Camaragibe / PE' },
                { icon: Users,    label: 'Vagas',    value: 'Turmas limitadas' },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 12, border: '1px solid #e5e7eb', background: '#f9fafb' }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: '#e8f5ed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={17} style={{ color: G }} strokeWidth={2} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 10, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
                    <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#111827' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5581999999999?text=Quero+saber+sobre+o+Workshop+de+Silvestres"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', background: G, padding: '11px 24px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 2px 12px rgba(31,122,60,0.32)' }}
            >
              Quero participar
            </a>
          </motion.div>

          {/* Right — species grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {species.map(({ title, sub, svg }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.55 }}
                  style={{ padding: 16, borderRadius: 14, border: '1px solid #e5e7eb', background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
                >
                  <div style={{ marginBottom: 12 }}>{svg}</div>
                  <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600, fontSize: '0.88rem', color: '#111827', marginBottom: 4 }}>
                    {title}
                  </p>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', color: '#6b7280', lineHeight: 1.5 }}>
                    {sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
