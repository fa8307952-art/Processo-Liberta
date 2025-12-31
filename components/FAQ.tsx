
import React, { useState } from 'react';

const faqItems = [
  {
    question: "Como vou receber o material?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com todos os dados de acesso e links para download do guia e materiais bônus."
  },
  {
    question: "O acesso é por quanto tempo?",
    answer: "O acesso é vitalício! Você pode baixar o material e consultar sempre que precisar, sem taxas de renovação ou mensalidades."
  },
  {
    question: "Ainda estou no relacionamento, esse guia serve para mim?",
    answer: "Sim! O foco do Processo Liberta é o fortalecimento emocional. Ele te dará a clareza necessária para entender sua situação e a força para tomar a melhor decisão para sua vida, seja ela qual for."
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Nós oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o guia não é para você, basta nos enviar um e-mail e devolvemos 100% do seu investimento."
  },
  {
    question: "Os bônus estão incluídos no valor de R$ 22,90?",
    answer: "Sim! Por tempo limitado, você leva o Guia Principal + Rede de Apoio + Exercícios do EU SOU por apenas R$ 22,90."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Dúvidas Frequentes</h2>
            <p className="text-gray-600">Tire suas últimas dúvidas antes de começar sua transformação.</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-rose-50/30 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-8">{item.question}</span>
                  <svg 
                    className={`w-5 h-5 text-rose-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
