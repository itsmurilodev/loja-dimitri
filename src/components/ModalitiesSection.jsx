import React from 'react';
import { 
  Store, 
  ShoppingBag, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import { PURCHASE_MODALITIES } from '../data/storeData';

export default function ModalitiesSection({ onSelectModality }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Store':
        return <Store className="w-6 h-6 text-dimitri-gold" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-dimitri-gold" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-dimitri-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-dimitri-gold" />;
    }
  };

  return (
    <section id="modalidades" className="py-16 lg:py-24 bg-[#faf8f5] border-b border-[#e5e1da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ede7db] text-dimitri-950 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-dimitri-gold" />
            Modalidades de Atendimento
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dimitri-950 tracking-tight">
            Três formas de comprar na Loja Dimitri
          </h2>
          
          <p className="mt-4 text-base text-zinc-600 font-normal leading-relaxed">
            Atendimento presencial em nossa loja física na Av. Dr. Maurício Cardoso, 1560, ou pedidos fora do balcão com retirada e entrega registradas diretamente para nosso WhatsApp.
          </p>
        </div>

        {/* 3 Modalities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PURCHASE_MODALITIES.map((modality) => (
            <div 
              key={modality.id}
              className="bg-white rounded-xl border border-[#e5e1da] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-7">
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#121212] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {getIcon(modality.icon)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f4f0e8] text-dimitri-950 border border-[#e5e1da]">
                    {modality.subtitle}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-dimitri-950 mb-3 tracking-tight">
                  {modality.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  {modality.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-[#f0ebe3]">
                  {modality.highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 bg-white">
                <button
                  type="button"
                  onClick={() => onSelectModality(modality.id)}
                  className="w-full py-3.5 px-4 rounded-sm bg-[#121212] hover:bg-dimitri-gold text-white hover:text-dimitri-950 font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 group/btn shadow-sm cursor-pointer"
                >
                  <span>{modality.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}