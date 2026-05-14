import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const G = '#1f7a3c'
const ease = [0.25, 0.46, 0.45, 0.94]

const proof = [
  'Estágio garantido em contrato',
  'Certificação reconhecida pelo CRMV',
  'Workshop exclusivo com animais silvestres',
]

function HeroIllustration() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: 380 }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: 20, background: '#e8f5ed', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to top, rgba(31,122,60,0.12), transparent)' }} />
        <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '65%', maxWidth: 260 }}>
          <circle cx="160" cy="200" r="28" stroke={G} strokeWidth="6" fill="none" opacity="0.45" />
          <path d="M132,200 Q100,200 90,170 Q80,140 90,120 Q100,100 110,100" stroke={G} strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.45" />
          <path d="M188,200 Q220,200 226,170 Q232,140 222,120 Q212,100 200,100" stroke={G} strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.45" />
          <ellipse cx="110" cy="92" rx="10" ry="14" stroke={G} strokeWidth="5" fill="none" opacity="0.45" />
          <ellipse cx="200" cy="92" rx="10" ry="14" stroke={G} strokeWidth="5" fill="none" opacity="0.45" />
          <circle cx="160" cy="110" r="52" fill="white" opacity="0.75" />
          <ellipse cx="120" cy="82" rx="18" ry="26" fill="#c8e6d1" opacity="0.85" />
          <ellipse cx="200" cy="82" rx="18" ry="26" fill="#c8e6d1" opacity="0.85" />
          <ellipse cx="120" cy="82" rx="12" ry="19" fill="#a0d4b0" opacity="0.7" />
          <ellipse cx="200" cy="82" rx="12" ry="19" fill="#a0d4b0" opacity="0.7" />
          <circle cx="145" cy="104" r="7" fill={G} opacity="0.75" />
          <circle cx="175" cy="104" r="7" fill={G} opacity="0.75" />
          <circle cx="147" cy="102" r="2.5" fill="white" opacity="0.9" />
          <circle cx="177" cy="102" r="2.5" fill="white" opacity="0.9" />
          <ellipse cx="160" cy="120" rx="9" ry="7" fill={G} opacity="0.5" />
          <path d="M151,127 Q160,134 169,127" stroke={G} strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
          <rect x="132" y="155" width="56" height="12" rx="6" fill={G} opacity="0.2" />
          <circle cx="160" cy="161" r="4" fill={G} opacity="0.35" />
          <rect x="56" y="36" width="22" height="6" rx="3" fill={G} opacity="0.3" />
          <rect x="63" y="29" width="6" height="22" rx="3" fill={G} opacity="0.3" />
          <circle cx="258" cy="50" r="7" fill={G} opacity="0.2" />
          <circle cx="272" cy="44" r="4" fill={G} opacity="0.2" />
          <circle cx="278" cy="57" r="4" fill={G} opacity="0.2" />
          <circle cx="265" cy="61" r="4" fill={G} opacity="0.2" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease }}
        style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 12, padding: '14px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', minWidth: 180, zIndex: 20 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: '#e8f5ed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div>
            <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 700, fontSize: 13, color: '#111827', lineHeight: 1.2 }}>CRMV Reconhecido</p>
            <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 11, color: '#6b7280', lineHeight: 1.2 }}>Certificação oficial</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -16, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.05, duration: 0.6, ease }}
        style={{ position: 'absolute', top: -20, right: -20, background: '#fff', borderRadius: 12, padding: '14px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', zIndex: 20 }}
      >
        <p style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 700, fontSize: 26, color: G, lineHeight: 1 }}>+200</p>
        <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 11, color: '#6b7280', lineHeight: 1.3 }}>Alunos formados</p>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{ paddingTop: 104, paddingBottom: 80, background: 'linear-gradient(180deg, #f0f7f3 0%, #ffffff 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: '#e8f5ed', border: '1px solid #c3e0cc', marginBottom: 24 }}
            >
              <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 11, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Camaragibe · Pernambuco
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease }}
              style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 600, lineHeight: 1.12, color: '#111827', marginBottom: 20 }}
            >
              Transforme seu amor pelos animais em uma{' '}
              <span style={{ background: 'linear-gradient(135deg, #1f7a3c, #2da861)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                profissão reconhecida.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease }}
              style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.75, marginBottom: 28, maxWidth: 480 }}
            >
              Curso de Auxiliar de Medicina Veterinária com estágio garantido e
              certificação reconhecida pelo CRMV. A formação mais completa da
              Grande Recife para quem quer trabalhar com animais.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}
            >
              {proof.map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={16} style={{ color: G, flexShrink: 0 }} strokeWidth={2.5} />
                  <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', fontWeight: 600, color: '#374151' }}>{p}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://wa.me/5581999999999?text=Quero+me+matricular+no+curso+de+Auxiliar+Veterinário+da+Cemevet"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', background: G, padding: '11px 24px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 2px 12px rgba(31,122,60,0.32)' }}
              >
                Quero me matricular
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/5581999999999?text=Quero+conhecer+mais+sobre+a+Cemevet"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'Nunito, sans-serif', fontSize: 14, fontWeight: 700, color: G, background: 'transparent', border: '1.5px solid #c3e0cc', padding: '11px 24px', borderRadius: 8, textDecoration: 'none' }}
              >
                Falar com a equipe
              </a>
            </motion.div>
          </div>

          {/* Right — illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9, ease }}
            style={{ position: 'relative', paddingTop: 24, paddingBottom: 24 }}
          >
            <HeroIllustration />
          </motion.div>
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease }}
          style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid #e5e7eb' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { n: '+200', l: 'Alunos formados' },
              { n: '100%', l: 'com estágio garantido' },
              { n: '15+',  l: 'clínicas parceiras' },
              { n: '4.9',  l: 'avaliação média' },
            ].map(({ n, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1.8rem', fontWeight: 700, color: G, lineHeight: 1, marginBottom: 4 }}>{n}</p>
                <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.8rem', color: '#6b7280' }}>{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
