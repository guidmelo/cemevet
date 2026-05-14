import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Heart, BookOpen, Microscope, HandHeart } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: Heart,
    title: 'Você chega apaixonado',
    desc: 'Sem saber por onde começar, mas com amor imenso pelos animais. Aqui, isso já é metade do caminho.',
    accent: '#e63946',
  },
  {
    n: '02',
    icon: BookOpen,
    title: 'Aprende com quem vive isso',
    desc: 'Professores que trabalham em clínicas, hospitais veterinários e centros de reabilitação de silvestres.',
    accent: '#2d6a1f',
  },
  {
    n: '03',
    icon: Microscope,
    title: 'Pratica de verdade',
    desc: 'Laboratórios, simulações e estágio em clínicas parceiras — você sai preparado para o mercado.',
    accent: '#1d6fa4',
  },
  {
    n: '04',
    icon: HandHeart,
    title: 'Se forma com orgulho',
    desc: 'Certificado CRMV e primeiro emprego pelo estágio. Muitos alunos são contratados antes de se formarem.',
    accent: '#8b5e3c',
  },
]

export default function Journey() {
  const { ref, inView } = useReveal()

  return (
    <section id="journey" ref={ref} className="py-24 px-6 md:px-10 bg-cream">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
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
            Como é estudar na Cemevet
          </p>
          <h2
            className="text-[2.2rem] md:text-[2.8rem] font-semibold text-ink leading-tight max-w-2xl"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Uma jornada que transforma{' '}
            <span className="text-gradient">amor em profissão</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map(({ n, icon: Icon, title, desc, accent }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.25,0.46,0.45,0.94] }}
              className="group p-7 rounded-2xl bg-white border border-green-mist hover-lift"
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-[2.5rem] font-bold leading-none"
                  style={{ fontFamily: "'Fredoka', sans-serif", color: `${accent}18` }}
                >
                  {n}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${accent}12` }}
                >
                  <Icon size={20} style={{ color: accent }} strokeWidth={1.8} />
                </div>
              </div>
              <h3
                className="font-semibold text-ink text-[1rem] mb-2.5 leading-snug"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="text-ink-soft text-[0.875rem] leading-relaxed"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Story pullquote */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-[1fr_auto] gap-8 items-center p-8 md:p-10 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #1e4210 0%, #2d6a1f 60%, #376a19 100%)',
          }}
        >
          <div>
            <div
              className="w-10 h-px mb-6"
              style={{ background: 'rgba(168,213,162,0.6)' }}
            />
            <blockquote
              className="text-[1.35rem] md:text-[1.55rem] font-semibold text-white leading-snug mb-4"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              "Meu primeiro estágio foi a porta que abriu tudo."
            </blockquote>
            <p
              className="text-white/65 text-[0.9rem] leading-relaxed max-w-xl"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Alunos da Cemevet relatam que o estágio garantido foi o diferencial que os separou
              de outros candidatos. Muitos foram contratados pela própria clínica durante o curso.
            </p>
          </div>
          <a
            href="https://wa.me/5581999999999?text=Quero+conhecer+a+Cemevet"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full font-semibold text-green-bio bg-white text-[0.9rem] transition-all hover:scale-105 hover:shadow-xl whitespace-nowrap"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Quero essa história
          </a>
        </motion.div>
      </div>
    </section>
  )
}
