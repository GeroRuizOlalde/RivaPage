import React from 'react';
import { MessageCircle } from 'lucide-react';
import NoiseOverlay from '../ui/NoiseOverlay'; // Importar Noise

export default function CallToAction() {
  // Mensaje ESPECÍFICO para esta sección (Intención alta)
  const waLink = `https://wa.me/5492646620024?text=${encodeURIComponent("Hola Riva, estoy listo para empezar mi proyecto web. ¿Podemos hablar?")}`;

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Eliminamos el motion.div para ahorrar cálculos de GPU al hacer scroll */}
      <div className="w-full max-w-[1200px] mx-auto relative rounded-[2.5rem] bg-[#111] border border-white/10 overflow-hidden">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* USO DEL COMPONENTE NOISE */}
        <NoiseOverlay opacity={0.2} />

        <div className="relative z-10 py-20 px-6 md:px-12 text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
               Empezá hoy mismo
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-white mb-6 max-w-4xl leading-[1.1]">
               Cada proyecto es una oportunidad <br className="hidden md:block" />
               <span className="text-neutral-500">única para crecer.</span>
            </h2>

            <p className="text-lg text-neutral-400 max-w-2xl mb-10 leading-relaxed">
               No dejes pasar otro mes con una web que no te representa. Hablemos de tus objetivos.
            </p>

            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-[#c2ed00] hover:shadow-[0_0_30px_rgba(208,255,0,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
               <MessageCircle size={20} className="stroke-[2.5]" />
               Comenzar Proyecto
            </a>
            
            <p className="mt-6 text-xs text-neutral-600">
               Respuesta promedio: Menos de 2 horas.
            </p>
        </div>
      </div>
    </section>
  );
}