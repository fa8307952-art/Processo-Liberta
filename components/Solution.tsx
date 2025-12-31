
import React from 'react';

const CHECKOUT_URL = "#"; // ADICIONE SEU LINK DE CHECKOUT AQUI

export const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <span className="text-rose-600 font-bold tracking-[0.3em] text-xs uppercase">Seu despertar começa aqui</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              PROCESSO LIBERTA
            </h2>
            <div className="h-1.5 w-20 bg-rose-600 rounded-full mx-auto"></div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Um guia emocional completo para você fortalecer seu emocional, recuperar o amor-próprio e criar claramente para decidir sem culpa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            {[
              "Fortalecer o Emocional com força interior",
              "Recuperar o seu valor e amor-próprio",
              "Criar clareza para decidir sem culpa",
              "Sair com dignidade e consciência"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-rose-50/50 rounded-2xl border border-rose-100/50 group hover:bg-rose-50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a 
              href={CHECKOUT_URL} 
              className="cta-button inline-flex items-center gap-4 bg-rose-600 text-white px-12 py-5 rounded-full font-bold shadow-xl shadow-rose-200/50 transform hover:-translate-y-1 uppercase tracking-widest text-sm"
            >
              QUERO ME LIBERTAR AGORA
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
