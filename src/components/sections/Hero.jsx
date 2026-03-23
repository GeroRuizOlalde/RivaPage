import React from 'react';
import { motion } from 'framer-motion';
// Eliminamos la importación del AuroraBackground
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  // Mensaje optimizado para conversión
  const waHeroLink = `https://wa.me/5492646620024?text=${encodeURIComponent("Hola Riva! Vi su web y quiero cotizar un proyecto.")}`;

  return (
    // Reemplazamos AuroraBackground por una etiqueta estándar HTML
    <section className="relative w-full bg-[#050505] flex justify-start overflow-hidden">
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-36 lg:pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12 items-start">
          <div className="flex flex-col items-start text-left space-y-8 md:space-y-9">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 pl-1.5 pr-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md rounded-full"
            >
              <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-black bg-primary rounded-full shadow-[0_0_10px_rgba(208,255,0,0.4)]">NEW</span>
              <span className="text-sm font-medium text-neutral-300 tracking-wide">Agencia de diseño web · 2026</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-sans font-bold tracking-tighter text-white leading-[1.05]"
            >
              Agencia de diseño <br className="hidden lg:block" />
              web en <span className="text-neutral-500">Argentina.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-normal"
            >
              Desarrollamos sitios web, landing pages y tiendas online rápidas, profesionales y optimizadas para hacer crecer tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto pt-4"
            >
              {/* CTA PRIMARIO OPTIMIZADO */}
              <a
                href={waHeroLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black rounded-full font-bold text-lg hover:bg-[#c2ed00] hover:shadow-[0_0_25px_rgba(208,255,0,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 stroke-[2.5px]" />
                Escribinos por WhatsApp
              </a>
              
              <a
                href="#servicios"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-medium text-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                Ver más <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

          </div>
          <div className="hidden lg:block h-full min-h-[500px]"></div>
        </div>
      </div>
    </section>
  );
}