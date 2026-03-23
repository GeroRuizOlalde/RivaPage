import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuánto sale una web?",
    answer: "Depende del tipo de proyecto. Una Landing Page arranca desde USD 300, un sitio corporativo desde USD 600, y un e-commerce desde USD 900. Estos son precios de referencia — el valor final depende de la complejidad, cantidad de secciones y si necesitás branding adicional. Podés usar nuestro cotizador online o escribirnos para una cotización exacta sin compromiso."
  },
  {
    question: "¿Cuánto tardan en entregar?",
    answer: "Landing Pages: 7 a 10 días hábiles. Sitios corporativos: 3 a 5 semanas. E-commerce: 4 a 6 semanas. Siempre pactamos fecha de entrega antes de empezar, por escrito. Si la incumplimos, te avisamos con tiempo y te damos opciones concretas."
  },
  {
    question: "Ya me fallaron antes con otra agencia. ¿Cómo sé que ustedes van a cumplir?",
    answer: "Lo entendemos. Por eso trabajamos con entregas parciales: primero ves el diseño, lo aprobás, y recién ahí desarrollamos. Si en algún momento no te gusta lo que ves, paramos y ajustamos. Además, respondemos mensajes en menos de 2 horas y tenemos casos reales con nombres de clientes que podés verificar."
  },
  {
    question: "¿Necesito tener logo, textos y fotos listas?",
    answer: "No. Si tenés material, lo usamos. Si no, te ayudamos a armar todo: desde el logo hasta los textos de cada sección. El branding tiene un costo adicional que te cotizamos por separado, pero no es obligatorio para empezar."
  },
  {
    question: "¿Puedo editar la web después yo solo?",
    answer: "Sí. Entregamos un panel de administración simple y tutoriales para que puedas cambiar textos, imágenes y precios sin saber programar. Si en algún momento necesitás un cambio más complejo, estamos disponibles."
  },
  {
    question: "¿Incluye hosting y dominio?",
    answer: "El hosting y dominio se contratan por separado, pero nosotros nos encargamos de toda la configuración técnica. Te recomendamos las mejores opciones según tu presupuesto y nos aseguramos de que todo funcione correctamente antes de la entrega."
  },
  {
    question: "¿Qué pasa después de la entrega? ¿Me dejan solo?",
    answer: "No. Incluimos 30 días de soporte post-entrega para ajustes menores y consultas técnicas. Después de ese período, podés contratar un plan de mantenimiento mensual o consultarnos puntualmente cuando lo necesites."
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(activeIndex === index ? null : index);

  const waLink = `https://wa.me/5492646620024?text=${encodeURIComponent("Hola, tengo una duda antes de contratar...")}`;

  return (
    <section id="faq" className="relative bg-[#050505] py-24 border-t border-white/5">
      <div className="w-full max-w-[900px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-bold tracking-widest text-primary uppercase mb-6"
          >
            Preguntas frecuentes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold tracking-tighter text-white leading-[1.1]"
          >
            Todo lo que necesitás saber <span className="text-neutral-500">antes de decidir.</span>
          </motion.h2>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-3">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                activeIndex === index
                  ? 'bg-[#0a0a0a] border-primary/30'
                  : 'bg-[#0a0a0a]/50 border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-bold text-sm md:text-base transition-colors pr-4 ${
                  activeIndex === index ? 'text-white' : 'text-neutral-300'
                }`}>
                  {item.question}
                </span>
                <div className={`p-1.5 rounded-full transition-colors shrink-0 ${
                  activeIndex === index ? 'bg-primary text-black' : 'bg-white/5 text-white'
                }`}>
                  {activeIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-5 pb-5 pt-0">
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

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
          >
            <MessageCircle size={16} />
            ¿Tenés otra duda? Escribinos y respondemos en menos de 2 horas
          </a>
        </div>

      </div>
    </section>
  );
}
