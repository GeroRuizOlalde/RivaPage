import React from 'react';
import { Rocket, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <img src="/images/logoriva.webp" alt="Riva Estudio" className="h-8 mb-6" />
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              Agencia de diseño y desarrollo web enfocada en resultados. 
              Ayudamos a empresas de Argentina a escalar su presencia digital con tecnología moderna.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#servicios" className="hover:text-primary transition-colors">Diseño Web</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="#servicios" className="hover:text-primary transition-colors">Landing Pages</a></li>
              <li>
                <a href="https://rivapp.com.ar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold">
                    <Rocket size={12}/> Rivapp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>Rivadavia, San Juan, Argentina</li>
              <li><a href="mailto:hola@rivaestudio.com.ar" className="hover:text-primary transition-colors">hola@rivaestudio.com.ar</a></li>
              {/* Desactivados temporalmente hasta tener redes reales */}
              {/* <li className="pt-2 flex gap-4">
                <a href="#" className="hover:text-primary transition-colors"><Instagram size={20}/></a>
                <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20}/></a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Riva Estudio. Todos los derechos reservados.</p>
          <p>Hecho con código, no con plantillas.</p>
        </div>
      </div>
    </footer>
  );
}