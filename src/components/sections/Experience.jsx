import { motion } from 'framer-motion';
import { ArrowUpRight, Layout, Briefcase, Clapperboard } from 'lucide-react';

const cases = [
  {
    client: "Excelsa Consultora",
    industry: "Consultoría empresarial",
    icon: Layout,
    challenge: "Tenían una web institucional que no generaba ninguna consulta. Los clientes llegaban por boca en boca solamente.",
    solution: "Rediseñamos la web con foco en conversión: estructura persuasiva, formularios estratégicos y copywriting orientado a acción.",
    results: [
      "Web funcionando como herramienta de venta directa",
      "Primeras consultas orgánicas desde Google",
      "Percepción profesional elevada frente a clientes corporativos",
    ],
    deliverables: "Arquitectura + Web Premium + Copywriting",
  },
  {
    client: "GPI Consultores",
    industry: "Minería e inversiones",
    icon: Briefcase,
    challenge: "Necesitaban transmitir autoridad y seriedad para captar inversores internacionales. Su imagen digital no estaba a la altura de su operación.",
    solution: "Creamos una web executive con narrativa corporativa sólida, rebranding completo y una estructura pensada para inversores.",
    results: [
      "Autoridad de marca elevada al nivel de su competencia internacional",
      "Web utilizada activamente en reuniones con inversores",
      "Rebranding alineado con el sector minero premium",
    ],
    deliverables: "Rebranding + Web Executive + Narrativa corporativa",
  },
  {
    client: "Skin & Soul",
    industry: "Belleza y cosmética",
    icon: Clapperboard,
    challenge: "Invertían en redes sociales sin estrategia clara. El contenido no convertía y las campañas no tenían foco.",
    solution: "Diseñamos una estrategia de contenidos con guiones, piezas gráficas y campañas enfocadas exclusivamente en venta de productos.",
    results: [
      "Campañas con foco 100% en conversión",
      "Guiones de contenido con estructura de venta",
      "Piezas gráficas profesionales para redes",
    ],
    deliverables: "Estrategia + Guiones + Diseño de piezas",
  },
];

export default function Experience() {
  return (
    <section id="casos" className="relative bg-[#050505] py-24 lg:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-bold tracking-widest text-primary uppercase mb-6"
          >
            Casos reales
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white leading-[1.1] mb-4"
          >
            Resultados reales, <span className="text-neutral-500">no promesas.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Estos son proyectos que entregamos. Con nombres reales, desafíos concretos y resultados que podés verificar.
          </motion.p>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group p-8 md:p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/15 transition-all"
            >
              {/* Top */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <c.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-sans">{c.client}</h3>
                    <span className="text-xs text-neutral-500">{c.industry}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-full border border-white/5 w-fit">
                  {c.deliverables}
                </span>
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Desafío */}
                <div>
                  <span className="text-[10px] font-bold text-red-400/80 uppercase tracking-wider block mb-2">Desafío</span>
                  <p className="text-sm text-neutral-400 leading-relaxed">{c.challenge}</p>
                </div>

                {/* Solución */}
                <div>
                  <span className="text-[10px] font-bold text-blue-400/80 uppercase tracking-wider block mb-2">Qué hicimos</span>
                  <p className="text-sm text-neutral-400 leading-relaxed">{c.solution}</p>
                </div>

                {/* Resultados */}
                <div>
                  <span className="text-[10px] font-bold text-primary/80 uppercase tracking-wider block mb-2">Resultados</span>
                  <ul className="space-y-2">
                    {c.results.map((result, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={`https://wa.me/5492646620024?text=${encodeURIComponent("Hola, vi los casos de Excelsa y GPI. Quiero resultados similares para mi negocio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary hover:shadow-[0_0_20px_rgba(208,255,0,0.4)] transition-all"
          >
            Quiero resultados similares <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
