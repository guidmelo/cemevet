import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { CheckCircle2, Building2, Star, TrendingUp } from 'lucide-react'

const benefits = [
  'Estágio em clínicas e hospitais veterinários parceiros',
  'Supervisão de profissionais formados e experientes',
  'Carga horária que complementa o aprendizado teórico',
  'Possibilidade de ser contratado ao final do estágio',
  'Atestado de horas para portfólio profissional',
  'Rede de contatos no mercado veterinário local',
]

const stats = [
  { value: '100%', label: 'dos alunos fazem estágio', icon: CheckCircle2 },
  { value: '73%', label: 'são contratados pelos parceiros', icon: TrendingUp },
  { value: '15+', label: 'clínicas parceiras em PE', icon: Building2 },
  { value: '4.9★', label: 'avaliação dos supervisores', icon: Star },
]

export default function Internship() {
  const { ref, inView } = useReveal()

  return (
    <section id="internship" ref={ref} className="py-20 px-5 md:px-8 bg-off-white overflow-hidden">
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
            ✦ Nosso Diferencial
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <span className="text-gradient">Estágio garantido.</span>
            <br />
            Não é promessa — é compromisso.
          </h2>
          <p
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Enquanto a maioria dos cursos entrega um diploma e te deseja boa sorte,
            a Cemevet garante que você vai colocar a mão na massa de verdade.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center p-6 rounded-2xl bg-white card-hover"
              style={{ boxShadow: '0 4px 20px rgba(45,106,31,0.08)', border: '1px solid #e8f5e3' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: '#e8f5e3' }}
              >
                <Icon size={20} style={{ color: '#2d6a1f' }} />
              </div>
              <p
                className="text-3xl font-bold text-green-bio mb-1"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {value}
              </p>
              <p className="text-xs text-gray-500" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Content split */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: benefits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3
              className="text-2xl font-semibold text-gray-800 mb-6"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              O que o estágio inclui:
            </h3>
            <ul className="flex flex-col gap-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: '#e8f5e3' }}
                  >
                    <CheckCircle2 size={14} style={{ color: '#2d6a1f' }} />
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div
              className="relative rounded-3xl p-8 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #2d6a1f 0%, #4a8a2a 100%)',
                boxShadow: '0 20px 60px rgba(45,106,31,0.35)',
              }}
            >
              {/* Background blobs */}
              <div
                className="absolute top-0 right-0 w-48 h-48 opacity-20 blob-1"
                style={{ background: 'radial-gradient(circle, #a8d5a2, transparent)' }}
              />

              <div className="relative z-10">
                <p
                  className="text-4xl mb-4"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  🏥
                </p>
                <h3
                  className="text-2xl font-semibold text-white mb-3"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  Seu primeiro emprego começa aqui
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  Clínicas, pet shops, hospitais veterinários e centros de reabilitação
                  em Camaragibe e região aguardam nossos alunos. Você não sai daqui
                  sem experiência real.
                </p>

                <div
                  className="flex items-center gap-3 p-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <span className="text-3xl">📋</span>
                  <div>
                    <p
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                      Contrato de estágio assinado
                    </p>
                    <p className="text-white/60 text-xs" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      Antes de você começar a aula
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
