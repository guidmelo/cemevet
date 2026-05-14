import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    name: 'Ana Luiza S.',
    role: 'Auxiliar Vet. · VetLife Recife',
    initials: 'AL',
    avatarColor: ['#2d6a1f', '#4a8a2a'],
    text: 'Antes da Cemevet eu mal sabia o que fazia um auxiliar veterinário. Hoje trabalho em uma clínica incrível — fui contratada no segundo mês de estágio. Não existe formação como essa em Camaragibe.',
    highlight: 'fui contratada no segundo mês de estágio',
    border: '#a8d5a2',
    bg: '#f7fcf5',
  },
  {
    name: 'Marcos V.',
    role: 'Auxiliar Vet. · Hospital PetCare',
    initials: 'MV',
    avatarColor: ['#1d6fa4', '#2563eb'],
    text: 'O workshop de silvestres mudou minha visão completamente. Trabalhar com aves e répteis era um sonho. A Cemevet tornou isso possível. Os professores vivem isso todo dia.',
    highlight: 'tornou isso possível',
    border: '#bfdbfe',
    bg: '#f6faff',
  },
  {
    name: 'Juliana M.',
    role: 'Auxiliar Vet. · Clínica Bem-Estar',
    initials: 'JM',
    avatarColor: ['#d97706', '#f59e0b'],
    text: 'Tenho muito orgulho do certificado CRMV. Quando mostro para empregadores, eles levam a sério. A estrutura de laboratório é excelente — muito diferente de um cursinho qualquer.',
    highlight: 'eles levam a sério',
    border: '#fde68a',
    bg: '#fffdf0',
  },
  {
    name: 'Pedro H.',
    role: 'Estagiário · Centro de Reab. de Fauna',
    initials: 'PH',
    avatarColor: ['#7c3aed', '#9333ea'],
    text: 'Nunca pensei que ia trabalhar reabilitando animais silvestres. A Cemevet abriu esse caminho. Os professores te preparam não só tecnicamente, mas emocionalmente.',
    highlight: 'te preparam não só tecnicamente',
    border: '#e9d5ff',
    bg: '#faf5ff',
  },
  {
    name: 'Camila R.',
    role: 'Auxiliar Vet. · Clínica Felinos & Cia',
    initials: 'CR',
    avatarColor: ['#059669', '#10b981'],
    text: 'Já tinha tentado outros cursos online. Nada se compara à aula prática real. Na Cemevet aprendi venopunção, curativo, sondagem — saí de lá sabendo fazer de verdade.',
    highlight: 'sabendo fazer de verdade',
    border: '#bbf7d0',
    bg: '#f2fbf6',
  },
  {
    name: 'Diego F.',
    role: 'Auxiliar Vet. · Hospital Esperança',
    initials: 'DF',
    avatarColor: ['#374151', '#4b5563'],
    text: 'O estágio foi garantido mesmo — assinei o contrato antes de começar. Nunca vi isso em outro lugar. Hoje estou no hospital há 8 meses e já sou referência na equipe de emergência.',
    highlight: 'já sou referência na equipe',
    border: '#d1d5db',
    bg: '#f9fafb',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function mark(text, highlight) {
  const parts = text.split(highlight)
  if (parts.length < 2) return text
  return (
    <>
      {parts[0]}
      <mark
        style={{
          background: 'rgba(45,106,31,0.12)',
          color: '#2d6a1f',
          borderRadius: '2px',
          padding: '0 2px',
        }}
        className="font-semibold"
      >
        {highlight}
      </mark>
      {parts[1]}
    </>
  )
}

export default function Testimonials() {
  const { ref, inView } = useReveal()

  return (
    <section id="testimonials" ref={ref} className="py-24 px-6 md:px-10 bg-white overflow-hidden">
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
              Histórias Reais
            </p>
            <h2
              className="text-[2.2rem] md:text-[2.8rem] font-semibold text-ink leading-tight"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              Quem passou pela Cemevet{' '}
              <span className="text-gradient">não volta atrás</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="md:text-right"
          >
            <p
              className="text-[2.5rem] font-bold text-ink mb-1"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              4.9<span className="text-green-bio">/5</span>
            </p>
            <Stars />
            <p className="text-ink-soft text-[0.8rem] mt-1" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Média de 200+ avaliações
            </p>
          </motion.div>
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {testimonials.map(({ name, role, initials, avatarColor, text, highlight, border, bg }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.65, ease: [0.25,0.46,0.45,0.94] }}
              className="break-inside-avoid mb-5 p-6 rounded-2xl hover-lift"
              style={{ background: bg, border: `1.5px solid ${border}` }}
            >
              <Stars />
              <p
                className="text-ink-mid text-[0.88rem] leading-relaxed mt-4 mb-5"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                "{mark(text, highlight)}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[0.75rem] font-bold text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${avatarColor[0]}, ${avatarColor[1]})` }}
                >
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-ink text-[0.875rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
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

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-7 rounded-2xl bg-cream border border-green-mist"
        >
          <div className="flex gap-8 text-center sm:text-left">
            {[
              { v: '100%', l: 'Recomendam o curso' },
              { v: '+200', l: 'Alunos formados' },
              { v: '73%', l: 'Contratados pelos parceiros' },
            ].map(({ v, l }) => (
              <div key={l}>
                <p className="text-[1.5rem] font-bold text-green-bio" style={{ fontFamily: "'Fredoka', sans-serif" }}>{v}</p>
                <p className="text-ink-soft text-[0.75rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>{l}</p>
              </div>
            ))}
          </div>
          <a
            href="https://wa.me/5581999999999?text=Quero+conhecer+a+Cemevet"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-white font-semibold text-[0.88rem] transition-all hover:scale-105 hover:shadow-lg whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #2d6a1f, #4a8a2a)',
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Quero ser o próximo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
