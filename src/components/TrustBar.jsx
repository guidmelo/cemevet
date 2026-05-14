import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { GraduationCap, Stethoscope, Award, Users } from 'lucide-react'

const pillars = [
  {
    icon: GraduationCap,
    title: 'Estágio Garantido',
    desc: 'Você pratica de verdade antes de se formar',
    color: '#2d6a1f',
  },
  {
    icon: Stethoscope,
    title: 'Reconhecimento CRMV',
    desc: 'Certificação reconhecida pelo conselho regional',
    color: '#376a19',
  },
  {
    icon: Award,
    title: 'Certificação Completa',
    desc: 'Diploma reconhecido no mercado de trabalho',
    color: '#4a8a2a',
  },
  {
    icon: Users,
    title: '+200 Formados',
    desc: 'Uma comunidade de profissionais apaixonados',
    color: '#2d6a1f',
  },
]

export default function TrustBar() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="py-12 px-5 md:px-8 bg-white relative overflow-hidden">
      {/* Subtle green line top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full"
        style={{ background: 'linear-gradient(90deg, #2d6a1f, #6db85c)' }}
      />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {pillars.map(({ icon: Icon, title, desc, color }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl group card-hover"
            style={{ background: '#f9fdf7', border: '1px solid #e8f5e3' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: `${color}15`, border: `1.5px solid ${color}30` }}
            >
              <Icon size={22} style={{ color }} />
            </div>
            <div>
              <p
                className="font-semibold text-sm text-gray-800 mb-0.5"
                style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1rem' }}
              >
                {title}
              </p>
              <p className="text-xs text-gray-500 leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
