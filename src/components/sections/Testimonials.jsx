import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Excelsa Consultora",
    role: "Consultoría Empresarial",
    quote: "Antes nuestra web era solo una tarjeta digital. Riva la transformó en una herramienta que nos genera consultas reales todas las semanas.",
    stars: 5,
  },
  {
    name: "GPI Consultores",
    role: "Sector Minero e Inversiones",
    quote: "La web que nos hicieron la usamos activamente en reuniones con inversores. Transmite exactamente la seriedad que nuestro rubro necesita.",
    stars: 5,
  },
  {
    name: "Skin & Soul",
    role: "Belleza y Cosmética",
    quote: "Por fin alguien que entiende que el diseño tiene que vender, no solo ser lindo. Las campañas que armamos juntos dieron resultados desde el primer mes.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#050505] py-24 border-t border-white/5">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-bold tracking-widest text-primary uppercase mb-6"
          >
            Lo que dicen nuestros clientes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white leading-[1.1]"
          >
            No lo decimos nosotros. <span className="text-neutral-500">Lo dicen ellos.</span>
          </motion.h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/15 transition-all flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-primary/30 mb-4 rotate-180" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-8 flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-[11px] text-neutral-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
