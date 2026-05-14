import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

const G = '#1f7a3c'

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
    <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
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
    <section id="depoimentos" ref={ref} style={{ padding: '80px 0', background: '#ffffff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 56, maxWidth: 520, margin: '0 auto 56px' }}
        >
          <div style={{ width: 40, height: 3, background: G, borderRadius: 2, margin: '0 auto 16px' }} />
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
            Depoimentos
          </p>
          <h2 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', fontWeight: 600, color: '#111827', lineHeight: 1.15, marginBottom: 16 }}>
            O que nossos alunos dizem
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.75 }}>
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
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ background: '#fff', borderRadius: 14, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
            >
              <Stars />
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.875rem', color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
                "{text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid #e5e7eb' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.75rem', color: '#fff' }}>{initials}</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.875rem', color: '#111827' }}>{name}</p>
                  <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.75rem', color: '#6b7280' }}>{role}</p>
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
          style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, padding: '32px', borderRadius: 16, border: '1px solid #e5e7eb', background: '#f9fafb' }}
        >
          {[
            { v: '4.9/5', l: 'Avaliação média' },
            { v: '+200',  l: 'Alunos formados' },
            { v: '100%',  l: 'Recomendam o curso' },
          ].map(({ v, l }) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: G, lineHeight: 1, marginBottom: 4 }}>{v}</p>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.78rem', color: '#6b7280' }}>{l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
