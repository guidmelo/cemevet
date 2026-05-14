import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Calendar, Clock, MapPin, Zap, Bird, Bug, Rabbit } from 'lucide-react'

/* SVG silhouettes for exotic animals — no emojis */
function BirdSilhouette({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="40" cy="44" rx="16" ry="22" fill="currentColor" opacity="0.7" />
      <ellipse cx="40" cy="26" rx="13" ry="16" fill="currentColor" opacity="0.85" />
      <polygon points="28,28 16,32 28,36" fill="currentColor" opacity="0.6" />
      <path d="M24,50 Q10,58 8,70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
      <path d="M56,50 Q70,58 72,70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
      <path d="M28,68 Q40,62 52,68" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function ReptileSilhouette({ className = '' }) {
  return (
    <svg viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="30" cy="30" rx="22" ry="14" fill="currentColor" opacity="0.7" />
      <ellipse cx="20" cy="30" rx="14" ry="10" fill="currentColor" opacity="0.5" />
      <path d="M52,30 Q65,26 80,28 Q88,29 88,30 Q88,31 80,32 Q65,34 52,30Z" fill="currentColor" opacity="0.6" />
      <path d="M8,20 Q2,14 4,8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M8,40 Q2,46 4,52" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M24,16 Q22,8 26,4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M24,44 Q22,52 26,56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function HawkSilhouette({ className = '' }) {
  return (
    <svg viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="50" cy="38" rx="12" ry="18" fill="currentColor" opacity="0.75" />
      <ellipse cx="50" cy="24" rx="10" ry="12" fill="currentColor" opacity="0.85" />
      <path d="M38,36 Q20,28 6,34 Q16,40 38,42Z" fill="currentColor" opacity="0.6" />
      <path d="M62,36 Q80,28 94,34 Q84,40 62,42Z" fill="currentColor" opacity="0.6" />
      <polygon points="44,27 40,22 50,24" fill="currentColor" opacity="0.6" />
      <path d="M46,56 Q50,62 54,56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
    </svg>
  )
}

function RodentSilhouette({ className = '' }) {
  return (
    <svg viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="40" cy="44" rx="26" ry="18" fill="currentColor" opacity="0.65" />
      <ellipse cx="38" cy="28" rx="18" ry="20" fill="currentColor" opacity="0.75" />
      <ellipse cx="26" cy="14" rx="7" ry="11" fill="currentColor" opacity="0.6" />
      <ellipse cx="50" cy="14" rx="7" ry="11" fill="currentColor" opacity="0.6" />
      <path d="M66,52 Q76,46 78,36" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
      <circle cx="32" cy="24" r="2" fill="white" opacity="0.7" />
      <circle cx="44" cy="24" r="2" fill="white" opacity="0.7" />
    </svg>
  )
}

function AmphibianSilhouette({ className = '' }) {
  return (
    <svg viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="45" cy="36" rx="24" ry="16" fill="currentColor" opacity="0.65" />
      <ellipse cx="45" cy="28" rx="18" ry="18" fill="currentColor" opacity="0.75" />
      <circle cx="36" cy="20" r="6" fill="currentColor" opacity="0.5" />
      <circle cx="54" cy="20" r="6" fill="currentColor" opacity="0.5" />
      <circle cx="36" cy="20" r="3" fill="white" opacity="0.6" />
      <circle cx="54" cy="20" r="3" fill="white" opacity="0.6" />
      <path d="M21,44 Q10,52 6,56" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
      <path d="M69,44 Q80,52 84,56" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
      <path d="M28,50 Q20,58 16,60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
      <path d="M62,50 Q70,58 74,60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}

function CrocodileSilhouette({ className = '' }) {
  return (
    <svg viewBox="0 0 110 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <ellipse cx="42" cy="28" rx="34" ry="14" fill="currentColor" opacity="0.65" />
      <path d="M76,28 Q90,24 106,26 Q106,28 106,30 Q90,32 76,28Z" fill="currentColor" opacity="0.55" />
      <path d="M8,22 Q4,16 6,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <rect x="12" y="38" width="8" height="12" rx="4" fill="currentColor" opacity="0.5" />
      <rect x="26" y="40" width="8" height="10" rx="4" fill="currentColor" opacity="0.5" />
      <rect x="52" y="40" width="8" height="10" rx="4" fill="currentColor" opacity="0.5" />
      <rect x="66" y="38" width="8" height="12" rx="4" fill="currentColor" opacity="0.5" />
      <path d="M8,24 L36,24" stroke="white" strokeWidth="2" strokeDasharray="3,3" opacity="0.3" />
    </svg>
  )
}

const species = [
  { label: 'Psitacídeos',         sub: 'Araras, periquitos, papagaios',   Silhouette: BirdSilhouette },
  { label: 'Répteis',             sub: 'Lagartos, serpentes, quelônios',   Silhouette: ReptileSilhouette },
  { label: 'Rapinantes',          sub: 'Gaviões, corujas, falcões',        Silhouette: HawkSilhouette },
  { label: 'Pequenos Mamíferos',  sub: 'Ouriços e roedores exóticos',      Silhouette: RodentSilhouette },
  { label: 'Anfíbios',            sub: 'Pererecas, sapos, salamandras',     Silhouette: AmphibianSilhouette },
  { label: 'Crocodilianos',       sub: 'Jacarés e suas particularidades',  Silhouette: CrocodileSilhouette },
]

export default function Wildlife() {
  const { ref, inView } = useReveal()

  return (
    <section
      id="wildlife"
      ref={ref}
      className="py-24 px-6 md:px-10 relative overflow-hidden"
      style={{ background: 'linear-gradient(150deg, #0d1f06 0%, #1a3a0a 30%, #2d6a1f 70%, #1a3a0a 100%)' }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow blobs */}
      <div
        className="absolute -top-40 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 blob-1"
        style={{ background: 'radial-gradient(circle, #6db85c, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none opacity-12 blob-3"
        style={{ background: 'radial-gradient(circle, #a8d5a2, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] mb-4"
              style={{ color: '#a8d5a2', fontFamily: "'Nunito', sans-serif" }}
            >
              Exclusivo Cemevet
            </p>
            <h2
              className="text-[2.2rem] md:text-[2.8rem] font-semibold text-white leading-tight"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              Workshop de{' '}
              <span style={{ color: '#a8d5a2' }}>Animais Silvestres</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-white/55 text-[0.95rem] leading-relaxed md:text-right"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Um fim de semana intensivo que você vai contar para sempre. 16 horas
            práticas com espécies exóticas e silvestres.
          </motion.p>
        </div>

        {/* Species grid — SVG silhouettes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {species.map(({ label, sub, Silhouette }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.09, duration: 0.65 }}
              className="group flex items-center gap-4 p-5 rounded-2xl hover-lift cursor-default"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div
                className="w-14 h-14 shrink-0 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                style={{ color: '#a8d5a2', background: 'rgba(168,213,162,0.12)' }}
              >
                <Silhouette className="w-10 h-10" />
              </div>
              <div>
                <p
                  className="font-semibold text-white text-[0.95rem]"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  {label}
                </p>
                <p className="text-white/50 text-[0.78rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info + CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full md:w-auto">
            {[
              { icon: Calendar, label: 'Formato', value: 'Fim de semana intensivo' },
              { icon: Clock,    label: 'Duração', value: '16 horas práticas' },
              { icon: MapPin,   label: 'Local',   value: 'Camaragibe / PE' },
              { icon: Zap,      label: 'Vagas',   value: 'Limitadas por turma' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon size={13} style={{ color: '#a8d5a2' }} />
                  <span className="text-white/40 text-[0.72rem] uppercase tracking-wider" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    {label}
                  </span>
                </div>
                <p className="text-white font-semibold text-[0.88rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5581999999999?text=Quero+saber+sobre+o+Workshop+de+Silvestres"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full font-bold text-green-bio bg-white text-[0.9rem] transition-all hover:scale-105 hover:shadow-2xl whitespace-nowrap"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Quero participar
          </a>
        </motion.div>
      </div>
    </section>
  )
}
