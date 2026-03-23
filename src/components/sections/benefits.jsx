import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Clock, Eye, ArrowRight } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: "Tenés web pero no genera consultas",
    description: "Los visitantes llegan, miran y se van. Tu sitio no los guía hacia contactarte. No tiene estructura de venta, solo información suelta.",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    icon: Eye,
    title: "Tu competencia te está ganando online",
    description: "Mientras vos dudás, tus competidores ya están captando a tus potenciales clientes con sitios profesionales y campañas activas.",
    color: "text-orange-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Gastás en publicidad pero no convertís",
    description: "Pagás Google Ads o Meta Ads, pero la gente cae en una web lenta, confusa o que no transmite confianza. Cada clic sin conversión es plata perdida.",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: Clock,
    title: "Te prometieron una web y nunca la entregaron",
    description: "Ya pasaste por freelancers que desaparecieron o agencias que tardaron meses. Necesitás alguien que cumpla plazos y responda mensajes.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
];

export default function Benefits() {
  return (
    <section id="problemas" className="relative py-24 bg-[#050505]">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-[11px] font-bold tracking-widest text-red-400 uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
            ¿Te sentís identificado?
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white leading-[1.1] max-w-3xl mx-auto">
            Si tu web no te está trayendo clientes, <span className="text-neutral-500">el problema no sos vos.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-8 rounded-2xl bg-[#0a0a0a] border ${problem.borderColor} hover:bg-[#0f0f0f] transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${problem.bgColor} flex items-center justify-center mb-5`}>
                <problem.icon size={22} className={problem.color} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-sans">{problem.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-neutral-400 text-lg mb-6">
            Si alguno de estos es tu caso, <strong className="text-white">podemos ayudarte.</strong>
          </p>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            Ver cómo lo resolvemos <ArrowRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
