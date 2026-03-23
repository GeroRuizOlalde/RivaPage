import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

const Landing = lazy(() => import('./pages/Landing'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));
const Footer = lazy(() => import('./components/layout/Footer'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageLoader() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
      </div>
      <span className="text-sm text-neutral-500 font-medium">Cargando...</span>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-sans font-bold text-white mb-4 tracking-tighter">404</h1>
      <p className="text-xl text-neutral-400 mb-8">Esta página no existe.</p>
      <Link
        to="/"
        className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-[#c2ed00] transition-all"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen text-white selection:bg-[#d0ff00] selection:text-black font-body">
      <ScrollToTop />

      {/* Fondo global */}
      <div className="fixed inset-0 z-[-1] bg-[#050505] overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-grid-white"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
        ></div>
      </div>

      <Navbar />

      <main className="relative z-10 min-h-screen flex flex-col">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/servicios/landing-pages" element={<ServicePage type="landing" />} />
            <Route path="/servicios/ecommerce" element={<ServicePage type="ecommerce" />} />
            <Route path="/servicios/corporativo" element={<ServicePage type="corporate" />} />
            <Route path="/calculadora" element={<CalculatorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
