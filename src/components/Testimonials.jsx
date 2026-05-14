import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    name: 'Ana Luiza S.',
    role: 'Auxiliar Vet. · VetLife Recife',
    initials: 'AL',
    color: '#1f7a3c',
    text: 'Antes da Cemevet eu mal sabia o que fazia um auxiliar veterinário. Hoje trabalho em uma clínica incrível — fui contratada no segundo mês de estágio. Não existe formação como essa em Camaragibe.',
  },
  {
    name: 'Marcos V.',
    role: 'Auxiliar Vet. · Hospital PetCare PE',
    initials: 'MV',
    color: '#1d6fa4',
    text: 'O workshop de silvestres mudou minha visão completamente. Trabalhar com aves e répteis era um sonho. Os professores vivem isso no dia a dia — trazem o mercado para a sala de aula.',
  },
  {
    name: 'Juliana M.',
    role: 'Auxiliar Vet. · Clínica Bem-Estar',
    initials: 'JM',
    color: '#d97706',
    text: 'O certificado CRMV faz diferença real. Quando mostro para os empregadores, eles levam a sério. A estrutura do laboratório é muito boa — bem diferente de um cursinho comum.',
  },
  {
    name: 'Pedro H.',
    role: 'Aux. Vet. · Centro de Reab. de Fauna',
    initials: 'PH',
    color: '#7c3aed',
    text: 'Nunca imaginei que ia trabalhar com reabilitação de animais silvestres. A Cemevet abriu esse caminho. Os professores te preparam técnica e emocionalmente para lidar com animais em sofrimento.',
  },
  {
    name: 'Camila R.',
    role: 'Auxiliar Vet. · Clínica Felinos & Cia',
    initials: 'CR',
    color: '#059669',
    text: 'Já tentei outros cursos online. Não tem comparação com a aula prática presencial. Na Cemevet aprendi venopunção, curativo e sondagem — saí de lá sabendo fazer de verdade.',
  },
  {
    name: 'Diego F.',
    role: 'Auxiliar Vet. · Hospital Esperança',
    initials: 'DF',
    color: '#374151',
    text: 'O estágio foi garantido mesmo — assinei o contrato antes de começar as aulas. Nunca vi isso em outro lugar. Hoje estou no hospital há 8 meses e já sou referência na equipe.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { ref, inView } = useReveal()

  return (
    <section id="depoimentos" ref={ref} className="py-20 md:py-24 px-5 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 max-w-xl mx-auto"
        >
          <div className="section-divider mx-auto" />
          <p className="section-label mb-3">Depoimentos</p>
          <h2 className="section-heading mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="body-copy">
            Histórias reais de quem transformou sua relação com os animais
            em uma carreira de verdade.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ name, role, initials, color, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}
              className="bg-white rounded-xl p-6 border border-line card-lift"
            >
              <Stars />
              <p
                className="text-ink-mid text-[0.875rem] leading-relaxed mb-6"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                "{text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-line">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[0.75rem] font-bold text-white shrink-0"
                  style={{ background: color }}
                >
                  {initials}
                </div>
                <div>
                  <p className="font-bold text-ink text-[0.875rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    {name}
                  </p>
                  <p className="text-ink-soft text-[0.75rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    {role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-6 py-8 px-8 rounded-2xl border border-line bg-surface"
        >
          {[
            { v: '4.9/5', l: 'Avaliação média' },
            { v: '+200',  l: 'Alunos formados' },
            { v: '100%',  l: 'Recomendam o curso' },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <p className="font-bold text-[1.6rem] text-brand" style={{ fontFamily: "'Fredoka', sans-serif" }}>{v}</p>
              <p className="text-ink-soft text-[0.78rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>{l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
