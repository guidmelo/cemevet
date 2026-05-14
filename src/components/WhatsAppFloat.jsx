import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false)
  const [bubble, setBubble] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => { setShow(true); setBubble(true) }, 3000)
    const t2 = setTimeout(() => setBubble(false), 9000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && bubble && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative max-w-[200px] p-4 rounded-2xl rounded-br-sm"
            style={{ background: 'white', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            <button
              onClick={() => setBubble(false)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: '#9ca3af' }}
            >
              <X size={9} className="text-white" />
            </button>
            <p className="font-semibold text-ink text-[0.78rem] mb-0.5" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Tire suas dúvidas agora
            </p>
            <p className="text-ink-soft text-[0.72rem]" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Respondemos em minutos
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            href="https://wa.me/5581999999999?text=Olá! Quero saber mais sobre o curso de Auxiliar Veterinário da Cemevet"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="w-14 h-14 rounded-full flex items-center justify-center animate-whatsapp transition-transform hover:scale-110"
            style={{ background: '#25D366', boxShadow: '0 8px 24px rgba(37,211,102,0.45)' }}
          >
            <svg viewBox="0 0 24 24" width="27" height="27" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.848L0 24l6.335-1.527A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.975 0-3.809-.548-5.373-1.497l-.384-.228-3.982.961.994-3.87-.252-.4A9.808 9.808 0 012.182 12c0-5.421 4.397-9.818 9.818-9.818 5.421 0 9.818 4.397 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/>
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}
