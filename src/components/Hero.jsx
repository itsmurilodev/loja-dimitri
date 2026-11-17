import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Store, 
  ShoppingBag, 
  Truck, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin,
  Clock
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function Hero({ onOpenFunnel, onExploreCatalog }) {
  return (
    <section className="relative overflow-hidden bg-[#121212] text-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#222]">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-dimitri-gold/25 blur-[120px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-amber-900/20 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Proposition & Sales Funnel Triggers */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a1a] text-dimitri-gold border border-dimitri-gold/30 text-[11px] font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Loja de Roupa • Novo Hamburgo
              </span>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[11px] text-zinc-300">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white ml-0.5">4.9</span>
                <span className="text-zinc-400 font-light">no Google (52 avaliações)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.12] text-white">
              Vestuário refinado e atendimento exclusivo na{' '}
              <span className="italic text-dimitri-gold font-normal font-serif">Loja Dimitri</span>.
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Moda masculina e feminina na Av. Dr. Maurício Cardoso, 1560 em Novo Hamburgo. 
              Atendimento com três modalidades oficiais:{' '}
              <strong className="text-white font-medium">compras na loja, retirada e entrega</strong>. 
              Pedidos fora do balcão contam com registro prático e protocolo direto para nosso WhatsApp.
            </p>

            {/* Quick 3 Modalities Interactive Selector */}
            <div className="p-4 rounded-xl bg-[#181818]/90 border border-[#262626] backdrop-blur-md max-w-xl mx-auto lg:mx-0 w-full shadow-xl">
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-dimitri-gold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  3 Modalidades de Atendimento:
                </p>
                <span className="text-[10px] text-zinc-400 font-light hidden sm:inline">Selecione para registrar</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs">
                {/* Modality 1: Compras na Loja */}
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('localizacao');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-3 rounded-lg bg-[#111111] hover:bg-[#202020] border border-[#2a2a2a] hover:border-dimitri-gold/60 text-left transition-all duration-200 group flex sm:flex-col items-center justify-between sm:justify-center gap-1.5 cursor-pointer"
                >
                  <div className="flex items-center sm:flex-col gap-2">
                    <Store className="w-4 h-4 text-dimitri-gold group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-white block text-[12px]">Compras na Loja</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">Av. Maurício Cardoso</span>
                </button>

                {/* Modality 2: Retirada */}
                <button
                  type="button"
                  onClick={() => onOpenFunnel('retirada')}
                  className="p-3 rounded-lg bg-[#111111] hover:bg-[#202020] border border-[#2a2a2a] hover:border-dimitri-gold/60 text-left transition-all duration-200 group flex sm:flex-col items-center justify-between sm:justify-center gap-1.5 cursor-pointer"
                >
                  <div className="flex items-center sm:flex-col gap-2">
                    <ShoppingBag className="w-4 h-4 text-dimitri-gold group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-white block text-[12px]">Retirada</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">Retirada no balcão</span>
                </button>

                {/* Modality 3: Entrega */}
                <button
                  type="button"
                  onClick={() => onOpenFunnel('entrega')}
                  className="p-3 rounded-lg bg-[#111111] hover:bg-[#202020] border border-[#2a2a2a] hover:border-dimitri-gold/60 text-left transition-all duration-200 group flex sm:flex-col items-center justify-between sm:justify-center gap-1.5 cursor-pointer"
                >
                  <div className="flex items-center sm:flex-col gap-2">
                    <Truck className="w-4 h-4 text-dimitri-gold group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-white block text-[12px]">Entrega</span>
                  </div>
                  <span className="text-[10px] text-zinc-400">Envio para endereço</span>
                </button>
              </div>
            </div>

            {/* Call to Actions (Funnel Triggers) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenFunnel('retirada')}
                className="w-full sm:w-auto px-7 py-4 rounded-sm bg-dimitri-gold hover:bg-dimitri-gold-light text-dimitri-950 font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-xl hover:shadow-gold-glow flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Registrar Pedido (Retirada ou Entrega)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExploreCatalog}
                className="w-full sm:w-auto px-6 py-4 rounded-sm bg-transparent hover:bg-[#1f1f1f] border border-[#333] hover:border-zinc-400 text-white font-semibold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Peças da Loja</span>
              </button>
            </div>

            {/* Verified Facts */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Compras na loja física
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Retirada no balcão
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Entrega em domicílio
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase with picture-3.png */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual: Storefront at night (picture-3.png) */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl bg-[#141414] group">
                <img 
                  src="./assets/reference/picture-3.png" 
                  alt="Fachada da Loja Dimitri na Av. Dr. Maurício Cardoso, 1560, Novo Hamburgo" 
                  className="w-full h-80 sm:h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>

                {/* Floating Location Tag */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121212]/90 backdrop-blur-md border border-[#333] text-[11px] font-semibold text-white shadow-lg">
                  <MapPin className="w-3.5 h-3.5 text-dimitri-gold" />
                  <span>Av. Dr. Maurício Cardoso, 1560</span>
                </div>

                {/* Hours pill */}
                <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121212]/90 backdrop-blur-md border border-[#333] text-[10px] font-bold text-zinc-300 uppercase tracking-wider">
                  <Clock className="w-3 h-3 text-dimitri-gold" />
                  <span>Seg a Sex: 09:30–18:30</span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#121212]/90 backdrop-blur-md border border-[#2a2a2a]">
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Loja Dimitri — Novo Hamburgo
                  </h3>
                  <p className="text-xs text-zinc-300 font-light mt-0.5">
                    Av. Dr. Maurício Cardoso, 1560 • WhatsApp: (51) 98432-7914
                  </p>
                </div>
              </div>

              {/* Reference Photos Thumbnails */}
              <div className="grid grid-cols-2 gap-3 mt-3.5">
                <button
                  type="button"
                  onClick={onExploreCatalog}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#181818] border border-[#2a2a2a] hover:border-dimitri-gold/50 transition-all text-left group cursor-pointer"
                >
                  <img 
                    src="./assets/reference/picture-2.png" 
                    alt="Camisas na arara" 
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-dimitri-gold tracking-wider block">Camisaria</span>
                    <span className="text-xs font-semibold text-white truncate block">Linho Puro</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={onExploreCatalog}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-[#181818] border border-[#2a2a2a] hover:border-dimitri-gold/50 transition-all text-left group cursor-pointer"
                >
                  <img 
                    src="./assets/reference/picture-4.png" 
                    alt="Showroom da loja" 
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-dimitri-gold tracking-wider block">A Loja</span>
                    <span className="text-xs font-semibold text-white truncate block">Showroom e Araras</span>
                  </div>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}