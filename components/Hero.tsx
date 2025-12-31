
import React from 'react';

const CHECKOUT_URL = "#"; // ADICIONE SEU LINK DE CHECKOUT AQUI

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-20 overflow-hidden bg-white">
      {/* Subtle Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-rose-50/60 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] max-w-5xl mx-auto">
          Como criar <span className="text-rose-600 italic">força emocional</span> para sair de um relacionamento que te machuca?
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Você tenta, conversa, espera, insiste…<br className="hidden md:block" /> e mesmo assim continua se sentindo sozinha dentro da relação.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={CHECKOUT_URL}
            className="cta-button bg-rose-600 text-white px-12 py-5 rounded-full text-lg font-bold shadow-xl shadow-rose-200 flex items-center gap-3 uppercase tracking-widest"
          >
            QUERO ME LIBERTAR AGORA
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </a>
        </div>
        
        <div className="mt-12 text-sm text-gray-400 font-medium">
          Acesso imediato • 100% Seguro • 7 dias de garantia
        </div>
      </div>
    </section>
  );
};
