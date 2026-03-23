import { motion } from 'framer-motion';
import { ArrowUpRight, Smartphone, Globe, ShoppingCart, Code, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Smartphone,
    title: "Landing Page de Venta",
    ideal: "Ideal para empezar",
    description: "Una sola página con un solo objetivo: que te contacten. Estructura persuasiva, velocidad extrema y optimizada para campañas de Ads.",
    results: "Nuestros clientes reportan hasta 3x más consultas después de lanzar su landing.",
    includes: ["Diseño UX/UI a medida", "Copywriting persuasivo", "Integración WhatsApp + formularios", "Optimización para Google Ads / Meta"],
    timeline: "7 a 10 días hábiles",
    featured: true,
    link: "/servicios/landing-pages",
  },
  {
    icon: Globe,
    title: "Sitio Web Corporativo",
    ideal: "Para empresas establecidas",
    description: "Tu oficina digital completa. Múltiples secciones, blog, casos de éxito y todo lo que necesitás para transmitir autoridad y captar clientes grandes.",
    results: "GPI Consultores elevó su percepción corporativa y empezó a recibir consultas de inversores.",
    includes: ["Arquitectura de información estratégica", "Secciones: Inicio, Servicios, Nosotros, Blog", "SEO técnico incluido", "Panel de administración simple"],
    timeline: "3 a 5 semanas",
    featured: false,
    link: "/servicios/corporativo",
  },
  {
    icon: ShoppingCart,
    title: "Tienda Online / E-commerce",
    ideal: "Para vender productos 24/7",
    description: "Tu tienda abierta siempre. Gestión de stock, pagos con Mercado Pago y tarjetas, sin comisiones por venta. Vos controlás todo.",
    results: "Sin comisiones por transacción. Tu tienda, tus reglas, tus márgenes.",
    includes: ["Carrito optimizado para conversión", "Mercado Pago + tarjetas integrado", "Panel de gestión de productos", "SEO para fichas de producto"],
    timeline: "4 a 6 semanas",
    featured: false,
    link: "/servicios/ecommerce",
  },
  {
    icon: Code,
    title: "Desarrollo a Medida",
    ideal: "Para necesidades complejas",
    description: "Plataformas SaaS, herramientas internas, APIs y sistemas. Cuando tu negocio necesita algo que no existe en el mercado.",
    results: "Rivapp, nuestra plataforma propia para gastronomía, nació de esta línea de servicio.",
    includes: ["React / Next.js / Node.js", "APIs REST y bases de datos", "Arquitectura escalable", "Documentación técnica"],
    timeline: "A definir según alcance",
    featured: false,
    link: `https://wa.me/5492646620024?text=${encodeURIComponent("Hola, necesito un desarrollo a medida para mi negocio.")}`,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-[#050505] py-24 lg:py-32">
      <div className="w-full max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-bold tracking-widest text-primary uppercase mb-6"
          >
            Servicios
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white leading-[1.1] mb-4"
          >
            ¿Qué necesita tu negocio <span className="text-neutral-500">hoy?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Cada proyecto es distinto. Elegí el servicio que mejor se adapte a tu situación actual y presupuesto.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const isInternal = service.link.startsWith('/');

            const cardContent = (
              <div className={`group relative p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col ${
                service.featured
                  ? 'bg-[#0a0a0a] border-primary/30 hover:border-primary/50'
                  : 'bg-[#0a0a0a] border-white/10 hover:border-white/20'
              }`}>
                {service.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                    <Star size={10} className="text-primary fill-primary" />
                    <span className="text-[10px] font-bold text-primary">MÁS ELEGIDO</span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:text-primary transition-colors text-white">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">{service.ideal}</span>
                    <h3 className="text-xl font-bold text-white font-sans">{service.title}</h3>
                  </div>
                </div>

                <p className="text-neutral-400 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Resultado real */}
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mb-6">
                  <p className="text-xs text-primary/80 leading-relaxed">
                    <strong className="text-primary">Resultado:</strong> {service.results}
                  </p>
                </div>

                {/* Qué incluye */}
                <div className="mb-6 flex-1">
                  <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider block mb-3">Incluye</span>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <span className="text-xs text-neutral-500">
                    Plazo: <strong className="text-neutral-300">{service.timeline}</strong>
                  </span>
                  <span className="flex items-center gap-1 text-sm font-bold text-white group-hover:text-primary transition-colors">
                    Ver más <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                {isInternal ? (
                  <Link to={service.link} className="block h-full">{cardContent}</Link>
                ) : (
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="block h-full">{cardContent}</a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-neutral-500 text-sm mb-4">¿No sabés cuál elegir?</p>
          <Link
            to="/calculadora"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white/10 hover:border-primary/30 transition-all"
          >
            Usá nuestro cotizador online <ArrowUpRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
