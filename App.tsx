
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Steps } from './components/Steps';
import { Transformation } from './components/Transformation';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const CHECKOUT_URL = "#"; // ADICIONE SEU LINK DE CHECKOUT AQUI

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        
        {/* Simple Emotional Bridge Section (Reverted) */}
        <section className="py-20 bg-rose-50 text-center px-6">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl italic text-rose-700 font-serif leading-relaxed">
              "Enquanto você tenta ser forte, compreensiva e paciente, algo dentro de você vai se apagando… Não porque você é fraca — mas porque existe uma ferida emocional não reconhecida que te mantém presa ao mesmo ciclo."
            </p>
            <div className="h-px w-24 bg-rose-200 mx-auto"></div>
            <p className="text-lg text-gray-700">
              Você precisa de um caminho seguro. Um método. E é exatamente isso que eu vou te oferecer.
            </p>
          </div>
        </section>

        <Solution />
        <Steps />
        <Transformation />
        
        <Features />
        <Pricing />
        <FAQ />
      </main>

      {/* Sticky Bottom Bar for Mobile Conversion */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-rose-100 p-4 transition-transform duration-300 z-40 md:hidden ${isScrolled ? 'translate-y-0' : 'translate-y-full'}`}>
        <a 
          href={CHECKOUT_URL}
          className="block w-full text-center bg-rose-600 text-white py-3 rounded-full font-bold shadow-lg uppercase tracking-wider text-sm"
        >
          Quero me libertar agora
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default App;
