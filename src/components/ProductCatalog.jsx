import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Eye, 
  ShoppingBag, 
  Filter 
} from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/storeData';
import ProductDetailModal from './ProductDetailModal';

export default function ProductCatalog({ onSelectProductForFunnel }) {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);

  const categories = [
    'Todas',
    'Camisaria',
    'Polos & Casual',
    'Alfaiataria',
    'Malharia',
    'Calças',
    'Linha Donna',
    'Calçados',
  ];

  const filteredProducts = activeCategory === 'Todas'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="catalogo" className="py-16 lg:py-24 bg-white border-b border-[#e5e1da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f0e8] text-dimitri-950 text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-dimitri-gold" />
              Vitrine & Coleções
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dimitri-950 tracking-tight">
              Peças Selecionadas da Loja Dimitri
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600 max-w-xl">
              Confira peças e modelos disponíveis em nossa loja física na Av. Dr. Maurício Cardoso, 1560, prontos para compras na loja, retirada ou entrega.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold block">
              Atendimento & Vendas
            </span>
            <span className="text-sm font-bold text-dimitri-950">
              WhatsApp: (51) 98432-7914
            </span>
          </div>
        </div>

        {/* Categories Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 border-b border-zinc-100">
          <Filter className="w-4 h-4 text-zinc-400 flex-shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#121212] text-white shadow-md'
                  : 'bg-[#faf8f5] text-zinc-700 hover:bg-[#ede7db] border border-[#e5e1da]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-[#e5e1da] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Image & Badges */}
              <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#121212]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-[#333]">
                    {product.tag}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur-sm text-zinc-900 text-[10px] font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProductForModal(product)}
                    className="p-3 rounded-full bg-white text-zinc-900 hover:bg-dimitri-gold hover:text-white transition-colors shadow-lg cursor-pointer"
                    title="Ver detalhes da peça"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectProductForFunnel(product)}
                    className="p-3 rounded-full bg-[#121212] text-white hover:bg-dimitri-gold hover:text-zinc-900 transition-colors shadow-lg cursor-pointer"
                    title="Registrar Pedido / Consultar"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-zinc-900 group-hover:text-dimitri-gold transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100">
                  <div className="flex items-center justify-between text-xs text-zinc-600 mb-3">
                    <span className="font-semibold text-zinc-900">Disponibilidade</span>
                    <span className="text-[11px] text-zinc-500">
                      Tam: {product.sizes.slice(0, 3).join(', ')}...
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProductForModal(product)}
                      className="py-2 px-3 rounded-sm border border-zinc-300 hover:border-zinc-900 text-zinc-700 text-[11px] font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
                    >
                      Detalhes
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectProductForFunnel(product)}
                      className="py-2 px-3 rounded-sm bg-[#121212] hover:bg-dimitri-gold text-white hover:text-zinc-900 text-[11px] font-bold uppercase tracking-wider transition-colors text-center cursor-pointer shadow-sm"
                    >
                      Pedir / Retirar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onOrderInFunnel={(product) => {
          setSelectedProductForModal(null);
          onSelectProductForFunnel(product);
        }}
      />
    </section>
  );
}