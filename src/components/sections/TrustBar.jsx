import { motion } from 'framer-motion';

const clients = [
  "Excelsa Consultora",
  "GPI Consultores",
  "Skin & Soul",
  "Rivapp",
];

export default function TrustBar() {
  return (
    <section className="relative bg-[#050505] border-y border-white/5">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
        >
          <span className="text-xs text-neutral-600 font-medium uppercase tracking-widest whitespace-nowrap">
            Confían en nosotros
          </span>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-10 gap-y-4">
            {clients.map((client, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-sm md:text-base font-bold text-neutral-500 hover:text-white transition-colors cursor-default tracking-tight"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
