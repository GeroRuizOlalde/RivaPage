import { Rocket, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/">
              <img src="/images/logoriva.webp" alt="Riva Estudio" className="h-8 mb-6" />
            </Link>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed mb-6">
              Agencia de diseño y desarrollo web enfocada en resultados.
              Ayudamos a empresas de Argentina a escalar su presencia digital con tecnología moderna.
            </p>
            <a
              href="mailto:hola@rivaestudio.com.ar"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              hola@rivaestudio.com.ar <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Servicios */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link to="/servicios/corporativo" className="hover:text-primary transition-colors">Sitios Corporativos</Link>
              </li>
              <li>
                <Link to="/servicios/ecommerce" className="hover:text-primary transition-colors">E-commerce</Link>
              </li>
              <li>
                <Link to="/servicios/landing-pages" className="hover:text-primary transition-colors">Landing Pages</Link>
              </li>
              <li>
                <Link to="/calculadora" className="hover:text-primary transition-colors">Cotizador Online</Link>
              </li>
              <li>
                <a href="https://rivapp.com.ar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary font-bold hover:underline">
                  <Rocket size={12} /> Rivapp
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>Rivadavia, San Juan, Argentina</li>
              <li>
                <a
                  href="https://wa.me/5492646620024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  +54 9 264 662 0024
                  <span className="text-[9px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full font-bold">WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:hola@rivaestudio.com.ar" className="hover:text-primary transition-colors">
                  hola@rivaestudio.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Riva Estudio. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
            Hecho con código, no con plantillas.
          </p>
        </div>
      </div>
    </footer>
  );
}
