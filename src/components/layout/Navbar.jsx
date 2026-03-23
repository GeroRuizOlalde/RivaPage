import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle, Rocket, Calculator } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // 👈 Importamos hooks del router

const navLinks = [
  { name: "Beneficios", href: "#beneficios" },
  { name: "Servicios", href: "#servicios" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Proceso", href: "#proceso" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Hooks para saber dónde estamos y poder navegar
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Detectar scroll solo si estamos en la home
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/5492646620024?text=${encodeURIComponent("Hola Riva, quiero más info sobre sus servicios web.")}`;

  // Función inteligente para manejar clicks en el menú
  const handleNavClick = (e, href) => {
    e.preventDefault(); // Evitamos el comportamiento default
    setMobileMenuOpen(false); // Cerramos menú móvil si está abierto

    if (isHomePage) {
      // Si ya estamos en home, scrolleamos suave
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si estamos en otra página (ej: calculadora), vamos a home y luego scrolleamos
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled || !isHomePage ? 'py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* 1. LOGO (Usa Link para no recargar la página) */}
          <Link to="/" className="relative z-[110] block flex-shrink-0">
            <img src="/images/logoriva.webp" alt="Riva Estudio" className="h-8 mb-6 w-auto" width="180" height="56" />
          </Link>

          {/* 2. MENÚ ESCRITORIO */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-sm shadow-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-neutral-300 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
            
          {/* 3. BOTONES DERECHA */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            
            {/* 🆕 BOTÓN CALCULADORA */}
            <Link 
              to="/calculadora"
              className="px-5 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-full hover:bg-white/10 hover:border-primary/50 transition-all flex items-center gap-2 group"
            >
              <Calculator size={16} className="text-primary group-hover:scale-110 transition-transform" />
              Cotizador
            </Link>

            {/* BOTÓN CONTACTO */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-black text-sm font-bold rounded-full hover:bg-[#c2ed00] hover:shadow-[0_0_20px_rgba(208,255,0,0.4)] transition-all flex items-center gap-2"
            >
              <MessageCircle size={16} className="stroke-[2.5]" />
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-[110] text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Menú Móvil Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#050505] pt-28 px-6 md:hidden flex flex-col items-center gap-6 h-[100dvh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-bold text-white hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="w-full flex flex-col gap-4 mt-4">
              {/* 🆕 CALCULADORA EN MOBILE */}
              <Link 
                to="/calculadora" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full text-lg w-full text-center flex items-center justify-center gap-2"
              >
                <Calculator size={20} className="text-primary" /> Cotizador Online
              </Link>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-black font-bold rounded-full text-lg w-full text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}