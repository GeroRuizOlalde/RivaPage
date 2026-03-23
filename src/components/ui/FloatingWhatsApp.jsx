import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

// Tracking helper (mismo que en Landing)
const trackEvent = (eventName, params = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Aparece después de 3 segundos (cuando el usuario ya vio el Hero)
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Mensaje con contexto de "Ayuda general"
  const message = encodeURIComponent("Hola Riva, estoy navegando su web y tengo una consulta.");

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-2">
      
      {/* Tooltip de Conversión */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-white text-black px-4 py-2 rounded-xl shadow-xl border border-white/20 mr-2"
          >
            <p className="text-xs font-bold">¿Hablamos de tu proyecto?</p>
            {/* Botón chiquito para cerrar solo el tooltip */}
            <button 
              onClick={() => setShowTooltip(false)} 
              className="absolute -top-2 -left-2 bg-[#111] text-white rounded-full p-0.5 hover:bg-red-500 transition-colors"
            >
              <X size={10} />
            </button>
            {/* Triangulito del tooltip */}
            <div className="absolute bottom-0 right-4 translate-y-1/2 translate-x-1/2 rotate-45 w-3 h-3 bg-white"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Principal */}
      <motion.a
        href={`https://wa.me/5492646620024?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('click_whatsapp', { location: 'floating_sticky' })}
        onMouseEnter={() => setShowTooltip(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all group"
      >
        {/* Ping Animation (Llamada de atención) */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping group-hover:animate-none"></span>
        
        <MessageCircle size={28} className="relative z-10 fill-white/20 stroke-[2.5]" />
      </motion.a>
    </div>
  );
}