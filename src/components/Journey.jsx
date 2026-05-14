import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from 'lucide-react'

const G = '#1f7a3c'

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Amor pelos animais',
    desc: 'Não apenas ensinamos técnicas — formamos profissionais que tratam cada paciente com cuidado genuíno.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Dedicação',
    desc: 'Professores que trabalham ativamente em clínicas e hospitais veterinários trazem a realidade para a sala de aula.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="sobre" ref={ref} style={{ padding: '80px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — image block */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'relative' }}
          >
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 20, background: '#e8f5ed', minHeight: 300, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <svg viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '65%' }}>
                <circle cx="140" cy="70" r="36" fill="#c8e6d1" opacity="0.7" />
                <path d="M100,170 Q100,130 140,125 Q180,130 180,170 L180,210 L100,210 Z" fill="#c8e6d1" opacity="0.5" />
                <path d="M120,130 L120,210" stroke={G} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
                <path d="M160,130 L160,210" stroke={G} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
                <path d="M125,145 Q115,155 115,170 Q115,184 128,184 Q141,184 141,170 Q141,156 130,145" stroke={G} strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.45" />
                <circle cx="128" cy="184" r="7" stroke={G} strokeWidth="3" fill="none" opacity="0.45" />
                <ellipse cx="185" cy="148" rx="22" ry="16" fill="#a0d4b0" opacity="0.6" />
                <ellipse cx="185" cy="134" rx="15" ry="13" fill="#a0d4b0" opacity="0.7" />
                <ellipse cx="174" cy="124" rx="7" ry="10" fill="#a0d4b0" opacity="0.5" />
                <ellipse cx="196" cy="124" rx="7" ry="10" fill="#a0d4b0" opacity="0.5" />
                <circle cx="181" cy="132" r="2.5" fill={G} opacity="0.5" />
                <circle cx="189" cy="132" r="2.5" fill={G} opacity="0.5" />
                <rect x="224" y="30" width="18" height="5" rx="2.5" fill={G} opacity="0.25" />
                <rect x="229" y="24" width="5" height="18" rx="2.5" fill={G} opacity="0.25" />
              </svg>
            </div>

            <div style={{ position: 'absolute', bottom: -20, right: -20, background: '#fff', borderRadius: 12, padding: '14px 18px', boxShadow: '0 8px 28px rgba(0,0,0,0.11)' }}>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 11, color: '#9ca3af', marginBottom: 4 }}>Desde a primeira turma</p>
              <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 700, fontSize: 14, color: '#111827' }}>Camaragibe / PE</p>
              <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{ width: 40, height: 3, background: G, borderRadius: 2, marginBottom: 16 }} />
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12, display: 'block' }}>
              Sobre a Cemevet
            </p>
            <h2 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', fontWeight: 600, color: '#111827', lineHeight: 1.15, marginBottom: 20 }}>
              Não apenas ensinamos.<br />
              <span style={{ background: 'linear-gradient(135deg, #1f7a3c, #2da861)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Transformamos carreiras.
              </span>
            </h2>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.75, marginBottom: 16 }}>
              A Cemevet nasceu da convicção de que quem ama animais merece uma
              formação à altura desse amor. Nossa escola forma auxiliares
              veterinários que saem prontos para o mercado — não apenas com
              diplomas, mas com experiência real.
            </p>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.75, marginBottom: 32 }}>
              Cada aluno que passa pela Cemevet recebe não apenas conhecimento
              técnico, mas entra em uma rede profissional. O estágio garantido
              não é um bônus — é o compromisso central da nossa proposta.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
              {values.map(({ icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: '#e8f5ed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#111827', marginBottom: 4 }}>{title}</p>
                    <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.83rem', color: '#6b7280', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5581999999999?text=Quero+conhecer+a+Cemevet"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', background: G, padding: '11px 24px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 2px 12px rgba(31,122,60,0.32)' }}
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
