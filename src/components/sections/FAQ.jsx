import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Diferencia entre Landing Page y Sitio Corporativo?",
    answer: "Una Landing Page es una página única diseñada para convertir (vender o captar leads). Un Sitio Corporativo tiene varias secciones (Inicio, Nosotros, Servicios) y construye autoridad de marca a largo plazo."
  },
  {
    question: "¿Cuáles son los tiempos de entrega?",
    // UNIFICACIÓN DE MENSAJE: Tiempos coherentes
    answer: "Para Landing Pages, el tiempo promedio es de 7 a 10 días hábiles. Para Sitios Corporativos completos, trabajamos en un rango de 3 a 5 semanas, dependiendo de la complejidad y el contenido."
  },
  {
    question: "¿Qué necesito para empezar?",
    answer: "Principalmente tu visión. Te guiaremos con un formulario simple. Si tenés logo y textos, genial. Si no, podemos ayudarte a estructurar el contenido."
  },
  {
    question: "¿El sitio será autoadministrable?",
    answer: "Sí. Entregamos un panel de control intuitivo y tutoriales en video para que puedas actualizar textos, imágenes y precios sin depender de un programador."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);
  
  // Link corregido y específico
  const waLink = `https://wa.me/5492646620024?text=${encodeURIComponent("Hola, me quedó una duda sobre el servicio web...")}`;

  return (
    <section id="faq" className="relative bg-[#050505] py-24">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-4 sticky top-32">
            {/* ... (Título y textos igual que antes) ... */}
            <motion.h2 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-sans font-bold tracking-tighter text-white mb-4"
            >
               Resolvemos tus dudas <br />
               <span className="text-neutral-500">antes de empezar.</span>
            </motion.h2>
            
            {/* CTA CORREGIDO */}
            <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 hidden lg:inline-flex items-center gap-2 text-primary font-bold text-sm border-b border-primary/20 hover:border-primary pb-0.5 transition-colors"
            >
               <MessageCircle size={16} />
               ¿Tenés otra duda? Escribinos
            </a>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === index ? 'bg-[#0a0a0a] border-primary/30' : 'bg-[#0a0a0a]/50 border-white/5 hover:border-white/10'}`}
              >
                <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className={`font-bold text-base md:text-lg transition-colors ${activeIndex === index ? 'text-white' : 'text-neutral-300'}`}>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-primary text-black' : 'bg-white/5 text-white'}`}>
                    {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}