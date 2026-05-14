import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from 'lucide-react'

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1f7a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Amor pelos animais',
    desc: 'Não apenas ensinamos técnicas — formamos profissionais que tratam cada paciente com cuidado genuíno.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1f7a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Dedicação',
    desc: 'Professores que trabalham ativamente em clínicas e hospitais veterinários trazem a realidade para a sala de aula.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1f7a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Confiança',
    desc: 'Certificação CRMV e estágio garantido porque acreditamos que você merece uma formação que o mercado reconhece.',
  },
]

export default function Journey() {
  const { ref, inView } = useReveal()

  return (
    <section id="sobre" ref={ref} className="py-20 md:py-24 px-5 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — image block */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25,0.46,0.45,0.94] }}
            className="relative"
          >
            {/* Main image placeholder */}
            <div
              className="w-full aspect-[4/3] rounded-2xl img-placeholder"
              style={{ minHeight: '300px' }}
            >
              {/* Illustration inside */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[65%]">
                  {/* Person/vet silhouette */}
                  <circle cx="140" cy="70" r="36" fill="#c8e6d1" opacity="0.7" />
                  {/* Body */}
                  <path d="M100,170 Q100,130 140,125 Q180,130 180,170 L180,210 L100,210 Z" fill="#c8e6d1" opacity="0.5" />
                  {/* Lab coat detail */}
                  <path d="M120,130 L120,210" stroke="#1f7a3c" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
                  <path d="M160,130 L160,210" stroke="#1f7a3c" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
                  {/* Stethoscope */}
                  <path d="M125,145 Q115,155 115,170 Q115,184 128,184 Q141,184 141,170 Q141,156 130,145" stroke="#1f7a3c" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.45" />
                  <circle cx="128" cy="184" r="7" stroke="#1f7a3c" strokeWidth="3" fill="none" opacity="0.45" />
                  {/* Small dog in arms */}
                  <ellipse cx="185" cy="148" rx="22" ry="16" fill="#a0d4b0" opacity="0.6" />
                  <ellipse cx="185" cy="134" rx="15" ry="13" fill="#a0d4b0" opacity="0.7" />
                  <ellipse cx="174" cy="124" rx="7" ry="10" fill="#a0d4b0" opacity="0.5" />
                  <ellipse cx="196" cy="124" rx="7" ry="10" fill="#a0d4b0" opacity="0.5" />
                  <circle cx="181" cy="132" r="2.5" fill="#1f7a3c" opacity="0.5" />
                  <circle cx="189" cy="132" r="2.5" fill="#1f7a3c" opacity="0.5" />
                  {/* Cross icon top right */}
                  <rect x="224" y="30" width="18" height="5" rx="2.5" fill="#1f7a3c" opacity="0.25" />
                  <rect x="229" y="24" width="5" height="18" rx="2.5" fill="#1f7a3c" opacity="0.25" />
                </svg>
              </div>
            </div>

            {/* Small accent card */}
            <div
              className="absolute -bottom-5 -right-5 bg-white rounded-xl p-4"
              style={{ boxShadow: '0 8px 28px rgba(0,0,0,0.11)' }}
            >
              <p className="text-[0.72rem] text-ink-soft mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Desde a primeira turma
              </p>
              <p className="font-bold text-ink text-[0.9rem]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                Camaragibe / PE
              </p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.25,0.46,0.45,0.94] }}
          >
            <div className="section-divider" />
            <p className="section-label mb-3">Sobre a Cemevet</p>
            <h2 className="section-heading mb-5">
              Não apenas ensinamos.<br />
              <span className="text-brand-gradient">Transformamos carreiras.</span>
            </h2>
            <p className="body-copy mb-6">
              A Cemevet nasceu da convicção de que quem ama animais merece uma
              formação à altura desse amor. Nossa escola forma auxiliares
              veterinários que saem prontos para o mercado — não apenas com
              diplomas, mas com experiência real.
            </p>
            <p className="body-copy mb-8">
              Cada aluno que passa pela Cemevet recebe não apenas cuidados com
              animais de estimação, mas os tratamos como parte da nossa família
              profissional. O estágio garantido não é um bônus — é o compromisso
              central da nossa proposta.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5 mb-8">
              {values.map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: '#e8f5ed' }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold text-ink text-[0.9rem] mb-0.5" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      {title}
                    </p>
                    <p className="body-copy text-[0.83rem]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5581999999999?text=Quero+conhecer+a+Cemevet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Conhecer a Cemevet
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
