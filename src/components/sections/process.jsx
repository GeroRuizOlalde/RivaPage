import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket, Settings, CheckCircle2 } from 'lucide-react';
import NoiseOverlay from '../ui/NoiseOverlay'; // Importar Noise

// ... (El array de steps queda igual, no hace falta tocarlo) ...
const steps = [
    { id: "01", title: "Reunión Inicial y Brief", description: "Nos reunimos para entender tu negocio. Definimos objetivos, público target y la personalidad de tu marca.", tags: ["Google Meet", "Estrategia", "Scope"], icon: MessageSquare },
    { id: "02", title: "Propuesta Visual (UI/UX)", description: "Diseñamos la estructura (wireframes) y la estética final. No programamos nada hasta que ames el diseño.", tags: ["Figma", "Prototipado", "Diseño"], icon: PenTool },
    { id: "03", title: "Desarrollo High-End", description: "Transformamos el diseño en código limpio. Animaciones fluidas, estructura SEO y velocidad extrema.", tags: ["React / Next.js", "Tailwind", "Clean Code"], icon: Code2 },
    { id: "04", title: "Feedback y Ajustes", description: "Te presentamos una versión de prueba. Pulimos detalles y ajustamos textos o imágenes según tu feedback.", tags: ["Revisión", "QA Testing", "Mobile Check"], icon: CheckCircle2 },
    { id: "05", title: "Entrega y Lanzamiento", description: "Configuramos el dominio, hosting y analytics. Tu web sale al mundo lista para convertir.", tags: ["Hosting", "SEO Técnico", "Lanzamiento"], icon: Rocket }
];

export default function Process() {
  return (
    <section id="proceso" className="relative bg-[#050505] py-24 lg:py-32">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-16 pt-4">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-white/5 backdrop-blur-sm mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.5)]"></span>
                    <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase">Nuestro Proceso</span>
                </motion.span>
                
                {/* TÍTULO CORREGIDO: Más realista y coherente con FAQ */}
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white leading-[1.1]"
                >
                    De la idea al sitio web <br/> 
                    <span className="text-neutral-500">con plazos claros.</span>
                </motion.h2>
                
                <motion.p 
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                    className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-md"
                >
                    Un sistema de trabajo probado para cumplir fechas sin sorpresas.
                </motion.p>
            </div>

            <div className="flex flex-col gap-6 pb-24"> 
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.1 }}
                        className="group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300 min-h-[200px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                        <div className="relative z-10 flex gap-6">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 text-white group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                                    <step.icon size={24} />
                                </div>
                                <div className="h-full w-[1px] bg-white/5 my-2 group-hover:bg-primary/20 transition-colors"></div>
                            </div>
                            <div className="flex-1 pb-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">PASO {step.id}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-sans">{step.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4">{step.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {step.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-medium text-neutral-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="hidden lg:block w-1/2 sticky top-32 h-[600px]">
             <div className="w-full h-full rounded-[32px] border border-white/10 bg-[#0a0a0a] relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0">
                    <img src="/images/workflow.webp" alt="Workflow" className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-[#050505]/60 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-neutral-900/50 to-primary/10"></div>
                    {/* USO DEL COMPONENTE NOISE */}
                    <NoiseOverlay opacity={0.2} />
                </div>
                <div className="absolute bottom-8 right-8">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2 shadow-lg">
                        <Settings size={12} className="text-primary" /> Workflow
                    </span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}