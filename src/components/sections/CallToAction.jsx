import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Clock, RefreshCw, Headphones } from 'lucide-react';
import NoiseOverlay from '../ui/NoiseOverlay';

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Si no te gusta el diseño, lo rehacemos",
    description: "Antes de programar, aprobás el diseño. Si no te convence, lo cambiamos sin costo extra.",
  },
  {
    icon: Clock,
    title: "Fecha de entrega pactada por escrito",
    description: "Definimos el plazo antes de empezar. Si nos atrasamos, te avisamos con tiempo y opciones.",
  },
  {
    icon: Headphones,
    title: "30 días de soporte post-entrega",
    description: "Ajustes menores, dudas técnicas y acompañamiento incluido después del lanzamiento.",
  },
  {
    icon: RefreshCw,
    title: "Respondemos en menos de 2 horas",
    description: "Nada de ghostear. Si nos escribís, te respondemos rápido. Siempre.",
  },
];

export default function CallToAction() {
  const waLink = `https://wa.me/5492646620024?text=${encodeURIComponent("Hola Riva, estoy listo para arrancar con mi proyecto. ¿Podemos hablar?")}`;

  return (
    <section className="relative py-24 px-6">
      <div className="w-full max-w-[1200px] mx-auto">

        {/* Garantías */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-bold tracking-widest text-primary uppercase mb-6">
              Sin riesgo
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold tracking-tighter text-white leading-[1.1]">
              Nuestras garantías. <span className="text-neutral-500">Cero letra chica.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-primary/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-all">
                  <g.icon size={18} />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{g.title}</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">{g.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="relative rounded-[2rem] bg-[#111] border border-white/10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
          <NoiseOverlay opacity={0.15} />

          <div className="relative z-10 py-20 px-6 md:px-12 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Turnos limitados por mes
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-white mb-6 max-w-3xl leading-[1.1]"
            >
              Cada mes que pasa sin una web profesional, <span className="text-neutral-500">perdés clientes.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-400 max-w-2xl mb-10 leading-relaxed"
            >
              Tomamos un máximo de 3 proyectos por mes para garantizar calidad.
              Escribinos hoy y te confirmamos disponibilidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-[#c2ed00] hover:shadow-[0_0_30px_rgba(208,255,0,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3"
              >
                <MessageCircle size={20} className="stroke-[2.5]" />
                Reservar mi lugar
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-xs text-neutral-600 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Consulta sin compromiso · Respuesta en menos de 2 horas
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
