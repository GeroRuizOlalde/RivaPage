import { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';

const Benefits = lazy(() => import('../components/sections/Benefits'));
const Services = lazy(() => import('../components/sections/Services'));
const Experience = lazy(() => import('../components/sections/Experience'));
const Process = lazy(() => import('../components/sections/Process'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const RivappShowcase = lazy(() => import('../components/sections/RivappShowcase'));
const FAQ = lazy(() => import('../components/sections/FAQ'));
const CallToAction = lazy(() => import('../components/sections/CallToAction'));

function SectionLoader() {
  return (
    <div className="h-40 w-full flex items-center justify-center">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:0ms]"></div>
        <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:150ms]"></div>
        <div className="w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:300ms]"></div>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <>
      {/* 1. Hook: Problema + promesa */}
      <Hero />

      {/* 2. Prueba social inmediata */}
      <TrustBar />

      <Suspense fallback={<SectionLoader />}>
        {/* 3. Dolor: ¿Te identificás? */}
        <Benefits />

        {/* 4. Solución: Nuestros servicios con jerarquía */}
        <Services />

        {/* 5. Prueba: Casos reales con resultados */}
        <Experience />

        {/* 6. Proceso: Cómo trabajamos */}
        <Process />

        {/* 7. Prueba social: Testimonios */}
        <Testimonials />

        {/* 8. Producto propio: Rivapp */}
        <RivappShowcase />

        {/* 9. Objeciones: FAQ */}
        <FAQ />

        {/* 10. Cierre: Garantías + CTA con urgencia */}
        <CallToAction />
      </Suspense>
    </>
  );
}
