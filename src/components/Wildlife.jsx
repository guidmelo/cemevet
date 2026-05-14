import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Calendar, Clock, MapPin, Zap } from 'lucide-react'

const animals = [
  { emoji: '🦜', label: 'Psitacídeos', desc: 'Araras, periquitos e papagaios' },
  { emoji: '🦎', label: 'Répteis', desc: 'Lagartos, serpentes e quelônios' },
  { emoji: '🦅', label: 'Rapinantes', desc: 'Gaviões, corujas e falcões' },
  { emoji: '🐊', label: 'Crocodilianos', desc: 'Jacarés e suas peculiaridades' },
  { emoji: '🦔', label: 'Pequenos Mamíferos', desc: 'Ouriços, roedores exóticos' },
  { emoji: '🐸', label: 'Anfíbios', desc: 'Pererecas, sapos e salamandras' },
]

export default function Wildlife() {
  const { ref, inView } = useReveal()

  return (
    <section
      id="wildlife"
      ref={ref}
      className="py-20 px-5 md:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1a3a0a 0%, #2d6a1f 40%, #1e4a10 100%)' }}
    >
      {/* Background texture dots */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Organic blobs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] opacity-10 blob-1"
        style={{ background: 'radial-gradient(circle, #a8d5a2, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] opacity-10 blob-3"
        style={{ background: 'radial-gradient(circle, #6db85c, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#a8d5a2',
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            ✦ Exclusivo Cemevet
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Workshop de{' '}
            <span style={{ color: '#a8d5a2' }}>Animais Silvestres</span>
          </h2>
          <p
            className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Um fim de semana intensivo que você vai contar para sempre. Aprenda a manejar
            e auxiliar no atendimento de espécies exóticas e silvestres.
          </p>
        </motion.div>

        {/* Animals grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {animals.map(({ emoji, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass rounded-2xl p-5 flex items-center gap-4 card-hover cursor-default"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {emoji}
              </span>
              <div>
                <p
                  className="font-semibold text-white text-base"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  {label}
                </p>
                <p className="text-white/60 text-xs" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info card + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
            {[
              { icon: Calendar, label: 'Formato', value: 'Final de Semana Intensivo' },
              { icon: Clock, label: 'Duração', value: '16 horas práticas' },
              { icon: MapPin, label: 'Local', value: 'Camaragibe / PE' },
              { icon: Zap, label: 'Vagas', value: 'Limitadas por turma' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(168,213,162,0.2)' }}>
                  <Icon size={18} className="text-green-pale" />
                </div>
                <div>
                  <p className="text-white/50 text-xs" style={{ fontFamily: "'Nunito', sans-serif" }}>{label}</p>
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "'Nunito', sans-serif" }}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5581999999999?text=Quero+saber+sobre+o+Workshop+de+Silvestres"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full font-bold text-green-bio bg-white transition-all duration-300 hover:scale-105 hover:shadow-2xl whitespace-nowrap"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            🦜 Quero participar
          </a>
        </motion.div>
      </div>
    </section>
  )
}
