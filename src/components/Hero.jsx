import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Shield, Award, BookOpen } from 'lucide-react'

const ease = [0.25, 0.46, 0.45, 0.94]

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease }}
    >
      {children}
    </motion.div>
  )
}

/* Decorative animal silhouette composed entirely of SVG paths */
function AnimalComposition() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 0.45, duration: 1.1, ease }}
      className="relative hidden md:flex items-center justify-center"
    >
      {/* Main card */}
      <div
        className="relative w-full max-w-[420px] rounded-[2.5rem] p-8 animate-float"
        style={{
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.14)',
          backdropFilter: 'blur(24px)',
        }}
      >
        {/* Top badge */}
        <div
          className="absolute -top-4 left-8 flex items-center gap-2 px-4 py-2 rounded-full"
          style={{ background: '#fbbf24', boxShadow: '0 8px 24px rgba(251,191,36,0.4)' }}
        >
          <Award size={14} className="text-white" />
          <span className="text-xs font-bold text-white" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            Reconhecido CRMV
          </span>
        </div>

        {/* Illustration area — abstract animal silhouettes via SVG */}
        <div className="flex justify-center mb-6 mt-4">
          <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[300px]">
            {/* Dog silhouette */}
            <g opacity="0.9">
              <ellipse cx="90" cy="130" rx="38" ry="22" fill="rgba(168,213,162,0.25)" />
              <ellipse cx="90" cy="108" rx="22" ry="26" fill="rgba(168,213,162,0.35)" />
              <ellipse cx="90" cy="88" rx="18" ry="20" fill="rgba(168,213,162,0.5)" />
              {/* ears */}
              <ellipse cx="76" cy="74" rx="7" ry="12" fill="rgba(109,184,92,0.6)" transform="rotate(-15 76 74)" />
              <ellipse cx="104" cy="74" rx="7" ry="12" fill="rgba(109,184,92,0.6)" transform="rotate(15 104 74)" />
              {/* legs */}
              <rect x="70" y="144" width="10" height="22" rx="5" fill="rgba(168,213,162,0.4)" />
              <rect x="86" y="144" width="10" height="22" rx="5" fill="rgba(168,213,162,0.4)" />
              <rect x="101" y="144" width="10" height="22" rx="5" fill="rgba(168,213,162,0.4)" />
              {/* tail */}
              <path d="M128,126 Q148,110 140,94" stroke="rgba(168,213,162,0.7)" strokeWidth="8" strokeLinecap="round" fill="none" />
            </g>

            {/* Cat silhouette */}
            <g opacity="0.9">
              <ellipse cx="220" cy="132" rx="30" ry="18" fill="rgba(109,184,92,0.2)" />
              <ellipse cx="220" cy="114" rx="18" ry="22" fill="rgba(109,184,92,0.28)" />
              <ellipse cx="220" cy="96" rx="16" ry="18" fill="rgba(109,184,92,0.4)" />
              {/* pointed ears */}
              <polygon points="207,82 202,66 214,78" fill="rgba(109,184,92,0.55)" />
              <polygon points="233,82 238,66 226,78" fill="rgba(109,184,92,0.55)" />
              {/* legs */}
              <rect x="205" y="142" width="9" height="20" rx="4" fill="rgba(109,184,92,0.35)" />
              <rect x="219" y="142" width="9" height="20" rx="4" fill="rgba(109,184,92,0.35)" />
              {/* tail curl */}
              <path d="M250,130 Q268,120 260,100 Q252,82 240,90" stroke="rgba(109,184,92,0.6)" strokeWidth="7" strokeLinecap="round" fill="none" />
            </g>

            {/* Bird perched */}
            <g opacity="0.85">
              <ellipse cx="160" cy="52" rx="14" ry="18" fill="rgba(255,255,255,0.2)" />
              <ellipse cx="160" cy="36" rx="11" ry="13" fill="rgba(255,255,255,0.28)" />
              {/* beak */}
              <polygon points="153,37 147,40 153,43" fill="rgba(251,191,36,0.7)" />
              {/* wing */}
              <path d="M146,55 Q132,62 130,74" stroke="rgba(255,255,255,0.4)" strokeWidth="6" strokeLinecap="round" fill="none" />
              <path d="M174,55 Q188,62 190,74" stroke="rgba(255,255,255,0.4)" strokeWidth="6" strokeLinecap="round" fill="none" />
              {/* perch */}
              <line x1="135" y1="74" x2="185" y2="74" stroke="rgba(168,213,162,0.5)" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Stethoscope detail */}
            <path
              d="M38,40 Q30,30 38,22 Q46,14 54,22 Q62,30 54,40 Q46,50 38,58 L38,78"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="38" cy="84" r="7" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="3" />

            {/* Cross/medical */}
            <g opacity="0.3">
              <rect x="278" y="28" width="24" height="8" rx="4" fill="white" />
              <rect x="286" y="20" width="8" height="24" rx="4" fill="white" />
            </g>
          </svg>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-3 p-4 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {[
            { icon: Shield, label: 'Estágio', value: 'Garantido' },
            { icon: Award, label: 'CRMV', value: 'Reconhecido' },
            { icon: BookOpen, label: 'Alunos', value: '+200 formados' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <Icon size={16} className="text-green-pale opacity-70" />
              <p className="text-white/50 text-[10px]" style={{ fontFamily: "'Nunito', sans-serif" }}>{label}</p>
              <p className="text-white font-semibold text-xs" style={{ fontFamily: "'Fredoka', sans-serif" }}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Orbiting glow */}
      <div
        className="absolute inset-[-40px] rounded-full pointer-events-none animate-organic opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, #6db85c 0%, transparent 70%)' }}
      />
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(150deg, #112409 0%, #1e4210 25%, #2d6a1f 55%, #1a3d0e 100%)',
          }}
        />
        {/* Noise grain texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Soft radial glow right */}
        <div
          className="absolute -right-32 top-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #6db85c 0%, transparent 65%)' }}
        />
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-12 w-full pt-24 pb-20 grid md:grid-cols-[1fr_1fr] gap-16 items-center">
        {/* Left — copy */}
        <div className="flex flex-col">
          <FadeUp delay={0}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 w-fit"
              style={{
                background: 'rgba(255,255,255,0.09)',
                border: '1px solid rgba(255,255,255,0.16)',
              }}
            >
              <MapPin size={13} className="text-green-pale" />
              <span className="text-[13px] text-green-pale font-medium" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Camaragibe, Pernambuco
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1
              className="text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem] font-semibold leading-[1.1] text-white mb-6"
              style={{ fontFamily: "'Fredoka', sans-serif", letterSpacing: '-0.5px' }}
            >
              Transforme seu amor pelos animais em uma{' '}
              <span style={{ color: '#a8d5a2' }}>profissão de verdade.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p
              className="text-[1.05rem] text-white/65 leading-[1.75] mb-10 max-w-[480px]"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Auxiliar de Medicina Veterinária com{' '}
              <strong className="text-white/90 font-semibold">estágio garantido</strong> e
              reconhecimento CRMV. A formação mais completa de Camaragibe.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5581999999999?text=Quero+me+matricular+no+curso+de+Auxiliar+Veterinário+da+Cemevet"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-white font-bold text-[0.95rem] btn-shimmer transition-all duration-300 hover:scale-[1.03]"
                style={{ fontFamily: "'Nunito', sans-serif", boxShadow: '0 8px 32px rgba(45,106,31,0.55)' }}
              >
                Quero me matricular
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/5581999999999?text=Quero+tirar+dúvidas+sobre+o+curso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-[0.95rem] text-white transition-all duration-300 hover:bg-white/20"
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  border: '1.5px solid rgba(255,255,255,0.22)',
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.45}>
            <div className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-2">
                {['AM', 'JL', 'PT', 'CR'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white border-2"
                    style={{
                      background: `linear-gradient(135deg, ${['#2d6a1f','#4a8a2a','#376a19','#6db85c'][i]}, ${['#4a8a2a','#6db85c','#4a8a2a','#a8d5a2'][i]})`,
                      borderColor: 'rgba(255,255,255,0.2)',
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/55 text-[12px]" style={{ fontFamily: "'Nunito', sans-serif" }}>
                  +200 alunos formados em Camaragibe
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right — illustration */}
        <AnimalComposition />
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,36 C360,72 720,0 1080,36 C1260,54 1380,30 1440,36 L1440,72 L0,72 Z" fill="#faf8f4" />
        </svg>
      </div>
    </section>
  )
}
