
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <p className="text-2xl font-bold text-gray-900 mb-4 font-serif italic">Processo Liberta</p>
        <div className="flex justify-center gap-8 mb-8 text-sm text-gray-500">
          <a href="#" className="hover:text-rose-600">Políticas de Privacidade</a>
          <a href="#" className="hover:text-rose-600">Termos de Uso</a>
          <a href="#" className="hover:text-rose-600">Suporte</a>
        </div>
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Processo Liberta. Todos os direitos reservados.
          <br />
          Este produto não substitui o acompanhamento médico ou psicoterapêutico especializado.
        </p>
      </div>
    </footer>
  );
};
