import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { CheckCircle2, ArrowRight } from 'lucide-react'

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
    <section id="estagio" ref={ref} className="py-20 md:py-24 px-5 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <div className="section-divider mx-auto" />
          <p className="section-label mb-3">Nosso Diferencial</p>
          <h2 className="section-heading mb-4">
            Estágio garantido.<br />
            <span className="text-brand-gradient">Em contrato, antes de começar.</span>
          </h2>
          <p className="body-copy">
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
            transition={{ delay: 0.15, duration: 0.8, ease: [0.25,0.46,0.45,0.94] }}
          >
            {/* Image block */}
            <div
              className="w-full aspect-[16/10] rounded-2xl img-placeholder mb-6 relative overflow-hidden"
              style={{ minHeight: '220px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[75%]">
                  {/* Clinic interior suggestion */}
                  <rect x="40" y="120" width="240" height="60" rx="4" fill="#a0d4b0" opacity="0.3" />
                  {/* Table */}
                  <rect x="60" y="115" width="200" height="8" rx="4" fill="#a0d4b0" opacity="0.5" />
                  {/* Two people */}
                  <circle cx="110" cy="80" r="22" fill="#c8e6d1" opacity="0.8" />
                  <path d="M88,115 Q88,97 110,94 Q132,97 132,115 L132,123 L88,123 Z" fill="#c8e6d1" opacity="0.6" />
                  {/* lab coat */}
                  <path d="M100,100 L100,123" stroke="#1f7a3c" strokeWidth="1.5" opacity="0.35" />
                  <path d="M120,100 L120,123" stroke="#1f7a3c" strokeWidth="1.5" opacity="0.35" />
                  {/* stethoscope */}
                  <path d="M105,108 Q98,115 98,124 Q98,132 106,132" stroke="#1f7a3c" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
                  <circle cx="106" cy="132" r="5" stroke="#1f7a3c" strokeWidth="2.5" fill="none" opacity="0.4" />
                  {/* Student person */}
                  <circle cx="200" cy="80" r="20" fill="#a0d4b0" opacity="0.7" />
                  <path d="M180,115 Q180,97 200,94 Q220,97 220,115 L220,123 L180,123 Z" fill="#a0d4b0" opacity="0.5" />
                  {/* Cat on table */}
                  <ellipse cx="165" cy="113" rx="18" ry="10" fill="#c8e6d1" opacity="0.7" />
                  <ellipse cx="165" cy="104" rx="12" ry="10" fill="#a0d4b0" opacity="0.7" />
                  <polygon points="157,96 153,88 163,96" fill="#a0d4b0" opacity="0.6" />
                  <polygon points="173,96 177,88 167,96" fill="#a0d4b0" opacity="0.6" />
                  <circle cx="161" cy="103" r="2" fill="#1f7a3c" opacity="0.5" />
                  <circle cx="169" cy="103" r="2" fill="#1f7a3c" opacity="0.5" />
                  {/* Clipboard */}
                  <rect x="234" y="90" width="30" height="38" rx="3" fill="white" opacity="0.7" stroke="#1f7a3c" strokeWidth="1.5" opacity="0.3" />
                  <line x1="240" y1="102" x2="258" y2="102" stroke="#1f7a3c" strokeWidth="1.5" opacity="0.3" />
                  <line x1="240" y1="110" x2="258" y2="110" stroke="#1f7a3c" strokeWidth="1.5" opacity="0.3" />
                  <line x1="240" y1="118" x2="252" y2="118" stroke="#1f7a3c" strokeWidth="1.5" opacity="0.3" />
                </svg>
              </div>

              {/* Badge */}
              <div
                className="absolute top-4 right-4 bg-white rounded-xl px-4 py-2.5 z-10"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.10)' }}
              >
                <p className="font-bold text-brand text-[1rem]" style={{ fontFamily: "'Fredoka', sans-serif" }}>73%</p>
                <p className="text-ink-soft text-[0.68rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>são contratados</p>
              </div>
            </div>

            {/* Partners */}
            <p className="font-bold text-ink text-[0.85rem] mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Onde nossos alunos estagiam:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {partners.map(({ name, detail }) => (
                <div
                  key={name}
                  className="flex items-start gap-2.5 p-3 rounded-xl border border-line bg-white"
                >
                  <CheckCircle2 size={15} style={{ color: '#1f7a3c', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <p className="font-semibold text-ink text-[0.8rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>{name}</p>
                    <p className="text-ink-muted text-[0.72rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — benefits + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25,0.46,0.45,0.94] }}
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { v: '100%', l: 'fazem estágio' },
                { v: '15+', l: 'clínicas conveniadas' },
                { v: '4.9', l: 'avaliação supervisores' },
              ].map(({ v, l }) => (
                <div
                  key={l}
                  className="text-center p-4 rounded-xl bg-white border border-line"
                >
                  <p className="font-bold text-[1.5rem] text-brand leading-none mb-1" style={{ fontFamily: "'Fredoka', sans-serif" }}>{v}</p>
                  <p className="text-ink-soft text-[0.72rem] leading-snug" style={{ fontFamily: "'Nunito', sans-serif" }}>{l}</p>
                </div>
              ))}
            </div>

            {/* Benefits list */}
            <div className="bg-white rounded-2xl border border-line p-6 mb-6">
              <p className="font-bold text-ink text-[0.95rem] mb-4" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                O que o estágio inclui
              </p>
              <ul className="flex flex-col gap-3.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={16} style={{ color: '#1f7a3c', marginTop: '2px', flexShrink: 0 }} strokeWidth={2.5} />
                    <span className="text-ink-mid text-[0.875rem] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlight block */}
            <div
              className="rounded-2xl p-5 mb-6"
              style={{ background: '#1f7a3c' }}
            >
              <p className="font-semibold text-white text-[0.88rem] leading-relaxed" style={{ fontFamily: "'Nunito', sans-serif" }}>
                "Muitos alunos da Cemevet são contratados pela própria clínica
                onde estagiaram — ainda durante o curso."
              </p>
            </div>

            <a
              href="https://wa.me/5581999999999?text=Quero+saber+mais+sobre+o+estagio+garantido"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
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
