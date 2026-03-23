import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Layout Components
import Navbar from './components/layout/Navbar';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

// Code Splitting de PÁGINAS (Para que cargue rápido)
const Landing = lazy(() => import('./pages/Landing'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const Footer = lazy(() => import('./components/layout/Footer'));

// Utility: Scroll al inicio cuando cambia la ruta
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  // Dejo la configuración de la animación comentada por si en el futuro 
  // encontramos una forma más liviana de usarla.
  /*
  const bgAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  */

  return (
    <div className="relative min-h-screen text-white selection:bg-[#d0ff00] selection:text-black font-body">
      
      {/* Utility para UX */}
      <ScrollToTop />

      {/* === FONDO GLOBAL (Persistente en todas las páginas) === */}
      <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden pointer-events-none">
        
        {/* --- LUCES APAGADAS PARA MÁXIMO RENDIMIENTO ---
        <motion.div 
          variants={bgAnimation}
          animate="animate"
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full will-change-transform"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full will-change-transform"
        />
        ------------------------------------------------ */}

        {/* La grilla es CSS súper liviano, la dejamos para no perder toda la textura visual */}
        <div 
          className="absolute inset-0 bg-grid-white" 
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
        ></div>
        
        {/* --- TEXTURA DE RUIDO APAGADA --- 
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div> 
        ---------------------------------- */}
      </div>

      {/* Navbar fija */}
      <Navbar />

      {/* ÁREA DE CONTENIDO DINÁMICO */}
      <main className="relative z-10 min-h-screen flex flex-col">
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-primary">Cargando...</div>}>
          <Routes>
            {/* 1. HOME */}
            <Route path="/" element={<Landing />} />
            
            {/* 2. PÁGINAS DE SERVICIOS (SEO Dinámico) */}
            <Route path="/servicios/landing-pages" element={<ServicePage type="landing" />} />
            <Route path="/servicios/ecommerce" element={<ServicePage type="ecommerce" />} />
            <Route path="/servicios/corporativo" element={<ServicePage type="corporate" />} />
            
            {/* 3. CALCULADORA */}
            <Route path="/calculadora" element={<CalculatorPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer Global */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;