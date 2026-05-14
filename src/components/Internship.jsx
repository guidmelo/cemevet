import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const G = '#1f7a3c'

const benefits = [
  'Estágio em clínicas e hospitais veterinários conveniados',
  'Supervisor qualificado acompanhando cada etapa',
  'Carga horária integrada ao currículo do curso',
  'Possibilidade real de contratação pelas clínicas parceiras',
  'Atestado de horas para portfólio profissional',
  'Acesso à rede de contatos do mercado veterinário local',
]

const partners = [
  { name: 'Clínicas de Pequenos Animais', detail: 'Cães e gatos' },
  { name: 'Hospitais Veterinários', detail: 'Emergência e internação' },
  { name: 'Centros de Reabilitação', detail: 'Fauna silvestre' },
  { name: 'Pet Shops Especializados', detail: 'Banho, tosa e estética' },
]

export default function Internship() {
  const { ref, inView } = useReveal()

  return (
    <section id="estagio" ref={ref} style={{ padding: '80px 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 56, maxWidth: 640, margin: '0 auto 56px' }}
        >
          <div style={{ width: 40, height: 3, background: G, borderRadius: 2, margin: '0 auto 16px' }} />
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
            Nosso Diferencial
          </p>
          <h2 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', fontWeight: 600, color: '#111827', lineHeight: 1.15, marginBottom: 16 }}>
            Estágio garantido.<br />
            <span style={{ background: 'linear-gradient(135deg, #1f7a3c, #2da861)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Em contrato, antes de começar.
            </span>
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.75 }}>
            Enquanto a maioria dos cursos entrega um diploma e te deseja boa sorte,
            a Cemevet garante que você vai colocar a mão na massa de verdade —
            com contrato assinado antes mesmo da primeira aula.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Left — illustration + partners */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 20, background: '#e8f5ed', marginBottom: 24, position: 'relative', overflow: 'hidden', minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '75%' }}>
                <rect x="40" y="120" width="240" height="60" rx="4" fill="#a0d4b0" opacity="0.3" />
                <rect x="60" y="115" width="200" height="8" rx="4" fill="#a0d4b0" opacity="0.5" />
                <circle cx="110" cy="80" r="22" fill="#c8e6d1" opacity="0.8" />
                <path d="M88,115 Q88,97 110,94 Q132,97 132,115 L132,123 L88,123 Z" fill="#c8e6d1" opacity="0.6" />
                <path d="M100,100 L100,123" stroke={G} strokeWidth="1.5" opacity="0.35" />
                <path d="M120,100 L120,123" stroke={G} strokeWidth="1.5" opacity="0.35" />
                <path d="M105,108 Q98,115 98,124 Q98,132 106,132" stroke={G} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
                <circle cx="106" cy="132" r="5" stroke={G} strokeWidth="2.5" fill="none" opacity="0.4" />
                <circle cx="200" cy="80" r="20" fill="#a0d4b0" opacity="0.7" />
                <path d="M180,115 Q180,97 200,94 Q220,97 220,115 L220,123 L180,123 Z" fill="#a0d4b0" opacity="0.5" />
                <ellipse cx="165" cy="113" rx="18" ry="10" fill="#c8e6d1" opacity="0.7" />
                <ellipse cx="165" cy="104" rx="12" ry="10" fill="#a0d4b0" opacity="0.7" />
                <polygon points="157,96 153,88 163,96" fill="#a0d4b0" opacity="0.6" />
                <polygon points="173,96 177,88 167,96" fill="#a0d4b0" opacity="0.6" />
                <circle cx="161" cy="103" r="2" fill={G} opacity="0.5" />
                <circle cx="169" cy="103" r="2" fill={G} opacity="0.5" />
                <rect x="234" y="90" width="30" height="38" rx="3" fill="white" opacity="0.7" />
                <line x1="240" y1="102" x2="258" y2="102" stroke={G} strokeWidth="1.5" opacity="0.3" />
                <line x1="240" y1="110" x2="258" y2="110" stroke={G} strokeWidth="1.5" opacity="0.3" />
                <line x1="240" y1="118" x2="252" y2="118" stroke={G} strokeWidth="1.5" opacity="0.3" />
              </svg>

              <div style={{ position: 'absolute', top: 16, right: 16, background: '#fff', borderRadius: 12, padding: '10px 16px', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', zIndex: 10 }}>
                <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 700, fontSize: '1rem', color: G }}>73%</p>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 11, color: '#6b7280' }}>são contratados</p>
              </div>
            </div>

            <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#111827', marginBottom: 12 }}>
              Onde nossos alunos estagiam:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {partners.map(({ name, detail }) => (
                <div
                  key={name}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: 12, borderRadius: 12, border: '1px solid #e5e7eb', background: '#fff' }}
                >
                  <CheckCircle2 size={15} style={{ color: G, marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#111827' }}>{name}</p>
                    <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', color: '#9ca3af' }}>{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — benefits + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="grid grid-cols-3 gap-4" style={{ marginBottom: 32 }}>
              {[
                { v: '100%', l: 'fazem estágio' },
                { v: '15+', l: 'clínicas conveniadas' },
                { v: '4.9', l: 'avaliação supervisores' },
              ].map(({ v, l }) => (
                <div key={l} style={{ textAlign: 'center', padding: 16, borderRadius: 12, background: '#fff', border: '1px solid #e5e7eb' }}>
                  <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: G, lineHeight: 1, marginBottom: 4 }}>{v}</p>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.72rem', color: '#6b7280', lineHeight: 1.3 }}>{l}</p>
                </div>
              ))}
            </div>

            <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #e5e7eb', padding: 24, marginBottom: 20 }}>
              <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600, fontSize: '0.95rem', color: '#111827', marginBottom: 16 }}>
                O que o estágio inclui
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {benefits.map((b) => (
                  <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <CheckCircle2 size={16} style={{ color: G, marginTop: 2, flexShrink: 0 }} strokeWidth={2.5} />
                    <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.875rem', color: '#374151', lineHeight: 1.6 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderRadius: 16, padding: 20, marginBottom: 20, background: G }}>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '0.88rem', color: '#fff', lineHeight: 1.65 }}>
                "Muitos alunos da Cemevet são contratados pela própria clínica
                onde estagiaram — ainda durante o curso."
              </p>
            </div>

            <a
              href="https://wa.me/5581999999999?text=Quero+saber+mais+sobre+o+estagio+garantido"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', background: G, padding: '11px 24px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 2px 12px rgba(31,122,60,0.32)' }}
            >
              Quero garantir meu estágio
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
