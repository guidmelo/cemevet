import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const species = [
  {
    title: 'Psitacídeos',
    sub: 'Araras, periquitos, papagaios e cacatuas',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <ellipse cx="24" cy="28" rx="10" ry="14" fill="#c8e6d1" />
        <ellipse cx="24" cy="16" rx="8" ry="10" fill="#a0d4b0" />
        <polygon points="16,19 9,22 16,25" fill="#f59e0b" opacity="0.8" />
        <path d="M14,30 Q6,36 4,44" stroke="#a0d4b0" strokeWidth="4" strokeLinecap="round" />
        <path d="M34,30 Q42,36 44,44" stroke="#a0d4b0" strokeWidth="4" strokeLinecap="round" />
        <circle cx="20" cy="14" r="2.5" fill="#1f7a3c" />
        <circle cx="28" cy="14" r="2.5" fill="#1f7a3c" />
      </svg>
    ),
  },
  {
    title: 'Répteis',
    sub: 'Lagartos, serpentes e quelônios',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
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
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <ellipse cx="24" cy="28" rx="8" ry="12" fill="#c8e6d1" />
        <ellipse cx="24" cy="18" rx="7" ry="9" fill="#a0d4b0" />
        <path d="M16,26 Q6,20 2,24 Q10,29 16,28Z" fill="#a0d4b0" />
        <path d="M32,26 Q42,20 46,24 Q38,29 32,28Z" fill="#a0d4b0" />
        <polygon points="20,20 16,17 24,18" fill="#d97706" opacity="0.8" />
        <circle cx="20" cy="16" r="2" fill="#1f7a3c" />
        <circle cx="28" cy="16" r="2" fill="#1f7a3c" />
      </svg>
    ),
  },
  {
    title: 'Pequenos Mamíferos',
    sub: 'Ouriços, roedores exóticos e furões',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <ellipse cx="24" cy="30" rx="16" ry="12" fill="#c8e6d1" />
        <ellipse cx="23" cy="18" rx="12" ry="13" fill="#a0d4b0" />
        <ellipse cx="14" cy="10" rx="5" ry="8" fill="#a0d4b0" />
        <ellipse cx="32" cy="10" rx="5" ry="8" fill="#a0d4b0" />
        <path d="M38,36 Q44,31 46,24" stroke="#a0d4b0" strokeWidth="4" strokeLinecap="round" />
        <circle cx="19" cy="18" r="2" fill="#1f7a3c" />
        <circle cx="27" cy="18" r="2" fill="#1f7a3c" />
        <ellipse cx="23" cy="24" rx="3" ry="2" fill="#d97706" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Anfíbios',
    sub: 'Pererecas, sapos e salamandras',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <ellipse cx="24" cy="28" rx="14" ry="10" fill="#c8e6d1" />
        <ellipse cx="24" cy="20" rx="11" ry="12" fill="#a0d4b0" />
        <circle cx="18" cy="14" r="5" fill="#a0d4b0" />
        <circle cx="30" cy="14" r="5" fill="#a0d4b0" />
        <circle cx="18" cy="14" r="2.5" fill="white" />
        <circle cx="30" cy="14" r="2.5" fill="white" />
        <circle cx="19" cy="14" r="1.2" fill="#1f7a3c" />
        <circle cx="31" cy="14" r="1.2" fill="#1f7a3c" />
        <path d="M10,36 Q4,42 2,46" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
        <path d="M38,36 Q44,42 46,46" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Crocodilianos',
    sub: 'Jacarés e suas particularidades clínicas',
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <ellipse cx="22" cy="26" rx="18" ry="10" fill="#c8e6d1" />
        <path d="M40,26 Q46,23 46,26 Q46,29 40,26Z" fill="#a0d4b0" />
        <path d="M4,18 Q2,13 4,8" stroke="#a0d4b0" strokeWidth="3" strokeLinecap="round" />
        <rect x="8" y="32" width="5" height="9" rx="2.5" fill="#a0d4b0" />
        <rect x="18" y="34" width="5" height="7" rx="2.5" fill="#a0d4b0" />
        <rect x="28" y="34" width="5" height="7" rx="2.5" fill="#a0d4b0" />
        <rect x="36" y="32" width="5" height="9" rx="2.5" fill="#a0d4b0" />
        <path d="M6,22 L38,22" stroke="white" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
        <circle cx="12" cy="20" r="2" fill="#1f7a3c" opacity="0.7" />
      </svg>
    ),
  },
]

export default function Wildlife() {
  const { ref, inView } = useReveal()

  return (
    <section id="silvestres" ref={ref} className="py-20 md:py-24 px-5 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25,0.46,0.45,0.94] }}
          >
            <div className="section-divider" />
            <p className="section-label mb-3">Exclusivo Cemevet</p>
            <h2 className="section-heading mb-5">
              Workshop de<br />
              <span className="text-brand-gradient">Animais Silvestres</span>
            </h2>
            <p className="body-copy mb-6">
              Um fim de semana intensivo que vai além do currículo padrão.
              Aprenda a manejar, auxiliar no atendimento e compreender a
              biologia de espécies exóticas — uma habilidade cada vez mais
              valorizada no mercado veterinário.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Calendar, label: 'Formato',  value: 'Fim de semana' },
                { icon: Clock,    label: 'Duração',  value: '16h práticas' },
                { icon: MapPin,   label: 'Local',    value: 'Camaragibe / PE' },
                { icon: Users,    label: 'Vagas',    value: 'Turmas limitadas' },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-line bg-surface"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: '#e8f5ed' }}
                  >
                    <Icon size={17} style={{ color: '#1f7a3c' }} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-ink-muted text-[0.68rem] uppercase tracking-wide" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      {label}
                    </p>
                    <p className="font-bold text-ink text-[0.85rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5581999999999?text=Quero+saber+sobre+o+Workshop+de+Silvestres"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero participar
            </a>
          </motion.div>

          {/* Right — species grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.25,0.46,0.45,0.94] }}
          >
            <div className="grid grid-cols-2 gap-4">
              {species.map(({ title, sub, svg }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07, duration: 0.55 }}
                  className="p-4 rounded-xl border border-line bg-white card-lift"
                >
                  <div className="mb-3">{svg}</div>
                  <p className="font-bold text-ink text-[0.88rem] mb-0.5" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                    {title}
                  </p>
                  <p className="text-ink-soft text-[0.75rem] leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
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
