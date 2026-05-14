import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { GraduationCap, Stethoscope, Award, Users } from 'lucide-react'

const pillars = [
  { icon: GraduationCap, label: 'Estágio Garantido',      sub: 'Contrato assinado antes de começar' },
  { icon: Stethoscope,   label: 'Reconhecimento CRMV',    sub: 'Certificação oficial do conselho' },
  { icon: Award,         label: 'Certificação Completa',  sub: 'Diploma reconhecido no mercado' },
  { icon: Users,         label: '+200 Formados',          sub: 'Comunidade ativa em PE' },
]

export default function TrustBar() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="py-16 px-6 md:px-10 bg-white border-b border-green-mist">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {pillars.map(({ icon: Icon, label, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.65, ease: [0.25,0.46,0.45,0.94] }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: '#edf7ea' }}
            >
              <Icon size={20} style={{ color: '#2d6a1f' }} strokeWidth={1.8} />
            </div>
            <div>
              <p
                className="font-semibold text-ink text-[0.95rem] mb-0.5"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {label}
              </p>
              <p className="text-ink-soft text-[0.8rem] leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
