import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Stethoscope, Syringe, Microscope, Pill, Scissors, HeartPulse, Scan, FlaskConical, Bone, Activity } from 'lucide-react'

const G = '#1f7a3c'

const services = [
  { icon: Stethoscope, title: 'Clínica Médica', desc: 'Semiologia, exame físico, sinais vitais e protocolos de triagem para cães, gatos e animais exóticos.' },
  { icon: Syringe, title: 'Técnicas de Enfermagem', desc: 'Venopunção, aplicação de medicamentos, sondagem e curativos com supervisão especializada.' },
  { icon: Microscope, title: 'Laboratório Clínico', desc: 'Coleta e análise de amostras biológicas, hemograma, urinálise e parasitológico.' },
  { icon: Pill, title: 'Farmacologia Veterinária', desc: 'Principais fármacos, dosagens por espécie, vias de administração e interações medicamentosas.' },
  { icon: Scissors, title: 'Centro Cirúrgico', desc: 'Preparo do paciente, instrumental cirúrgico, paramentação e assepsia operatória.' },
  { icon: HeartPulse, title: 'Emergência e UTI', desc: 'RCP veterinária, suporte ventilatório e monitoramento em terapia intensiva animal.' },
  { icon: Scan, title: 'Diagnóstico por Imagem', desc: 'Preparo para radiografia e ultrassonografia — posicionamento, protocolo e segurança radiológica.' },
  { icon: FlaskConical, title: 'Nutrição e Dietética', desc: 'Cálculo de ração, dietas terapêuticas e suporte à alimentação enteral e parenteral.' },
  { icon: Bone, title: 'Ortopedia e Fisioterapia', desc: 'Imobilizações, bandagens, exercícios de reabilitação física e hidroterapia animal.' },
  { icon: Activity, title: 'Anestesiologia', desc: 'Monitoramento anestésico, controle de vias aéreas e suporte ao médico anestesista.' },
]

export default function Modules() {
  const { ref, inView } = useReveal()

  return (
    <section id="modulos" ref={ref} style={{ padding: '80px 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 56, maxWidth: 640, margin: '0 auto 56px' }}
        >
          <div style={{ width: 40, height: 3, background: G, borderRadius: 2, margin: '0 auto 16px' }} />
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 12, fontWeight: 700, color: G, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
            Grade Curricular
          </p>
          <h2 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', fontWeight: 600, color: '#111827', lineHeight: 1.15, marginBottom: 16 }}>
            O que você vai aprender
          </h2>
          <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.75 }}>
            Grade desenvolvida por veterinários que atuam no mercado, com foco
            em habilidades práticas que clínicas e hospitais realmente precisam.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.055, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ background: '#fff', borderRadius: 14, padding: 24, border: '1px solid #e5e7eb', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#e8f5ed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon size={22} style={{ color: G }} strokeWidth={1.8} />
              </div>
              <h3 style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1rem', fontWeight: 600, color: '#111827', marginBottom: 8 }}>
                {title}
              </h3>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.65 }}>{desc}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.62, duration: 0.6 }}
            style={{ borderRadius: 14, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: G }}
          >
            <div>
              <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1.15rem', fontWeight: 600, color: '#fff', marginBottom: 12 }}>
                Quer ver a grade completa?
              </p>
              <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: 24 }}>
                Fale com a equipe da Cemevet e receba o cronograma detalhado da sua turma.
              </p>
            </div>
            <a
              href="https://wa.me/5581999999999?text=Quero+a+grade+completa+do+curso"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '10px 18px', background: '#fff', borderRadius: 8, fontFamily: 'Nunito, sans-serif', fontWeight: 700, fontSize: '0.85rem', color: G, textDecoration: 'none' }}
            >
              Solicitar grade →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
