import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Preciso ter experiência prévia com animais?',
    a: 'Não! O curso foi desenvolvido do zero, pensado para quem está começando. O único pré-requisito é ter amor pelos animais e vontade de aprender. Todo o conteúdo técnico você aprende conosco.',
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
    a: 'O curso tem duração de 6 meses, com aulas presenciais em Camaragibe. As aulas são organizadas para caber na rotina de quem trabalha — consulte-nos sobre horários disponíveis.',
  },
  {
    q: 'O Workshop de Silvestres é incluso?',
    a: 'Sim! O Workshop de Animais Silvestres (16 horas práticas) faz parte da grade curricular e está incluso na matrícula. É um dos momentos mais marcantes do curso.',
  },
  {
    q: 'Quais cidades atendidas?',
    a: 'O curso é presencial em Camaragibe/PE. Atendemos alunos de Camaragibe, Recife, Olinda, Paulista, São Lourenço da Mata e cidades vizinhas da Grande Recife.',
  },
  {
    q: 'Há possibilidade de parcelamento?',
    a: 'Sim! Trabalhamos com parcelamento facilitado. Entre em contato pelo WhatsApp para conversar sobre valores e condições especiais. Há desconto para pagamento à vista.',
  },
]

function FAQItem({ q, a, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="rounded-2xl overflow-hidden"
      style={{ border: '1.5px solid #e8f5e3', background: open ? '#f9fdf7' : 'white' }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <span
          className="font-semibold text-gray-800 text-sm md:text-base"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {q}
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            background: open ? '#2d6a1f' : '#e8f5e3',
            color: open ? 'white' : '#2d6a1f',
          }}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p
              className="px-5 pb-5 text-sm text-gray-500 leading-relaxed"
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
    <section ref={ref} className="py-20 px-5 md:px-8 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: '#e8f5e3', color: '#2d6a1f', fontFamily: "'Nunito', sans-serif" }}
          >
            ✦ Perguntas Frequentes
          </span>
          <h2
            className="text-3xl md:text-4xl font-semibold text-gray-900"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Ficou alguma dúvida?
          </h2>
          <p
            className="mt-3 text-gray-500"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Se não encontrar sua resposta aqui, fale direto com a gente no WhatsApp.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3 mb-10">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center p-8 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #f4fdf0, #e8f5e3)',
            border: '1.5px solid #a8d5a2',
          }}
        >
          <p
            className="text-xl font-semibold text-gray-800 mb-2"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Ainda com dúvidas? 💬
          </p>
          <p
            className="text-gray-500 text-sm mb-5"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Nossa equipe responde em minutos. Sem burocracia, sem enrolação.
          </p>
          <a
            href="https://wa.me/5581999999999?text=Olá! Tenho uma dúvida sobre o curso de Auxiliar Veterinário da Cemevet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: '#25D366',
              boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.848L0 24l6.335-1.527A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.975 0-3.809-.548-5.373-1.497l-.384-.228-3.982.961.994-3.87-.252-.4A9.808 9.808 0 012.182 12c0-5.421 4.397-9.818 9.818-9.818 5.421 0 9.818 4.397 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z" />
            </svg>
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
