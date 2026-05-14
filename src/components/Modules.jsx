import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import {
  Stethoscope, Syringe, Microscope, Pill, Scissors,
  HeartPulse, Scan, FlaskConical, Bone, Activity
} from 'lucide-react'

const modules = [
  { icon: Stethoscope, title: 'Clínica Médica',          tag: 'Base essencial',   color: '#2d6a1f' },
  { icon: Syringe,     title: 'Técnicas de Enfermagem',  tag: 'Hands-on',         color: '#1d6fa4' },
  { icon: Microscope,  title: 'Laboratório Clínico',     tag: 'Prático',          color: '#7c3aed' },
  { icon: Pill,        title: 'Farmacologia',            tag: 'Teórico-prático',  color: '#dc2626' },
  { icon: Scissors,    title: 'Centro Cirúrgico',        tag: 'Especialização',   color: '#059669' },
  { icon: HeartPulse,  title: 'Emergência e UTI',        tag: 'Avançado',         color: '#e53e3e' },
  { icon: Scan,        title: 'Diagnóstico por Imagem',  tag: 'Tecnologia',       color: '#2563eb' },
  { icon: FlaskConical,title: 'Nutrição e Dietética',    tag: 'Bem-estar',        color: '#d97706' },
  { icon: Bone,        title: 'Ortopedia e Fisioterapia',tag: 'Reabilitação',     color: '#8b6f47' },
  { icon: Activity,    title: 'Anestesiologia',          tag: 'Suporte clínico',  color: '#374151' },
]

export default function Modules() {
  const { ref, inView } = useReveal()

  return (
    <section id="modules" ref={ref} className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-green-bio mb-4"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Grade Curricular
            </p>
            <h2
              className="text-[2.2rem] md:text-[2.8rem] font-semibold text-ink leading-tight"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              O que você vai{' '}
              <span className="text-gradient">aprender</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-ink-soft text-[0.95rem] leading-relaxed md:text-right"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Grade desenvolvida por veterinários especialistas, focada em habilidades
            reais do mercado de trabalho.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {modules.map(({ icon: Icon, title, tag, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.055, duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}
              className="group p-5 rounded-2xl border border-gray-100 bg-white hover-lift cursor-default"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}10` }}
              >
                <Icon size={20} style={{ color }} strokeWidth={1.8} />
              </div>
              <p
                className="font-semibold text-ink text-[0.9rem] leading-snug mb-1.5"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {title}
              </p>
              <span
                className="inline-block text-[0.7rem] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: `${color}10`, color }}
              >
                {tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://wa.me/5581999999999?text=Quero+a+grade+completa+do+curso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-[0.9rem] hover-lift"
            style={{
              background: 'linear-gradient(135deg, #2d6a1f, #4a8a2a)',
              boxShadow: '0 6px 24px rgba(45,106,31,0.35)',
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Ver grade completa
          </a>
        </motion.div>
      </div>
    </section>
  )
}
