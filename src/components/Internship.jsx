import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { CheckCircle2, TrendingUp, Building2, Star } from 'lucide-react'

const benefits = [
  'Estágio em clínicas e hospitais veterinários parceiros',
  'Supervisão de profissionais formados e experientes',
  'Carga horária que complementa o aprendizado teórico',
  'Possibilidade de ser contratado ao final do estágio',
  'Atestado de horas para portfólio profissional',
  'Rede de contatos no mercado veterinário local',
]

const stats = [
  { value: '100%', label: 'dos alunos fazem estágio',         icon: CheckCircle2 },
  { value: '73%',  label: 'são contratados pelos parceiros',  icon: TrendingUp },
  { value: '15+',  label: 'clínicas parceiras em PE',         icon: Building2 },
  { value: '4.9',  label: 'avaliação média dos supervisores', icon: Star },
]

export default function Internship() {
  const { ref, inView } = useReveal()

  return (
    <section id="internship" ref={ref} className="py-24 px-6 md:px-10 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p
            className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-green-bio mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Nosso Diferencial
          </p>
          <h2
            className="text-[2.2rem] md:text-[2.8rem] font-semibold text-ink leading-tight max-w-2xl"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            <span className="text-gradient">Estágio garantido.</span>
            <br />
            Não é promessa — é compromisso.
          </h2>
          <p
            className="mt-4 text-ink-soft text-[0.95rem] leading-relaxed max-w-xl"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Enquanto a maioria dos cursos entrega um diploma e te deseja boa sorte,
            a Cemevet garante que você vai colocar a mão na massa de verdade.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.65 }}
              className="p-6 rounded-2xl bg-white border border-green-mist"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#edf7ea' }}
              >
                <Icon size={18} style={{ color: '#2d6a1f' }} strokeWidth={1.8} />
              </div>
              <p
                className="text-[2rem] font-bold text-green-bio leading-none mb-1"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {value}
              </p>
              <p className="text-ink-soft text-[0.78rem] leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two-col layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            <h3
              className="text-[1.5rem] font-semibold text-ink mb-7"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              O que o estágio inclui
            </h3>
            <ul className="flex flex-col gap-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.45 + i * 0.07, duration: 0.5 }}
                  className="flex items-start gap-3.5"
                >
                  <CheckCircle2 size={18} style={{ color: '#2d6a1f', marginTop: '2px', flexShrink: 0 }} strokeWidth={2} />
                  <span className="text-ink-soft text-[0.9rem] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            <div
              className="rounded-3xl p-8 md:p-9 overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, #1e4210 0%, #2d6a1f 60%, #376a19 100%)',
                boxShadow: '0 24px 64px rgba(45,106,31,0.35)',
              }}
            >
              <div
                className="absolute top-0 right-0 w-56 h-56 pointer-events-none blob-2 opacity-15"
                style={{ background: 'radial-gradient(circle, #a8d5a2, transparent)' }}
              />
              <div className="relative z-10">
                {/* Medical cross icon composed from SVG */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}
                >
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>

                <h3
                  className="text-[1.5rem] font-semibold text-white mb-3 leading-snug"
                  style={{ fontFamily: "'Fredoka', sans-serif" }}
                >
                  Seu primeiro emprego começa aqui
                </h3>
                <p
                  className="text-white/65 text-[0.9rem] leading-relaxed mb-7"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  Clínicas, pet shops, hospitais veterinários e centros de reabilitação
                  em Camaragibe e região aguardam nossos alunos. Você não sai daqui
                  sem experiência real.
                </p>

                <div
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.14)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="rgba(168,213,162,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                      <rect x="9" y="3" width="6" height="4" rx="2" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[0.88rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      Contrato de estágio assinado
                    </p>
                    <p className="text-white/50 text-[0.78rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      Antes de você começar as aulas
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
