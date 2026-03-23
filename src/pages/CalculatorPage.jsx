import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, RefreshCw, Smartphone, Globe, ShoppingCart } from 'lucide-react';
import NoiseOverlay from '../components/ui/NoiseOverlay';

const steps = [
  {
    id: 1,
    question: "¿Qué tipo de proyecto necesitás?",
    options: [
      { id: 'landing', label: 'Landing Page', icon: Smartphone, price: 300 }, // Precios base ficticios (usados para lógica interna)
      { id: 'corp', label: 'Sitio Corporativo', icon: Globe, price: 600 },
      { id: 'ecom', label: 'E-commerce', icon: ShoppingCart, price: 900 },
    ]
  },
  {
    id: 2,
    question: "¿Tenés logo y textos listos?",
    options: [
      { id: 'si', label: 'Sí, tengo todo', price: 0 },
      { id: 'no', label: 'No, necesito ayuda (+ Branding)', price: 200 },
    ]
  },
  {
    id: 3,
    question: "¿Cuándo te gustaría lanzar?",
    options: [
      { id: 'asap', label: 'Lo antes posible (Urgente)', price: 150 },
      { id: 'mes', label: 'En 30 días (Normal)', price: 0 },
      { id: 'tranqui', label: 'No tengo apuro', price: 0 },
    ]
  }
];

export default function CalculatorPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (option) => {
    setSelections({ ...selections, [steps[currentStep].id]: option });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getWhatsAppLink = () => {
    const text = `Hola Riva, usé la calculadora. Mi proyecto: ${selections[1]?.label}, Material: ${selections[2]?.label}, Tiempo: ${selections[3]?.label}. Quiero una cotización exacta.`;
    return `https://wa.me/5492646620024?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <NoiseOverlay opacity={0.3} />
      
      <div className="relative z-10 w-full max-w-2xl text-center">
        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Cotizador Online</span>
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-white mb-12 tracking-tighter">
          Calculá tu inversión <br/> <span className="text-neutral-500">en segundos.</span>
        </h1>

        <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xs text-neutral-500 font-mono">PASO {currentStep + 1}/{steps.length}</span>
                    <div className="flex gap-1">
                        {steps.map((_, i) => (
                            <div key={i} className={`h-1 w-8 rounded-full ${i <= currentStep ? 'bg-primary' : 'bg-white/10'}`}></div>
                        ))}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-8">{steps[currentStep].question}</h3>

                <div className="grid gap-4">
                  {steps[currentStep].options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect(opt)}
                      className="group flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-white/10 transition-all text-left w-full"
                    >
                      <div className="flex items-center gap-4">
                        {opt.icon && <opt.icon className="text-neutral-400 group-hover:text-primary transition-colors" size={24} />}
                        <span className="text-white font-medium group-hover:text-primary transition-colors">{opt.label}</span>
                      </div>
                      <ArrowRight size={18} className="text-neutral-600 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} strokeWidth={4} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">¡Listo! Tenemos tu estimado.</h3>
                <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                  En base a tus respuestas, hemos preparado un pre-presupuesto. Envialo a nuestro equipo para validarlo y recibir el precio final.
                </p>
                
                <a 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-[#c2ed00] hover:shadow-[0_0_20px_rgba(208,255,0,0.4)] transition-all mb-4"
                >
                  Recibir Presupuesto por WhatsApp
                </a>
                
                <button 
                    onClick={() => { setIsFinished(false); setCurrentStep(0); setSelections({}); }}
                    className="text-sm text-neutral-500 hover:text-white flex items-center justify-center gap-2 mx-auto mt-6 transition-colors"
                >
                    <RefreshCw size={14} /> Volver a empezar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}