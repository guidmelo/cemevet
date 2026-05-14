import { motion } from 'framer-motion'
import { ArrowRight, Star, MapPin } from 'lucide-react'

const floatVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #1a3a0a 0%, #2d6a1f 35%, #376a19 55%, #1e4a10 100%)',
          }}
        />
        {/* Organic blobs */}
        <div
          className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] opacity-20 blob-1"
          style={{ background: 'radial-gradient(circle, #6db85c 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-5%] left-[-8%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] opacity-15 blob-2"
          style={{ background: 'radial-gradient(circle, #a8d5a2 0%, transparent 70%)' }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Leaf silhouette right */}
        <div
          className="absolute right-0 top-0 h-full w-1/2 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Cpath d='M380,0 C200,100 50,200 80,400 C110,600 300,580 380,600 Z' fill='%23a8d5a2'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <motion.div
            custom={0}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <MapPin size={13} className="text-green-pale" />
            <span
              className="text-sm font-medium text-green-pale"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Camaragibe / Pernambuco
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-5"
            style={{ fontFamily: "'Fredoka', sans-serif", letterSpacing: '-0.5px' }}
          >
            Transforme seu amor pelos animais em uma{' '}
            <span className="text-green-pale">profissão de verdade.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="text-lg text-white/75 mb-8 leading-relaxed max-w-lg"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Curso de Auxiliar de Medicina Veterinária com{' '}
            <strong className="text-white font-semibold">estágio garantido</strong> e
            reconhecimento CRMV. Sua porta de entrada para viver trabalhando com animais.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <a
              href="https://wa.me/5581999999999?text=Quero+me+matricular+no+curso+de+Auxiliar+Veterinário+da+Cemevet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-105 shimmer-btn"
              style={{
                fontFamily: "'Nunito', sans-serif",
                boxShadow: '0 8px 30px rgba(45,106,31,0.5)',
              }}
            >
              Quero me matricular
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/5581999999999?text=Quero+tirar+dúvidas+sobre+o+curso"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(255,255,255,0.3)',
                color: 'white',
                fontFamily: "'Nunito', sans-serif",
                backdropFilter: 'blur(8px)',
              }}
            >
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Social proof mini */}
          <motion.div
            custom={4}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {['🐕', '🐈', '🦜', '🐴'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-lg border-2"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    borderColor: 'rgba(255,255,255,0.3)',
                  }}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="#fbbf24" className="text-yellow-400" />
                ))}
              </div>
              <p className="text-white/70 text-xs" style={{ fontFamily: "'Nunito', sans-serif" }}>
                +200 alunos formados em Camaragibe
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden md:block"
        >
          <div className="relative">
            {/* Main card */}
            <div
              className="relative rounded-3xl p-8 animate-float"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
              }}
            >
              {/* Animal emoji grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { emoji: '🐕', label: 'Cães' },
                  { emoji: '🐈', label: 'Gatos' },
                  { emoji: '🐇', label: 'Coelhos' },
                  { emoji: '🦜', label: 'Aves' },
                  { emoji: '🦎', label: 'Répteis' },
                  { emoji: '🐴', label: 'Equinos' },
                ].map(({ emoji, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    <span className="text-3xl">{emoji}</span>
                    <span className="text-xs text-white/60" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pill badges */}
              <div className="flex flex-wrap gap-2">
                {['Estágio Garantido ✓', 'CRMV ✓', 'Certificação ✓', 'Silvestres ✓'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{
                      background: 'rgba(109,184,92,0.3)',
                      border: '1px solid rgba(109,184,92,0.5)',
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                boxShadow: '0 8px 24px rgba(251,191,36,0.4)',
              }}
            >
              <p className="text-xs font-bold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                🌟 Reconhecido CRMV
              </p>
            </motion.div>

            {/* Glow */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ boxShadow: '0 0 60px rgba(109,184,92,0.2)' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,10 1440,40 L1440,80 L0,80 Z" fill="#faf8f3" />
        </svg>
      </div>
    </section>
  )
}
