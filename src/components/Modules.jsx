import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import {
  Stethoscope, Syringe, Microscope, Pill, Scissors, HeartPulse,
  Scan, FlaskConical, Bone, Activity
} from 'lucide-react'

const modules = [
  {
    icon: Stethoscope,
    title: 'Clínica Médica',
    desc: 'Semiologia, exame físico, sinais vitais e protocolos de triagem.',
    tag: 'Base essencial',
    color: '#2d6a1f',
    bg: 'linear-gradient(135deg, #f4fdf0, #e8f5e3)',
  },
  {
    icon: Syringe,
    title: 'Técnicas de Enfermagem',
    desc: 'Venopunção, aplicação de medicamentos, sondagem e curativos.',
    tag: 'Hands-on',
    color: '#1d6fa4',
    bg: 'linear-gradient(135deg, #f0f7ff, #dbeafe)',
  },
  {
    icon: Microscope,
    title: 'Laboratório Clínico',
    desc: 'Coleta e análise de amostras, hemograma, urinálise e parasitológico.',
    tag: 'Prático',
    color: '#7c3aed',
    bg: 'linear-gradient(135deg, #faf5ff, #ede9fe)',
  },
  {
    icon: Pill,
    title: 'Farmacologia Básica',
    desc: 'Principais fármacos, dosagens, vias de administração e interações.',
    tag: 'Teórico-prático',
    color: '#dc2626',
    bg: 'linear-gradient(135deg, #fff5f5, #fee2e2)',
  },
  {
    icon: Scissors,
    title: 'Centro Cirúrgico',
    desc: 'Preparo do paciente, instrumentação cirúrgica e paramentação.',
    tag: 'Especialização',
    color: '#059669',
    bg: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
  },
  {
    icon: HeartPulse,
    title: 'Emergência e UTI',
    desc: 'RCP veterinária, suporte ventilatório e monitoramento intensivo.',
    tag: 'Crítico',
    color: '#e53e3e',
    bg: 'linear-gradient(135deg, #fff5f5, #fed7d7)',
  },
  {
    icon: Scan,
    title: 'Diagnóstico por Imagem',
    desc: 'Preparo para radiografia, ultrassonografia e posicionamento do paciente.',
    tag: 'Tecnologia',
    color: '#2563eb',
    bg: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
  },
  {
    icon: FlaskConical,
    title: 'Nutrição e Dietética',
    desc: 'Cálculo de ração, dietas terapêuticas e alimentação enteral.',
    tag: 'Bem-estar',
    color: '#d97706',
    bg: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
  },
  {
    icon: Bone,
    title: 'Ortopedia e Fisioterapia',
    desc: 'Imobilizações, bandagens, exercícios de reabilitação e hidroterapia.',
    tag: 'Reabilitação',
    color: '#8b6f47',
    bg: 'linear-gradient(135deg, #fdf8f3, #fde8c9)',
  },
  {
    icon: Activity,
    title: 'Anestesiologia',
    desc: 'Monitoramento anestésico, vias aéreas e suporte ao anestesista.',
    tag: 'Avançado',
    color: '#374151',
    bg: 'linear-gradient(135deg, #f9fafb, #e5e7eb)',
  },
]

export default function Modules() {
  const { ref, inView } = useReveal()

  return (
    <section id="modules" ref={ref} className="py-20 px-5 md:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: '#e8f5e3', color: '#2d6a1f', fontFamily: "'Nunito', sans-serif" }}
          >
            ✦ Grade Curricular
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
          <p
            className="mt-4 text-lg text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Uma grade completa, desenvolvida por veterinários especialistas,
            focada em habilidades reais do mercado.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map(({ icon: Icon, title, desc, tag, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative p-5 rounded-2xl card-hover cursor-default overflow-hidden"
              style={{ background: bg, border: `1px solid ${color}20` }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ boxShadow: `inset 0 0 30px ${color}15` }}
              />

              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `${color}18` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-semibold mt-1"
                  style={{ background: `${color}15`, color }}
                >
                  {tag}
                </span>
              </div>

              <h3
                className="font-semibold text-gray-800 mb-1.5"
                style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1rem' }}
              >
                {title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://wa.me/5581999999999?text=Quero+a+grade+completa+do+curso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #2d6a1f, #4a8a2a)',
              boxShadow: '0 6px 20px rgba(45,106,31,0.35)',
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Ver grade completa no WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
