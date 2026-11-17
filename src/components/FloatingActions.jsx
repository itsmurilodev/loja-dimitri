import React, { useState } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function FloatingActions({ onOpenFunnel }) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="bg-[#141414] text-white text-xs p-3.5 rounded-xl shadow-2xl border border-[#2a2a2a] max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-zinc-400 hover:text-white p-1 cursor-pointer"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-bold text-white text-[11px] uppercase tracking-wider">
              Loja Dimitri • Atendimento
            </span>
          </div>
          <p className="text-zinc-300 text-[11px] leading-relaxed">
            Deseja consultar peças ou registrar um pedido para <strong>retirada</strong> ou <strong>entrega</strong>?
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setShowTooltip(false);
                onOpenFunnel('retirada');
              }}
              className="px-2.5 py-1 rounded bg-dimitri-gold text-dimitri-950 font-bold text-[10px] uppercase tracking-wider hover:bg-dimitri-gold-light cursor-pointer"
            >
              Fazer Pedido
            </button>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Loja Dimitri! Gostaria de consultar peças disponíveis.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-emerald-400 hover:underline font-semibold"
            >
              WhatsApp →
            </a>
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex items-center gap-2.5">
        
        {/* Quick Funnel Button */}
        <button
          type="button"
          onClick={() => onOpenFunnel('retirada')}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#121212] hover:bg-[#202020] text-white text-xs font-bold uppercase tracking-wider shadow-xl border border-[#333] transition-transform hover:scale-105 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-dimitri-gold" />
          <span>Registrar Pedido</span>
        </button>

        {/* WhatsApp Icon Button */}
        <a
          href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Loja Dimitri! Gostaria de tirar uma dúvida.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-transform hover:scale-110 relative group"
          aria-label="Atendimento via WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 border-2 border-white rounded-full"></span>
        </a>

      </div>
    </div>
  );
}