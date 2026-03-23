import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Layout, Briefcase, Clapperboard, Code2, ShieldCheck, Eye } from 'lucide-react';
import NoiseOverlay from '../ui/NoiseOverlay'; 

// DATOS REALES & ALINEADOS
const realCases = [
  {
    client: "Excelsa Consultora",
    impact: "Generación de Leads", // Métrica cualitativa real
    desc: "Transformamos su web institucional en una herramienta de venta directa.",
    deliverables: "Arquitectura + Web Premium + Copywriting", // Entregable claro
    icon: Layout
  },
  {
    client: "GPI Consultores",
    impact: "Autoridad de Marca",
    desc: "Elevamos la percepción corporativa para el sector minero y de inversiones.",
    deliverables: "Rebranding + Web Executive + Narrativa",
    icon: Briefcase
  },
  {
    client: "Skin & Soul",
    impact: "Conversión en Redes",
    desc: "Estrategia de contenidos y campañas enfocadas en venta de productos.",
    deliverables: "Estrategia + Guiones + Diseño de Piezas",
    icon: Clapperboard
  }
];

// BENEFICIOS ALINEADOS A LOS CASOS (Consultoría, Retail, Servicios)
const benefits = [
  "Experiencia en Consultoría, Retail y Servicios Profesionales.", // Coherencia con casos
  "Enfoque 100% en conversión y retorno de inversión (ROI).",
  "Especialistas en escalar PyMES y marcas digitales.",
  "Stack tecnológico moderno: Sin deuda técnica."
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative bg-[#050505] py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* === COLUMNA 1: VISUAL + CASOS REALES === */}
          <div className="flex flex-col gap-6">
            
            {/* Imagen Principal (SEO Optimizado) */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[350px] rounded-[32px] overflow-hidden border border-white/10 bg-[#0a0a0a] group shadow-2xl"
            >
                <img 
                  src="/images/analytics.webp" 
                  alt="Dashboard de métricas de rendimiento web y conversión Riva Estudio" // SEO + Accesibilidad
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <NoiseOverlay opacity={0.3} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-bold text-primary mb-4">
                        <Code2 size={12} /> INGENIERÍA + ESTRATEGIA
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Resultados tangibles, <br/> no promesas vacías.</h3>
                </div>
            </motion.div>

            {/* LISTA DE CASOS DE ÉXITO */}
            <div className="flex flex-col gap-4">
                {realCases.map((c, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="group p-5 rounded-2xl bg-[#111] border border-white/5 hover:border-primary/20 transition-all duration-300 hover:bg-[#161616]"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-xl text-primary border border-white/5 group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                                <c.icon size={20} />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                                    <span className="text-xs font-bold text-white">{c.client}</span>
                                    <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-600"></span>
                                    {/* Métrica Soft destacada */}
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-wide bg-primary/10 px-2 py-0.5 rounded border border-primary/20">{c.impact}</span>
                                </div>
                                <p className="text-xs text-neutral-400 leading-relaxed mb-2">
                                    {c.desc}
                                </p>
                                {/* Línea de Entregables */}
                                <p className="text-[10px] text-neutral-500 font-medium border-t border-white/5 pt-2 flex items-center gap-1">
                                    <Check size={10} className="text-primary"/> {c.deliverables}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>

          {/* === COLUMNA 2: COPY DE AUTORIDAD & CIERRE === */}
          <div className="flex flex-col justify-center">
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-8"
            >
               <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-white/5 text-[11px] font-bold tracking-widest text-neutral-400 uppercase backdrop-blur-sm">
                  <ShieldCheck size={12} className="text-primary"/> Riva Method
               </span>
            </motion.div>

            <motion.h2 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-white leading-[1.1] mb-6"
            >
               Diseño que impacta. <br />
               <span className="text-neutral-500">Ingeniería que escala.</span>
            </motion.h2>

            <motion.p 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-lg"
            >
               Ya sea reestructurando la presencia digital de una consultora o creando campañas para retail, nuestro enfoque siempre es el mismo: 
               <strong> calidad técnica y foco en el usuario.</strong>
            </motion.p>

            <div className="space-y-4 mb-10">
               {benefits.map((item, index) => (
                  <motion.div 
                     key={index}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 + (index * 0.1) }}
                     className="flex items-start gap-3 group"
                  >
                     <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                        <Check size={12} className="text-primary group-hover:text-black stroke-[3] transition-colors duration-300" />
                     </div>
                     <span className="text-neutral-300 text-sm md:text-base font-medium group-hover:text-white transition-colors">
                        {item}
                     </span>
                  </motion.div>
               ))}
            </div>

            {/* DOBLE CTA: Venta Directa + Navegación Fría */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="flex flex-col sm:flex-row gap-4"
            >
               {/* CTA 1: Caliente (WhatsApp) */}
               <a 
                  href={`https://wa.me/5492646620024?text=${encodeURIComponent("Hola Riva, vi sus casos de éxito (Excelsa/GPI) y me gustaría saber cómo pueden ayudarme con mi marca.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-bold text-sm rounded-full hover:bg-primary hover:shadow-[0_0_20px_rgba(208,255,0,0.4)] transition-all flex items-center justify-center gap-2 group"
               >
                  Quiero resultados similares
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </a>

               {/* CTA 2: Frío (Ver Proceso) */}
               <a 
                  href="#proceso"
                  className="px-6 py-3 bg-transparent border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2"
               >
                  <Eye size={16} />
                  Ver cómo trabajamos
               </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}