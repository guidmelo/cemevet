import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'
import { Stethoscope, Syringe, Microscope, Pill, Scissors, HeartPulse, Scan, FlaskConical, Bone, Activity } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Clínica Médica',
    desc: 'Semiologia, exame físico, sinais vitais e protocolos de triagem para cães, gatos e animais exóticos.',
  },
  {
    icon: Syringe,
    title: 'Técnicas de Enfermagem',
    desc: 'Venopunção, aplicação de medicamentos, sondagem e curativos com supervisão especializada.',
  },
  {
    icon: Microscope,
    title: 'Laboratório Clínico',
    desc: 'Coleta e análise de amostras biológicas, hemograma, urinálise e parasitológico.',
  },
  {
    icon: Pill,
    title: 'Farmacologia Veterinária',
    desc: 'Principais fármacos, dosagens por espécie, vias de administração e interações medicamentosas.',
  },
  {
    icon: Scissors,
    title: 'Centro Cirúrgico',
    desc: 'Preparo do paciente, instrumental cirúrgico, paramentação e assepsia operatória.',
  },
  {
    icon: HeartPulse,
    title: 'Emergência e UTI',
    desc: 'RCP veterinária, suporte ventilatório e monitoramento em terapia intensiva animal.',
  },
  {
    icon: Scan,
    title: 'Diagnóstico por Imagem',
    desc: 'Preparo para radiografia e ultrassonografia — posicionamento, protocolo e segurança radiológica.',
  },
  {
    icon: FlaskConical,
    title: 'Nutrição e Dietética',
    desc: 'Cálculo de ração, dietas terapêuticas e suporte à alimentação enteral e parenteral.',
  },
  {
    icon: Bone,
    title: 'Ortopedia e Fisioterapia',
    desc: 'Imobilizações, bandagens, exercícios de reabilitação física e hidroterapia animal.',
  },
  {
    icon: Activity,
    title: 'Anestesiologia',
    desc: 'Monitoramento anestésico, controle de vias aéreas e suporte ao médico anestesista.',
  },
]

export default function Modules() {
  const { ref, inView } = useReveal()

  return (
    <section id="modulos" ref={ref} className="py-20 md:py-24 px-5 md:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <div className="section-divider mx-auto" />
          <p className="section-label mb-3">Grade Curricular</p>
          <h2 className="section-heading mb-4">
            O que você vai aprender
          </h2>
          <p className="body-copy">
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
              transition={{ delay: i * 0.055, duration: 0.6, ease: [0.25,0.46,0.45,0.94] }}
              className="bg-white rounded-xl p-6 card-lift border border-line"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#e8f5ed' }}
              >
                <Icon size={22} style={{ color: '#1f7a3c' }} strokeWidth={1.8} />
              </div>
              <h3
                className="font-bold text-ink text-[1rem] mb-2"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                {title}
              </h3>
              <p className="body-copy text-[0.85rem] leading-relaxed">{desc}</p>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.62, duration: 0.6 }}
            className="rounded-xl p-6 flex flex-col justify-between"
            style={{ background: '#1f7a3c' }}
          >
            <div>
              <p
                className="text-white font-bold text-[1.15rem] mb-3"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                Quer ver a grade completa?
              </p>
              <p className="text-white/70 text-[0.85rem] leading-relaxed mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Fale com a equipe da Cemevet e receba o cronograma detalhado da sua turma.
              </p>
            </div>
            <a
              href="https://wa.me/5581999999999?text=Quero+a+grade+completa+do+curso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg font-bold text-brand text-[0.85rem] hover:bg-brand-pale transition-colors"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Solicitar grade →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
