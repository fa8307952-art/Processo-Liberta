
import React from 'react';

const transformations = [
  {
    title: "Resgate sua Autoestima",
    description: "Reconecte-se com sua força interior and volte a acreditar em você mesma.",
    icon: "♡"
  },
  {
    title: "Independência Financeira",
    description: "Aprenda a conquistar sua liberdade econômica e nunca mais depender de ninguém.",
    icon: "💳"
  },
  {
    title: "Reconecte com quem Ama",
    description: "Reconstrua seus laços com família e amigos que ele fez você se afastar.",
    icon: "👥"
  },
  {
    title: "Paz Interior",
    description: "Durma tranquila, sem medo, sem ansiedade, sem aperto no peito.",
    icon: "☺"
  },
  {
    title: "Novos Sonhos",
    description: "Redescubra seus objetivos de vida e tenha claro o futuro que você merece.",
    icon: "◎"
  },
  {
    title: "Coragem para Decidir",
    description: "Tome o controle da sua vida e decida o seu caminho com segurança.",
    icon: "🛡️"
  }
];

export const Transformation: React.FC = () => {
  return (
    <section className="py-24 bg-rose-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">O que você vai conquistar</h2>
        <p className="text-rose-200 mb-16 max-w-2xl mx-auto">Transformações reais que vão muito além de sair do relacionamento.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((t, idx) => (
            <div key={idx} className="bg-rose-800/50 p-8 rounded-3xl border border-rose-700/50 hover:bg-rose-800 transition-all text-left">
              <div className="text-4xl mb-6 text-rose-300">{t.icon}</div>
              <h3 className="text-xl font-bold mb-3">{t.title}</h3>
              <p className="text-rose-100 leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
