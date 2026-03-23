import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, ShoppingCart, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom'; // 👈 IMPORTANTE: Para navegar sin recargar

const services = [
  {
    icon: Globe,
    title: "Sitios Web Corporativos",
    description: "Tu carta de presentación digital. Diseñamos sitios institucionales que transmiten autoridad y confianza.",
    tags: ["Wordpress", "React", "Diseño UI/UX"],
    link: "/servicios/corporativo" // 👈 Ruta interna
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Tiendas",
    description: "Transformamos visitantes en compradores. Tiendas online optimizadas para la conversión.",
    tags: ["Shopify", "WooCommerce", "Pagos Locales"],
    link: "/servicios/ecommerce"
  },
  {
    icon: Smartphone,
    title: "Landing Pages de Venta",
    description: "Páginas diseñadas con un solo objetivo: vender. Estructuras persuasivas y velocidad extrema.",
    tags: ["Alta Conversión", "A/B Testing", "Pixel de Meta"],
    link: "/servicios/landing-pages"
  },
  {
    icon: Code,
    title: "Desarrollo a Medida",
    description: "Soluciones web complejas, plataformas SaaS y herramientas internas para tu empresa.",
    tags: ["React / Node.js", "APIs REST", "Bases de Datos"],
    link: "https://wa.me/5492646620024?text=Hola,%20necesito%20un%20desarrollo%20a%20medida." // 👈 Este sigue yendo a WhatsApp
  }
];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-[#050505] py-24 lg:py-32">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* === COLUMNA IZQUIERDA (STICKY) === */}
          <div className="hidden lg:block w-1/2 sticky top-32 h-[600px]">
            <div className="w-full h-full rounded-[32px] border border-white/10 bg-[#0a0a0a] relative overflow-hidden shadow-2xl group">
                <div className="absolute inset-0">
                    <img 
                      src="/images/hero.webp" 
                      alt="Desarrollo Web Servicios" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#050505]/50 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-transparent to-primary/5"></div>
                </div>

                <div className="absolute bottom-8 left-8 z-20">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2 shadow-lg">
                        <Globe size={12} className="text-primary" /> Showcase
                    </span>
                </div>
            </div>
          </div>

          {/* === COLUMNA DERECHA === */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            <div className="mb-16">
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-white/5 backdrop-blur-sm mb-6"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.5)]"></span>
                    <span className="text-[11px] font-bold tracking-widest text-neutral-400 uppercase">Servicios</span>
                </motion.span>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-sans font-bold tracking-tighter text-white leading-[1.1]"
                >
                    Soluciones digitales <br />
                    <span className="text-neutral-500">a medida de tu negocio.</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-lg text-neutral-400 leading-relaxed max-w-md"
                >
                    Creamos ecosistemas digitales pensados para escalar y diferenciarte de la competencia.
                </motion.p>
            </div>

            <div className="flex flex-col gap-6 pb-24"> 
                {services.map((service, index) => {
                    // Lógica: Si el link empieza con "/", es interno (Link). Si no, es externo (a).
                    const isInternal = service.link.startsWith('/');
                    
                    const CardContent = (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 text-white group-hover:text-primary">
                                    <service.icon size={24} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-white font-sans">{service.title}</h3>
                                        <ArrowUpRight className="w-5 h-5 text-neutral-600 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">{service.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-medium text-neutral-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
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
                                <Link 
                                    to={service.link}
                                    className="block group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-[#0f0f0f]"
                                >
                                    {CardContent}
                                </Link>
                            ) : (
                                <a 
                                    href={service.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-[#0f0f0f]"
                                >
                                    {CardContent}
                                </a>
                            )}
                        </motion.div>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}