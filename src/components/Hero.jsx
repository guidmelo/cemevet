import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const ease = [0.25, 0.46, 0.45, 0.94]

const proof = [
  'Estágio garantido em contrato',
  'Certificação reconhecida pelo CRMV',
  'Workshop exclusivo com animais silvestres',
]

/* Decorative animal SVG — clean line-art style, like a clinical illustration */
function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-0">
      {/* Main image block */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden img-placeholder"
        style={{ borderRadius: '20px' }}
      >
        {/* Overlay gradient bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 z-10"
          style={{ background: 'linear-gradient(to top, rgba(31,122,60,0.15), transparent)' }}
        />

        {/* Central clinical illustration */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[70%] max-w-[260px]">
            {/* Stethoscope */}
            <circle cx="160" cy="200" r="28" stroke="#1f7a3c" strokeWidth="6" fill="none" opacity="0.5" />
            <path d="M132,200 Q100,200 90,170 Q80,140 90,120 Q100,100 110,100" stroke="#1f7a3c" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.5" />
            <path d="M188,200 Q220,200 226,170 Q232,140 222,120 Q212,100 200,100" stroke="#1f7a3c" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.5" />
            <ellipse cx="110" cy="92" rx="10" ry="14" stroke="#1f7a3c" strokeWidth="5" fill="none" opacity="0.5" />
            <ellipse cx="200" cy="92" rx="10" ry="14" stroke="#1f7a3c" strokeWidth="5" fill="none" opacity="0.5" />

            {/* Dog face — clean line art */}
            <circle cx="160" cy="110" r="52" fill="white" opacity="0.7" />
            <circle cx="160" cy="110" r="52" stroke="#1f7a3c" strokeWidth="3" fill="none" opacity="0.3" />
            {/* ears */}
            <ellipse cx="120" cy="82" rx="18" ry="26" fill="#c8e6d1" opacity="0.8" />
            <ellipse cx="200" cy="82" rx="18" ry="26" fill="#c8e6d1" opacity="0.8" />
            <ellipse cx="120" cy="82" rx="12" ry="19" fill="#a0d4b0" opacity="0.6" />
            <ellipse cx="200" cy="82" rx="12" ry="19" fill="#a0d4b0" opacity="0.6" />
            {/* eyes */}
            <circle cx="145" cy="104" r="7" fill="#1f7a3c" opacity="0.7" />
            <circle cx="175" cy="104" r="7" fill="#1f7a3c" opacity="0.7" />
            <circle cx="147" cy="102" r="2.5" fill="white" opacity="0.8" />
            <circle cx="177" cy="102" r="2.5" fill="white" opacity="0.8" />
            {/* nose */}
            <ellipse cx="160" cy="120" rx="9" ry="7" fill="#1f7a3c" opacity="0.5" />
            {/* mouth */}
            <path d="M151,127 Q160,134 169,127" stroke="#1f7a3c" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
            {/* collar */}
            <rect x="132" y="155" width="56" height="12" rx="6" fill="#1f7a3c" opacity="0.2" />
            <circle cx="160" cy="161" r="4" fill="#1f7a3c" opacity="0.35" />

            {/* Small cross/medical */}
            <rect x="56" y="36" width="22" height="6" rx="3" fill="#1f7a3c" opacity="0.3" />
            <rect x="63" y="29" width="6" height="22" rx="3" fill="#1f7a3c" opacity="0.3" />

            {/* Paw print small decorative */}
            <circle cx="258" cy="50" r="7" fill="#1f7a3c" opacity="0.2" />
            <circle cx="272" cy="44" r="4" fill="#1f7a3c" opacity="0.2" />
            <circle cx="278" cy="57" r="4" fill="#1f7a3c" opacity="0.2" />
            <circle cx="265" cy="61" r="4" fill="#1f7a3c" opacity="0.2" />
          </svg>
        </div>
      </div>

      {/* Floating card — credencial */}
      <motion.div
        initial={{ opacity: 0, y: 16, x: -10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6, ease }}
        className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 z-20"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)', minWidth: '180px' }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: '#e8f5ed' }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1f7a3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div>
            <p className="font-bold text-ink text-[0.82rem]" style={{ fontFamily: "'Fredoka', sans-serif" }}>CRMV Reconhecido</p>
            <p className="text-ink-soft text-[0.7rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>Certificação oficial</p>
          </div>
        </div>
      </motion.div>

      {/* Floating card — alunos */}
      <motion.div
        initial={{ opacity: 0, y: -16, x: 10 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1.05, duration: 0.6, ease }}
        className="absolute -top-5 -right-5 bg-white rounded-xl p-4 z-20"
        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
      >
        <p className="font-bold text-[1.4rem] text-brand" style={{ fontFamily: "'Fredoka', sans-serif" }}>+200</p>
        <p className="text-ink-soft text-[0.72rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>Alunos formados</p>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      className="pt-[104px] md:pt-[124px] pb-16 md:pb-20 px-5 md:px-8"
      style={{ background: 'linear-gradient(180deg, #f2faf5 0%, #ffffff 100%)' }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left — copy */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
            style={{ background: '#e8f5ed', border: '1px solid #c3e0cc' }}
          >
            <span
              className="text-[0.72rem] font-bold uppercase tracking-wider text-brand"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Camaragibe · Pernambuco
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease }}
            className="mb-5"
            style={{
              fontFamily: "'Fredoka', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.12,
              color: '#111827',
            }}
          >
            Transforme seu amor pelos animais em uma{' '}
            <span className="text-brand-gradient">profissão reconhecida.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease }}
            className="body-copy mb-8 max-w-[480px]"
          >
            Curso de Auxiliar de Medicina Veterinária com estágio garantido e
            certificação reconhecida pelo CRMV. A formação mais completa da
            Grande Recife para quem quer trabalhar com animais.
          </motion.p>

          {/* Proof points */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
            className="flex flex-col gap-2.5 mb-9"
          >
            {proof.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <CheckCircle size={16} style={{ color: '#1f7a3c', flexShrink: 0 }} strokeWidth={2.5} />
                <span className="text-ink-mid text-[0.9rem] font-semibold" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  {p}
                </span>
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://wa.me/5581999999999?text=Quero+me+matricular+no+curso+de+Auxiliar+Veterinário+da+Cemevet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Quero me matricular
              <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/5581999999999?text=Quero+conhecer+mais+sobre+a+Cemevet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
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
          className="relative"
        >
          <HeroIllustration />
        </motion.div>
      </div>

      {/* Trust strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease }}
        className="max-w-6xl mx-auto mt-14 pt-8 border-t border-line"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { n: '+200', l: 'Alunos formados' },
            { n: '100%', l: 'com estágio garantido' },
            { n: '15+',  l: 'clínicas parceiras' },
            { n: '4.9',  l: 'avaliação média' },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <p
                className="text-[1.8rem] font-bold leading-none mb-1"
                style={{ fontFamily: "'Fredoka', sans-serif", color: '#1f7a3c' }}
              >
                {n}
              </p>
              <p className="text-ink-soft text-[0.8rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                {l}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
