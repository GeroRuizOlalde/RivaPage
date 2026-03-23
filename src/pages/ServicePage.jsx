import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import NoiseOverlay from '../components/ui/NoiseOverlay';
import { AuroraBackground } from '../components/ui/AuroraBackground';

// CONFIGURACIÓN DE CONTENIDO POR SERVICIO
const serviceData = {
  landing: {
    badge: "Alta Conversión",
    title: "Landing Pages que venden",
    subtitle: "Diseñadas psicológicamente para convertir visitantes en clientes.",
    description: "No es solo diseño bonito. Usamos estructuras de copywriting persuasivo, velocidad de carga instantánea y optimización móvil para maximizar tu ROI en campañas de Ads.",
    benefits: [
      "Estructura AIDA (Atención, Interés, Deseo, Acción).",
      "Carga en < 1 segundo (Google PageSpeed 90+).",
      "Integración con WhatsApp y CRM.",
      "Ideal para lanzamientos y campañas de Meta/Google."
    ],
    ctaText: "Cotizar Landing Page",
    waMessage: "Hola Riva, quiero cotizar una Landing Page de alta conversión."
  },
  ecommerce: {
    badge: "Venta Online",
    title: "E-commerce Scalable",
    subtitle: "Tu tienda abierta 24/7 con gestión de stock y pagos locales.",
    description: "Desarrollamos tiendas online robustas. Olvidate de las comisiones por venta de otras plataformas. Tené el control total de tu negocio, clientes y facturación.",
    benefits: [
      "Sin comisiones por transacción.",
      "Integración Mercado Pago / Tarjetas.",
      "Panel de gestión de productos fácil.",
      "Optimización SEO para fichas de producto."
    ],
    ctaText: "Cotizar Tienda Online",
    waMessage: "Hola Riva, quiero cotizar un E-commerce para mi negocio."
  },
  corporate: {
    badge: "Imagen Corporativa",
    title: "Sitios Institucionales",
    subtitle: "Autoridad y confianza para empresas que buscan crecer.",
    description: "Tu web es tu oficina digital. Creamos sitios que transmiten solidez, cuentan tu historia y generan confianza inmediata en inversores y clientes grandes.",
    benefits: [
      "Diseño UX/UI Premium a medida.",
      "Arquitectura de información estratégica.",
      "Secciones de Blog, Equipo y Casos de Éxito.",
      "Seguridad y mantenimiento técnico incluido."
    ],
    ctaText: "Agendar Reunión",
    waMessage: "Hola Riva, necesito un sitio web corporativo para mi empresa."
  }
};

export default function ServicePage({ type }) {
  const data = serviceData[type] || serviceData.landing;

  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <AuroraBackground className="absolute inset-0 z-0" />
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              {data.badge}
            </span>
            
            <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-white mb-6 leading-[1.1]">
              {data.title.split(" ").map((word, i) => (
                i === 1 ? <span key={i} className="text-neutral-500"> {word} </span> : word + " "
              ))}
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-8 font-medium">
              {data.subtitle}
            </p>
            
            <p className="text-base text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`https://wa.me/5492646620024?text=${encodeURIComponent(data.waMessage)}`}
                target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-[#c2ed00] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(208,255,0,0.3)]"
              >
                <MessageCircle size={20} />
                {data.ctaText}
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="py-24 bg-[#0a0a0a] relative border-t border-white/5">
        <NoiseOverlay opacity={0.2} />
        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">¿Qué incluye este servicio?</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {data.benefits.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                  <Check size={18} strokeWidth={3} />
                </div>
                <p className="text-neutral-300 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}