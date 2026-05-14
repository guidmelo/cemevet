import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Preciso ter experiência prévia com animais?',
    a: 'Não. O curso foi desenvolvido do zero, pensado para quem está começando. O único pré-requisito é ter amor pelos animais e vontade de aprender. Todo o conteúdo técnico você aprende conosco.',
  },
  {
    q: 'Como funciona o estágio garantido?',
    a: 'Antes mesmo de começar o curso, formalizamos parceria com clínicas veterinárias da região. Você faz o estágio durante ou ao final da formação, em uma das nossas clínicas conveniadas, com supervisor qualificado.',
  },
  {
    q: 'O certificado é reconhecido pelo CRMV?',
    a: 'Sim. Nossa certificação é emitida em conformidade com as diretrizes do Conselho Regional de Medicina Veterinária. Isso significa que seu diploma tem peso real no mercado de trabalho.',
  },
  {
    q: 'Qual a duração do curso?',
    a: 'O curso tem duração de 6 meses, com aulas presenciais em Camaragibe. Os horários são organizados para caber na rotina de quem trabalha — consulte-nos sobre turmas disponíveis.',
  },
  {
    q: 'O Workshop de Silvestres é incluso?',
    a: 'Sim. O Workshop de Animais Silvestres (16 horas práticas) faz parte da grade curricular e está incluso na matrícula. É um dos momentos mais marcantes do curso.',
  },
  {
    q: 'Há possibilidade de parcelamento?',
    a: 'Sim. Trabalhamos com parcelamento facilitado. Entre em contato pelo WhatsApp para conversar sobre valores e condições especiais. Há desconto para pagamento à vista.',
  },
]

function Item({ q, a, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="border-b border-gray-100 last:border-none"
    >
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span
          className="font-semibold text-ink text-[0.95rem] group-hover:text-green-bio transition-colors duration-200"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {q}
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: open ? '#2d6a1f' : '#edf7ea',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <Plus size={14} style={{ color: open ? 'white' : '#2d6a1f' }} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25,0.46,0.45,0.94] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-[0.88rem] text-ink-soft leading-relaxed"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const { ref, inView } = useReveal()

  return (
    <section ref={ref} className="py-24 px-6 md:px-10 bg-cream">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-14 items-start">

        {/* Left: header + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="md:sticky md:top-24"
        >
          <p
            className="text-[0.8rem] font-semibold uppercase tracking-[0.15em] text-green-bio mb-4"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Perguntas Frequentes
          </p>
          <h2
            className="text-[2.2rem] md:text-[2.6rem] font-semibold text-ink leading-tight mb-4"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Ficou alguma dúvida?
          </h2>
          <p
            className="text-ink-soft text-[0.9rem] leading-relaxed mb-8"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Se não encontrar sua resposta aqui, fale direto com a gente no WhatsApp.
            Respondemos em minutos.
          </p>
          <a
            href="https://wa.me/5581999999999?text=Olá! Tenho uma dúvida sobre o curso de Auxiliar Veterinário da Cemevet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-[0.88rem] transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: '#25D366',
              boxShadow: '0 6px 20px rgba(37,211,102,0.3)',
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <svg viewBox="0 0 24 24" width="17" height="17" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.848L0 24l6.335-1.527A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.975 0-3.809-.548-5.373-1.497l-.384-.228-3.982.961.994-3.87-.252-.4A9.808 9.808 0 012.182 12c0-5.421 4.397-9.818 9.818-9.818 5.421 0 9.818 4.397 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Right: FAQ list */}
        <div className="bg-white rounded-2xl px-7 py-2">
          {faqs.map((item, i) => (
            <Item key={i} q={item.q} a={item.a} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
