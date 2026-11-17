import React, { useState } from 'react';
import { 
  X, 
  Check, 
  MessageCircle, 
  ShoppingBag,
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function ProductDetailModal({ product, onClose, onOrderInFunnel }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(
    Array.isArray(product.colors) ? product.colors[0] : 'Padrão'
  );

  const colorsList = Array.isArray(product.colors) 
    ? product.colors 
    : (product.colorsList || ['Padrão']);

  const handleWhatsAppDirect = () => {
    const text = `Olá Loja Dimitri! Gostaria de consultar a disponibilidade da peça:\n*${product.title}*\nTamanho: *${selectedSize}*\nCor: *${selectedColor}*\n\nPodem me confirmar a disponibilidade para retirada ou entrega?`;
    const url = `https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-zinc-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#121212]/80 hover:bg-[#121212] text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Product Image */}
          <div className="bg-[#121212] relative min-h-[300px] md:min-h-full">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-full object-cover object-center max-h-[460px]"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded bg-[#121212]/90 text-dimitri-gold border border-dimitri-gold/30 text-xs font-bold uppercase tracking-wider">
                {product.tag}
              </span>
            </div>
          </div>

          {/* Right: Details & Buying Options */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              <p className="text-xs uppercase tracking-widest text-dimitri-gold font-bold mb-1">
                {product.category}
              </p>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                {product.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {product.description}
              </p>

              {/* Material Details */}
              <div className="mt-4 pt-4 border-t border-zinc-100 space-y-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-900">
                  Características da Peça:
                </p>
                {product.details?.map((detail, idx) => (
                  <p key={idx} className="text-xs text-zinc-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-dimitri-gold flex-shrink-0"></span>
                    <span>{detail}</span>
                  </p>
                ))}
              </div>

              {/* Sizes Selection */}
              <div className="mt-4 pt-4 border-t border-zinc-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 mb-2">
                  Tamanho:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {product.sizes?.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 text-xs font-bold rounded border transition-colors cursor-pointer ${
                        selectedSize === size
                          ? 'bg-[#121212] text-white border-[#121212]'
                          : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors Selection */}
              {colorsList && colorsList.length > 0 && (
                <div className="mt-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-900 mb-2">
                    Cores disponíveis:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {colorsList.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 text-xs rounded border transition-colors cursor-pointer ${
                          selectedColor === color
                            ? 'bg-dimitri-gold text-dimitri-950 font-bold border-dimitri-gold'
                            : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-4 border-t border-zinc-100">
              <button
                type="button"
                onClick={() => onOrderInFunnel(product)}
                className="w-full py-3 px-4 rounded-sm bg-[#121212] hover:bg-dimitri-gold text-white hover:text-dimitri-950 font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Registrar Pedido (Retirada ou Entrega)</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-2.5 px-4 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consultar no WhatsApp (51) 98432-7914</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}