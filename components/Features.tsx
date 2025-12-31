
import React from 'react';

const features = [
  { icon: "📘", title: "Guia prático processo Liberta" },
  { icon: "🧠", title: "Exercícios de autoconhecimento" },
  { icon: "❤️", title: "Guia emocional passo a passo" },
  { icon: "⏳", title: "Acesso vitalício ao material" },
  { icon: "🗣️", title: "Linguagem simples e acolhedora" },
  { icon: "💻", title: "100% online – faça no seu tempo" }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Tudo o que está incluído</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-2xl">{f.icon}</span>
                <span className="font-semibold text-gray-800">{f.title}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-3xl border border-rose-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 bg-rose-200 text-rose-700 text-xs font-bold uppercase rounded-bl-xl">Bônus 1</div>
               <h4 className="text-xl font-bold text-rose-900 mb-4">Rede de Apoio</h4>
               <p className="text-rose-800 opacity-90">Acesso à comunidade para se sentir acolhida – uma rede de mulheres que entendem exatamente o que você está passando.</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl border border-indigo-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-3 bg-indigo-200 text-indigo-700 text-xs font-bold uppercase rounded-bl-xl">Bônus 2</div>
               <h4 className="text-xl font-bold text-indigo-900 mb-4">Exercícios do EU SOU</h4>
               <p className="text-indigo-800 opacity-90">Práticas de reprogramação para mudar para a versão que você sempre quis ser e recuperar seu poder pessoal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
