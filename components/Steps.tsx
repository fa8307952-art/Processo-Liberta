
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Fortalecer o Emocional",
    description: "Aprenda a identificar e transformar a dependência emocional em força interior",
    highlight: "✨ Pare de se sentir fraca"
  },
  {
    num: "02",
    title: "Recuperar o Amor-Próprio",
    description: "Reconecte-se com seu valor e pare de aceitar menos do que merece",
    highlight: "✨ Volte a se respeitar"
  },
  {
    num: "03",
    title: "Criar Clareza para Decidir Sem Culpa",
    description: "Entenda seus sentimentos e tome decisões conscientes sem se culpar",
    highlight: "✨ Decida com paz interior"
  },
  {
    num: "04",
    title: "Parar de Aceitar Migalhas",
    description: "Reconheça seu próprio valor e exija reciprocidade emocional",
    highlight: "✨ Não se contente com menos"
  },
  {
    num: "05",
    title: "Sair com Dignidade, Consciência e Coragem",
    description: "Crie um plano emocional para encerrar o ciclo sem arrependimentos",
    highlight: "✨ Vá embora de cabeça erguida"
  }
];

export const Steps: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Processo Liberta</h2>
          <p className="text-lg text-gray-600">Guia completo para você fortalecer seu emocional, recuperar o amor-próprio e criar clareza para decidir sem culpa.</p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center group hover:border-rose-200 transition-colors">
              <span className="text-5xl font-black text-rose-100 group-hover:text-rose-200 transition-colors shrink-0">{step.num}</span>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                <span className="inline-block py-1 px-3 bg-rose-50 text-rose-600 rounded-full text-sm font-semibold">{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
