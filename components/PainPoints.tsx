
import React from 'react';

const painPoints = [
  {
    title: "Pensa que o problema é você",
    description: "Você se culpa, se questiona, acha que não faz o suficiente ou que está exagerando.",
    icon: "😔"
  },
  {
    title: "Já não ama como antes",
    description: "O sentimento mudou, mas a coragem de partir ainda não chegou.",
    icon: "💔"
  },
  {
    title: "Sabe que o relacionamento não tem mais futuro",
    description: "Você sente no fundo que não vai dar certo, mas insiste mesmo assim.",
    icon: "📉"
  },
  {
    title: "Pede mudanças e aceita migalhas",
    description: "Você espera uma transformação real, mas se contenta com promessas vazias.",
    icon: "🕯️"
  },
  {
    title: "Se sente travada, confusa e emocionalmente presa",
    description: "Parece que uma força te segura ali, mesmo quando você quer sair.",
    icon: "🔗"
  },
  {
    title: "Vive esperando a versão da pessoa que só aparece nas promessas",
    description: "Você ama quem ela poderia ser, não quem ela realmente é hoje.",
    icon: "⏳"
  }
];

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Você se sente assim?</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Se você se comprometer com pelo menos uma dessas situações, este convite é para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-md transition-all">
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
