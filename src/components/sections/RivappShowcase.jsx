import { motion } from 'framer-motion';
import { Smartphone, ShoppingBag, Zap, ArrowRight, BarChart3, MoreHorizontal } from 'lucide-react';

const features = [
  { icon: Smartphone, title: "Mobile First", desc: "Tus clientes piden desde el celular en segundos." },
  { icon: ShoppingBag, title: "Pedidos por WhatsApp", desc: "Carrito integrado que cierra la venta donde ya hablás." },
  { icon: BarChart3, title: "Panel de Control", desc: "Métricas, stock y pedidos en tiempo real. Sin Excel." },
  { icon: Zap, title: "Carga Instantánea", desc: "Tecnología Next.js. Tu cliente no espera, compra." },
];

const DashboardMockupUI = () => (
  <div className="w-full h-full bg-[#0a0a0a] flex flex-col relative select-none">
    <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-[#111]">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
      </div>
      <div className="w-24 h-2 rounded-full bg-white/5"></div>
    </div>
    <div className="flex flex-1 overflow-hidden">
      <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-[#0f0f0f]">
        <div className="w-8 h-8 rounded-lg bg-primary text-black flex items-center justify-center font-bold text-xs">R</div>
        <div className="w-8 h-8 rounded-lg bg-white/5"></div>
        <div className="w-8 h-8 rounded-lg bg-white/5"></div>
      </div>
      <div className="flex-1 p-6 space-y-6 bg-[#0a0a0a]">
        <div className="flex justify-between items-end">
          <div>
            <div className="w-32 h-3 bg-white/10 rounded mb-2"></div>
            <div className="w-48 h-6 bg-white/20 rounded"></div>
          </div>
          <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold">ONLINE</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#151515] p-4 rounded-2xl border border-white/5">
            <div className="flex justify-between mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><BarChart3 size={14}/></div>
              <MoreHorizontal size={14} className="text-gray-600"/>
            </div>
            <div className="text-2xl font-bold text-white mb-1">$124k</div>
            <div className="text-[10px] text-gray-500">Ventas hoy</div>
          </div>
          <div className="bg-[#151515] p-4 rounded-2xl border border-white/5">
            <div className="flex justify-between mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><ShoppingBag size={14}/></div>
              <MoreHorizontal size={14} className="text-gray-600"/>
            </div>
            <div className="text-2xl font-bold text-white mb-1">18</div>
            <div className="text-[10px] text-gray-500">Pedidos activos</div>
          </div>
        </div>
        <div className="bg-[#151515] p-5 rounded-2xl border border-white/5 h-32 flex items-end justify-between gap-2">
          {[35, 55, 40, 70, 50, 90, 60].map((h, i) => (
            <div key={i} className="w-full bg-white/5 rounded-t-sm relative group overflow-hidden" style={{height: `${h}%`}}>
              <div className="absolute inset-0 bg-primary/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function RivappShowcase() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-bold tracking-widest text-primary uppercase mb-6">
                Producto propio
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tighter text-white mb-6 leading-tight">
                Rivapp: vendé más <br />
                <span className="text-neutral-500">sin pagar comisiones.</span>
              </h2>
              <p className="text-lg text-neutral-400 mb-10 max-w-lg">
                Nuestra plataforma para locales gastronómicos y de servicios. Menú digital, pedidos por WhatsApp, panel de control y cero comisiones por venta. La hicimos nosotros, con el mismo código que usamos para tu web.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shrink-0">
                      <f.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-0.5">{f.title}</h4>
                      <p className="text-[11px] text-neutral-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://rivapp.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-[#c2ed00] transition-all text-center flex items-center justify-center gap-2"
                >
                  Conocer Rivapp <ArrowRight size={18} />
                </a>
                <a
                  href={`https://wa.me/5492646620024?text=${encodeURIComponent("Hola, me interesa Rivapp para mi negocio. ¿Cuánto sale?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all text-center"
                >
                  Consultar precio
                </a>
              </div>
            </motion.div>
          </div>

          {/* Mockup */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-3 shadow-2xl overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#0a0a0a] relative">
                <DashboardMockupUI />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
            <div className="absolute -inset-4 bg-primary/10 blur-[60px] rounded-[3rem] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
