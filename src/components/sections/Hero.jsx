import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const proofPoints = [
  { icon: TrendingUp, text: "+15 proyectos entregados" },
  { icon: Clock, text: "Respuesta en menos de 2hs" },
  { icon: ShieldCheck, text: "Garantía post-entrega incluida" },
];

export default function Hero() {
  const waHeroLink = `https://wa.me/5492646620024?text=${encodeURIComponent("Hola, necesito una web que me genere clientes. ¿Podemos hablar?")}`;

  return (
    <section className="relative w-full bg-[#050505] overflow-hidden">
      {/* Glow sutil */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-32 md:pt-40 lg:pt-44 pb-24">
        <div className="max-w-4xl">

          {/* Proof pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 pl-1.5 pr-4 py-1.5 border border-white/10 bg-white/5 backdrop-blur-md rounded-full mb-8"
          >
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-black bg-primary rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-black/30 animate-pulse"></span>
              Disponible
            </span>
            <span className="text-sm font-medium text-neutral-300 tracking-wide">Turnos abiertos · Marzo 2026</span>
          </motion.div>

          {/* Headline — problema del cliente */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-white leading-[1.08] mb-6"
          >
            Tu web no está generando <br className="hidden md:block" />
            clientes. <span className="text-primary">Nosotros la hacemos vender.</span>
          </motion.h1>

          {/* Subtexto — beneficio concreto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed mb-10"
          >
            Diseñamos y desarrollamos sitios web, landing pages y tiendas online
            con un solo objetivo: <strong className="text-white">que cada visita se convierta en una consulta real.</strong> Sin
            plantillas, sin promesas vacías. Solo resultados medibles.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-14"
          >
            <a
              href={waHeroLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black rounded-full font-bold text-lg hover:bg-[#c2ed00] hover:shadow-[0_0_25px_rgba(208,255,0,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 stroke-[2.5px]" />
              Quiero una web que venda
            </a>

            <a
              href="#casos"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-medium text-lg hover:bg-white/5 hover:border-white/20 transition-all duration-300"
            >
              Ver casos reales <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Proof points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            {proofPoints.map((point, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm text-neutral-500">
                <point.icon size={16} className="text-primary/70" />
                <span>{point.text}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
