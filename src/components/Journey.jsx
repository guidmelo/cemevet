import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Heart, BookOpen, Microscope, HandHeart } from 'lucide-react'

const moments = [
  {
    icon: Heart,
    title: 'Você chega apaixonado',
    desc: 'Sem saber por onde começar, mas com um amor imenso pelos animais. Aqui, isso já é metade do caminho.',
    color: '#e63946',
    bg: '#fff5f5',
  },
  {
    icon: BookOpen,
    title: 'Aprende com quem vive isso',
    desc: 'Professores que trabalham em clínicas, hospitais veterinários e centros de reabilitação de silvestres.',
    color: '#2d6a1f',
    bg: '#f4fdf0',
  },
  {
    icon: Microscope,
    title: 'Pratica de verdade',
    desc: 'Laboratórios, simulações e estágio em clínicas parceiras — você sai preparado para o mercado.',
    color: '#1d6fa4',
    bg: '#f0f7ff',
  },
  {
    icon: HandHeart,
    title: 'Se forma com orgulho',
    desc: 'Com certificado CRMV, seu primeiro emprego começa no estágio. Muitos alunos são contratados antes de se formarem.',
    color: '#8b5e3c',
    bg: '#fdf8f3',
  },
]

export default function Journey() {
  const { ref, inView } = useReveal()

  return (
    <section id="journey" ref={ref} className="py-20 px-5 md:px-8 bg-cream overflow-hidden">
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
            style={{
              background: '#e8f5e3',
              color: '#2d6a1f',
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            ✦ Como é estudar na Cemevet?
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Uma jornada que transforma{' '}
            <span className="text-gradient">amor em profissão</span>
          </h2>
          <p
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Do primeiro dia de aula até o estágio, cada etapa é desenhada para que você
            cresça com segurança e confiança.
          </p>
        </motion.div>

        {/* Journey steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, #a8d5a2, #2d6a1f, #a8d5a2)' }}
          />

          {moments.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10 flex flex-col items-center text-center p-6 rounded-3xl card-hover"
              style={{ background: bg, border: `1.5px solid ${color}20` }}
            >
              {/* Step number */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: color }}
              >
                {i + 1}
              </div>

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mt-2"
                style={{ background: `${color}15` }}
              >
                <Icon size={26} style={{ color }} />
              </div>
              <h3
                className="font-semibold text-gray-800 mb-2"
                style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.15rem' }}
              >
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-14 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
          style={{
            background: 'linear-gradient(135deg, #2d6a1f 0%, #376a19 50%, #4a8a2a 100%)',
          }}
        >
          <div className="text-5xl shrink-0">🐾</div>
          <div>
            <p
              className="text-xl md:text-2xl font-semibold text-white leading-snug mb-3"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              "Meu primeiro estágio foi a porta que abriu tudo."
            </p>
            <p className="text-white/80 text-base leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Alunos da Cemevet relatam que o estágio garantido foi o diferencial que os
              separou de outros candidatos. Muitos foram contratados pela própria clínica
              onde estagiaram — ainda durante o curso.
            </p>
          </div>
          <a
            href="https://wa.me/5581999999999?text=Quero+conhecer+a+Cemevet"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full font-semibold text-green-bio bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Quero essa história →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
