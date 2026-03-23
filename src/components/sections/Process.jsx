import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, CheckCircle2, Rocket } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Reunión + Brief",
    description: "Nos juntamos por Meet o WhatsApp. Entendemos tu negocio, definimos objetivos y alcance. Sin compromiso.",
    duration: "1 día",
    icon: MessageSquare,
  },
  {
    id: "02",
    title: "Diseño UI/UX",
    description: "Te mostramos cómo va a quedar tu web antes de programar una sola línea de código. Si no te gusta, lo cambiamos.",
    duration: "3–5 días",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Desarrollo",
    description: "Transformamos el diseño aprobado en código limpio. Velocidad, SEO técnico y animaciones fluidas.",
    duration: "5–15 días",
    icon: Code2,
  },
  {
    id: "04",
    title: "Revisión + Ajustes",
    description: "Te pasamos una versión de prueba. Ajustamos textos, imágenes y detalles según tu feedback. Sin costos extras.",
    duration: "2–3 días",
    icon: CheckCircle2,
  },
  {
    id: "05",
    title: "Lanzamiento",
    description: "Configuramos dominio, hosting y analytics. Tu web sale al mundo lista para recibir visitas y convertir.",
    duration: "1 día",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="proceso" className="relative bg-[#050505] py-24 lg:py-32 border-t border-white/5">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-bold tracking-widest text-primary uppercase mb-6"
          >
            Cómo trabajamos
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white leading-[1.1] mb-4"
          >
            De la idea al sitio online <span className="text-neutral-500">sin sorpresas.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Un proceso claro con plazos definidos. Sabés exactamente qué esperar en cada etapa.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Línea conectora (desktop) */}
          <div className="hidden md:block absolute top-[38px] left-[40px] right-[40px] h-[1px] bg-white/5 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center md:text-left"
              >
                {/* Número + icono */}
                <div className="flex flex-col items-center md:items-start mb-5">
                  <div className="w-[76px] h-[76px] rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col items-center justify-center mb-3 group-hover:border-primary/30 transition-colors">
                    <step.icon size={22} className="text-white group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                    PASO {step.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-white mb-2 font-sans">{step.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">{step.description}</p>
                <span className="text-[10px] text-neutral-600 font-medium">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline total */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-6 rounded-2xl bg-[#0a0a0a] border border-white/5"
        >
          <p className="text-neutral-400 text-sm">
            Tiempo total promedio: <strong className="text-white">7 a 25 días hábiles</strong> según el tipo de proyecto.
            <span className="text-neutral-600 block mt-1">Siempre con fecha de entrega pactada antes de empezar.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
