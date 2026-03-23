import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star, Search, Zap, LifeBuoy } from 'lucide-react';
import NoiseOverlay from '../ui/NoiseOverlay';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Benefits() {
  const tags = ["Diseño Web Premium", "Landing Pages", "Sitios Corporativos", "Tiendas Online", "SEO Optimizado", "Entrega Rápida", "Soporte Incluido", "UX/UI Moderno"];
  
  // Link con intención
  const waLink = `https://wa.me/5492646620024?text=${encodeURIComponent("Hola Riva, quiero conocer sus beneficios y diferenciales.")}`;

  return (
    <section id="beneficios" className="relative py-24 overflow-hidden bg-[#050505]">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col items-start mb-8 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(208,255,0,0.5)]"></span>
            <span className="text-[11px] font-bold tracking-widest text-primary uppercase">Beneficios</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white leading-[1.1]"
          >
            ¿Por qué elegir Riva Estudio?
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-3 mb-12 max-w-4xl"
        >
          {tags.map((tag, i) => (
            <span key={i} className="px-4 py-2 text-xs md:text-sm font-medium text-neutral-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-primary/30 transition-colors cursor-default">
              {tag}
            </span>
          ))}
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs md:text-sm font-bold text-black bg-primary rounded-full hover:bg-[#c2ed00] hover:shadow-[0_0_15px_rgba(208,255,0,0.4)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <MessageCircle size={16} className="stroke-[2.5]" />
            Escribinos por WhatsApp
          </a>
        </motion.div>

        {/* GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Card Principal */}
            <motion.div variants={cardVariants} className="group relative w-full h-[380px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/10 flex flex-row hover:border-primary/30 transition-colors duration-500">
              <div className="absolute inset-0 z-0">
                 <img src="/images/design.webp" alt="Web Design Premium" className="w-full h-full object-cover opacity-80 mix-blend-overlay" loading="lazy" />
                 <NoiseOverlay opacity={0.2} />
                 <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
              </div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-all duration-700 pointer-events-none z-10"></div>
              
              <div className="relative z-20 p-8 flex flex-col justify-center h-full max-w-lg">
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-white font-bold w-fit">
                    <Star size={10} className="text-primary fill-primary" /> TOP SELLER
                  </div>
                  <h3 className="text-3xl font-bold text-white font-sans tracking-tight mb-3">Diseño Premium</h3>
                  <p className="text-neutral-300 text-base leading-relaxed mb-6">
                    Creamos sitios web únicos, alineados a tu marca y pensados para convertir.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={waLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-primary text-black font-bold rounded-full text-xs hover:bg-[#c2ed00] transition-colors flex items-center gap-2 z-30">
                        <MessageCircle size={14} /> Escribinos
                    </a>
                  </div>
              </div>
            </motion.div>

            {/* Fila Inferior */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={cardVariants} className="group relative h-[220px] rounded-3xl bg-[#111] border border-white/10 overflow-hidden flex flex-col hover:border-primary/30 transition-colors duration-500">
                 <div className="h-full w-full absolute inset-0 z-0">
                     <img src="/images/analytics.webp" alt="SEO Analytics" className="w-full h-full object-cover opacity-50 mix-blend-overlay" loading="lazy" />
                     <NoiseOverlay opacity={0.2} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                 </div>
                 <div className="relative z-20 p-6 flex flex-col h-full justify-end">
                    <div className="mb-auto w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-white group-hover:bg-primary group-hover:text-black transition-all">
                        <Search size={18} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Optimización SEO</h3>
                    <p className="text-neutral-400 text-xs">Posicionamiento orgánico en Google.</p>
                 </div>
              </motion.div>

              <motion.div variants={cardVariants} className="group relative h-[220px] rounded-3xl bg-[#111] border border-white/10 overflow-hidden flex flex-col hover:border-primary/30 transition-colors duration-500">
                 <div className="absolute top-4 right-4 z-30 px-2 py-0.5 bg-primary text-black text-[9px] font-bold rounded-full">PREMIUM</div>
                 <div className="h-full w-full absolute inset-0 z-0">
                     <img src="/images/rocket.webp" alt="Conversion Focus" className="w-full h-full object-cover opacity-60 mix-blend-overlay" loading="lazy" />
                     <NoiseOverlay opacity={0.2} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                 </div>
                 <div className="relative z-20 p-6 flex flex-col h-full justify-end">
                    <h3 className="text-lg font-bold text-white mb-1">Foco en Resultados</h3>
                    <p className="text-neutral-400 text-xs">Embudos diseñados para vender.</p>
                 </div>
              </motion.div>
            </div>
          </div>

          {/* Columna Derecha (Benefits) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div variants={cardVariants} className="group relative h-[300px] rounded-3xl bg-[#111] border border-white/10 overflow-hidden flex flex-col hover:border-primary/30 transition-colors duration-500">
              <div className="h-[150px] w-full relative z-0">
                 <img src="/images/fast.webp" alt="Velocidad de Carga" className="w-full h-full object-cover" loading="lazy" />
                 <NoiseOverlay opacity={0.1} />
                 <div className="absolute bottom-3 left-4 px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[9px] font-bold rounded-full uppercase z-10">RÁPIDO</div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center bg-gradient-to-b from-[#111] to-black relative z-20 border-t border-white/5">
                <div className="mb-2 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-blue-400"><Zap size={16}/></div>
                <h3 className="text-xl font-bold text-white mb-2">Tiempos <br/> Optimizados</h3>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="group relative h-[300px] rounded-3xl bg-[#111] border border-white/10 overflow-hidden flex flex-col hover:border-primary/30 transition-colors duration-500">
              <div className="h-[150px] w-full relative z-0">
                 <img src="/images/support.webp" alt="Soporte Técnico" className="w-full h-full object-cover" loading="lazy" />
                 <NoiseOverlay opacity={0.1} />
                 <div className="absolute bottom-3 left-4 px-2 py-0.5 bg-primary/20 border border-primary/30 text-primary text-[9px] font-bold rounded-full uppercase z-10">INCLUIDO</div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center bg-gradient-to-b from-[#111] to-black relative z-20 border-t border-white/5">
                <div className="mb-2 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-primary"><LifeBuoy size={16}/></div>
                <h3 className="text-xl font-bold text-white mb-2">Soporte <br/> Continuo</h3>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}