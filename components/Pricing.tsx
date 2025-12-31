
import React from 'react';

const CHECKOUT_URL = "#"; // ADICIONE SEU LINK DE CHEKOUT AQUI

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-bold bg-rose-600/20 text-rose-400 rounded-full border border-rose-500/30 uppercase tracking-widest">
            Oferta Relâmpago
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Comece sua jornada hoje</h2>
          
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 shadow-2xl relative">
            {/* Price badge animation simulation */}
            <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 font-black px-6 py-2 rounded-full rotate-12 animate-pulse text-xl shadow-xl">
              88% OFF
            </div>

            <p className="text-gray-400 text-lg mb-2 line-through">Valor real: R$ 197,00</p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <span className="text-2xl font-bold opacity-70">R$</span>
              <span className="text-7xl font-black text-rose-500">22,90</span>
            </div>

            <p className="text-gray-300 mb-10 text-lg">
              Pagamento único. Acesso vitalício para você fazer no seu tempo e revisitar sempre que precisar.
            </p>

            <a 
              href={CHECKOUT_URL}
              className="cta-button block w-full bg-rose-600 text-white py-6 rounded-2xl text-xl font-black shadow-lg uppercase tracking-widest"
            >
              GARANTIR MINHA VAGA
            </a>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60">
               <div className="text-[10px] uppercase font-bold tracking-widest">Seguro</div>
               <div className="text-[10px] uppercase font-bold tracking-widest">Checkout Limpo</div>
               <div className="text-[10px] uppercase font-bold tracking-widest">Acesso Imediato</div>
               <div className="text-[10px] uppercase font-bold tracking-widest">7 dias garantia</div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
             <p className="text-sm text-gray-400">
               Você receberá os dados de acesso no seu e-mail imediatamente após a confirmação do pagamento.
             </p>
             <div className="flex justify-center gap-2">
                <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-8 grayscale opacity-50" alt="Visa" />
                <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-8 grayscale opacity-50" alt="Mastercard" />
                <img src="https://img.icons8.com/color/48/000000/pix.png" className="h-8 grayscale opacity-50" alt="Pix" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
