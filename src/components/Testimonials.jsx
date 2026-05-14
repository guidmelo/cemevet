import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Luiza S.',
    role: 'Auxiliar Vet. • Clínica VetLife Recife',
    text: 'Antes da Cemevet eu mal sabia o que fazia um auxiliar veterinário. Hoje trabalho em uma clínica incrível, fui contratada no segundo mês de estágio. Não existe curso como esse em Camaragibe.',
    stars: 5,
    emoji: '🐕',
    bg: '#f4fdf0',
    border: '#a8d5a2',
    highlight: 'fui contratada no segundo mês de estágio',
  },
  {
    name: 'Marcos V.',
    role: 'Auxiliar Vet. • Hospital Vet. PetCare',
    text: 'O workshop de silvestres mudou minha visão completamente. Trabalhar com aves e répteis era um sonho. A Cemevet tornou isso possível. Os professores são veterinários que vivem isso todo dia.',
    stars: 5,
    emoji: '🦜',
    bg: '#f0f7ff',
    border: '#bfdbfe',
    highlight: 'tornou isso possível',
  },
  {
    name: 'Juliana M.',
    role: 'Auxiliar Vet. • Clínica Bem-Estar Animal',
    text: 'Tenho muito orgulho de ter o certificado CRMV. Quando mostro para empregadores, eles levam a sério. É diferente de um cursinho qualquer. A estrutura de laboratório é excelente.',
    stars: 5,
    emoji: '🏆',
    bg: '#fffbeb',
    border: '#fde68a',
    highlight: 'eles levam a sério',
  },
  {
    name: 'Pedro H.',
    role: 'Estagiário • Centro de Reab. de Fauna',
    text: 'Nunca pensei que ia trabalhar reabilitando animais silvestres. A Cemevet abriu esse caminho. Os professores te preparam não só tecnicamente, mas emocionalmente para lidar com animais em sofrimento.',
    stars: 5,
    emoji: '🦅',
    bg: '#fff5f5',
    border: '#fecaca',
    highlight: 'te preparam não só tecnicamente',
  },
  {
    name: 'Camila R.',
    role: 'Auxiliar Vet. • Clínica Felinos & Cia',
    text: 'Já tinha tentado outros cursos online. Nada se compara à aula prática real. Na Cemevet eu aprendi a fazer venopunção, curativo, sondagem... saí de lá sabendo fazer de verdade.',
    stars: 5,
    emoji: '🐈',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    highlight: 'sabendo fazer de verdade',
  },
  {
    name: 'Diego F.',
    role: 'Auxiliar Vet. • Hospital Vet. Esperança',
    text: 'O estágio foi garantido mesmo. Asssinei o contrato antes de começar. Nunca vi isso em outro lugar. Hoje estou no hospital há 8 meses e já sou referência na equipe de emergência.',
    stars: 5,
    emoji: '💚',
    bg: '#faf5ff',
    border: '#e9d5ff',
    highlight: 'já sou referência na equipe',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={13} fill="#fbbf24" className="text-yellow-400" />
      ))}
    </div>
  )
}

function highlightText(text, highlight) {
  const parts = text.split(highlight)
  if (parts.length < 2) return text
  return (
    <>
      {parts[0]}
      <mark
        className="font-bold rounded-sm px-0.5"
        style={{ background: 'rgba(109,184,92,0.2)', color: '#2d6a1f', textDecoration: 'none' }}
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
    <section id="testimonials" ref={ref} className="py-20 px-5 md:px-8 bg-cream overflow-hidden">
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
            ✦ Histórias Reais
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Quem passou pela Cemevet{' '}
            <span className="text-gradient">não volta atrás</span>
          </h2>
          <p
            className="mt-4 text-lg text-gray-500 max-w-xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Depoimentos de alunos que transformaram sua relação com os animais
            em uma carreira de verdade.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map(({ name, role, text, stars, emoji, bg, border, highlight }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="break-inside-avoid p-6 rounded-2xl card-hover"
              style={{ background: bg, border: `1.5px solid ${border}` }}
            >
              {/* Quote icon */}
              <div className="flex items-center justify-between mb-4">
                <StarRating count={stars} />
                <span className="text-2xl">{emoji}</span>
              </div>

              {/* Text */}
              <p
                className="text-gray-700 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                "{highlightText(text, highlight)}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #2d6a1f, #6db85c)' }}
                >
                  {name.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-semibold text-gray-800 text-sm"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {name}
                  </p>
                  <p className="text-gray-400 text-xs" style={{ fontFamily: "'Nunito', sans-serif" }}>
                    {role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl bg-white"
          style={{ boxShadow: '0 4px 20px rgba(45,106,31,0.08)', border: '1px solid #e8f5e3' }}
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-green-bio" style={{ fontFamily: "'Fredoka', sans-serif" }}>4.9/5</p>
            <StarRating count={5} />
            <p className="text-xs text-gray-400 mt-1" style={{ fontFamily: "'Nunito', sans-serif" }}>Média geral</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-green-bio" style={{ fontFamily: "'Fredoka', sans-serif" }}>+200</p>
            <p className="text-xs text-gray-400" style={{ fontFamily: "'Nunito', sans-serif" }}>Alunos formados</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-green-bio" style={{ fontFamily: "'Fredoka', sans-serif" }}>100%</p>
            <p className="text-xs text-gray-400" style={{ fontFamily: "'Nunito', sans-serif" }}>Recomendam o curso</p>
          </div>
          <div className="hidden sm:block">
            <a
              href="https://wa.me/5581999999999?text=Quero+conhecer+a+Cemevet"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-white font-semibold text-sm transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #2d6a1f, #4a8a2a)',
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Quero ser o próximo →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
