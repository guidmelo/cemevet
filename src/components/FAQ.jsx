import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Preciso ter experiência prévia com animais?',
    a: 'Não. O curso foi desenvolvido para quem está começando do zero. O único pré-requisito é vontade de aprender e amor pelos animais. Todo o conteúdo técnico é ensinado do início.',
  },
  {
    q: 'Como funciona o estágio garantido?',
    a: 'Antes de começar o curso, formalizamos o estágio com uma de nossas clínicas conveniadas. O contrato é assinado antes da primeira aula, garantindo que você terá experiência prática real ao longo da formação.',
  },
  {
    q: 'O certificado é reconhecido pelo CRMV?',
    a: 'Sim. Nossa certificação é emitida em conformidade com as diretrizes do Conselho Regional de Medicina Veterinária, sendo reconhecida pelo mercado de trabalho em todo o estado.',
  },
  {
    q: 'Qual a duração e carga horária do curso?',
    a: 'O curso tem duração de 6 meses com aulas presenciais em Camaragibe. Os horários são planejados para se adequar a quem trabalha — consulte-nos sobre as turmas disponíveis.',
  },
  {
    q: 'O Workshop de Silvestres está incluso na matrícula?',
    a: 'Sim. O Workshop de Animais Silvestres (16 horas práticas intensivas) está incluído na grade curricular e não possui custo adicional. É um dos momentos mais marcantes do curso.',
  },
  {
    q: 'Quais cidades são atendidas?',
    a: 'O curso é presencial em Camaragibe/PE. Recebemos alunos de toda a Grande Recife — Camaragibe, Recife, Olinda, Paulista, São Lourenço da Mata e cidades vizinhas.',
  },
  {
    q: 'Há parcelamento?',
    a: 'Sim. Trabalhamos com parcelamento facilitado e desconto para pagamento à vista. Entre em contato pelo WhatsApp para conhecer as condições da sua turma.',
  },
  {
    q: 'Qual é a chance de ser contratado após o curso?',
    a: '73% dos nossos alunos são contratados pelas próprias clínicas onde estagiaram. Muitos são contratados antes mesmo de concluir o curso — durante o estágio.',
  },
]

function Item({ q, a, i, inView }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.06, duration: 0.5 }}
      className="border-b border-line last:border-none"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span
          className="font-semibold text-ink text-[0.9rem]"
          style={{ fontFamily: "'Nunito', sans-serif" }}
        >
          {q}
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200"
          style={{ background: open ? '#1f7a3c' : '#e8f5ed' }}
        >
          {open
            ? <Minus size={13} color="white" />
            : <Plus size={13} color="#1f7a3c" />
          }
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25,0.46,0.45,0.94] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-[0.875rem] text-ink-soft leading-relaxed"
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
    <section id="faq" ref={ref} className="py-20 md:py-24 px-5 md:px-8 bg-surface">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="section-divider mx-auto" />
          <p className="section-label mb-3">Dúvidas Frequentes</p>
          <h2 className="section-heading mb-4">Perguntas frequentes</h2>
          <p className="body-copy max-w-xl mx-auto">
            Não encontrou o que precisava? Fale diretamente com nossa equipe — respondemos em minutos.
          </p>
        </motion.div>

        {/* Two-col accordion on desktop */}
        <div className="grid md:grid-cols-2 gap-x-10">
          <div className="bg-white rounded-2xl px-6 py-2 border border-line">
            {faqs.slice(0, 4).map((item, i) => (
              <Item key={i} q={item.q} a={item.a} i={i} inView={inView} />
            ))}
          </div>
          <div className="bg-white rounded-2xl px-6 py-2 border border-line">
            {faqs.slice(4).map((item, i) => (
              <Item key={i} q={item.q} a={item.a} i={i + 4} inView={inView} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="body-copy mb-4">Ainda com dúvidas? Fale com a equipe da Cemevet.</p>
          <a
            href="https://wa.me/5581999999999?text=Olá, tenho uma dúvida sobre o curso de Auxiliar Veterinário da Cemevet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg font-bold text-white text-[0.88rem] transition-all hover:opacity-90"
            style={{ background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.3)', fontFamily: "'Nunito', sans-serif" }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.848L0 24l6.335-1.527A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.975 0-3.809-.548-5.373-1.497l-.384-.228-3.982.961.994-3.87-.252-.4A9.808 9.808 0 012.182 12c0-5.421 4.397-9.818 9.818-9.818 5.421 0 9.818 4.397 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
