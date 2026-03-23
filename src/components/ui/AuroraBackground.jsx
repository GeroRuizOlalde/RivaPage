import React from "react";
import { motion } from "framer-motion";

// Utility simple para unir clases (si no tenés clsx/tailwind-merge, esto funciona igual)
const cn = (...classes) => classes.filter(Boolean).join(" ");

export const AuroraBackground = ({ className, children, showRadialGradient = true, ...props }) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-[#050505] text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            // OPTIMIZACIÓN MOBILE:
            // 1. will-change-transform: Avisa al navegador para usar GPU.
            // 2. motion-reduce:hidden: Si el usuario pide reducir movimiento, se apaga.
            // 3. Opacidad reducida en mobile para evitar banding.
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#d0ff00_10%,#a3d900_15%,#050505_20%,#1a1a1a_25%,#d0ff00_30%)]
            [background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,_50%_50%]
            filter blur-[10px] invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-30 md:opacity-50 will-change-transform motion-reduce:hidden`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};