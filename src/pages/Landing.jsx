import React, { Suspense, lazy } from 'react';
import Hero from '../components/sections/Hero';

// Lazy Imports (Igual que antes)
const Benefits = lazy(() => import('../components/sections/Benefits'));
const Services = lazy(() => import('../components/sections/Services'));
const RivappShowcase = lazy(() => import('../components/sections/RivappShowcase'));
const Process = lazy(() => import('../components/sections/Process'));
const Experience = lazy(() => import('../components/sections/Experience'));
const FAQ = lazy(() => import('../components/sections/FAQ'));
const CallToAction = lazy(() => import('../components/sections/CallToAction'));

export default function Landing() {
  return (
    <>
      {/* El Hero es carga crítica, va directo */}
      <Hero />
      
      {/* El resto se carga diferido */}
      <Suspense fallback={<div className="h-20 w-full" />}>
        <Benefits />
        <Services />
        <RivappShowcase />
        <Experience />
        <Process />
        <FAQ />
        <CallToAction />
      </Suspense>
    </>
  );
}