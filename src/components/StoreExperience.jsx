import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Store, 
  Clock, 
  Phone,
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function StoreExperience({ onBookVisit }) {
  const experiences = [
    {
      icon: Store,
      title: 'Showroom Completo',
      desc: 'Ambiente climatizado e aconchegante com coleções masculinas e femininas dispostas em araras organizadas.',
    },
    {
      icon: MapPin,
      title: 'Localização Privilegiada',
      desc: 'Situada na Av. Dr. Maurício Cardoso, 1560, em Novo Hamburgo, com fácil acesso e estacionamento.',
    },
    {
      icon: Clock,
      title: 'Horários Convenientes',
      desc: 'Segunda a sexta das 09:30 às 18:30 e aos sábados das 09:00 às 17:00.',
    },
    {
      icon: Phone,
      title: 'Atendimento Dedicado',
      desc: 'Equipe pronta para auxiliar com sugestões de looks e confirmação de estoque pelo WhatsApp (51) 98432-7914.',
    },
  ];

  return (
    <section id="espaco" className="py-16 lg:py-24 bg-[#121212] text-white relative overflow-hidden border-b border-[#222]">
      
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-dimitri-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e1e1e] border border-dimitri-gold/30 text-dimitri-gold text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            A Loja Física
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium tracking-tight">
            Conheça o showroom da Loja Dimitri em Novo Hamburgo
          </h2>
          <p className="mt-4 text-base text-zinc-300 font-light leading-relaxed">
            Localizada na Av. Dr. Maurício Cardoso, 1560, a Loja Dimitri oferece atendimento atencioso, provadores confortáveis e araras completas de vestuário.
          </p>
        </div>

        {/* Gallery & Atmosphere Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Visual: Interior Showroom (picture-4.png) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-2xl relative group">
            <img 
              src="./assets/reference/picture-4.png" 
              alt="Interior do Showroom da Loja Dimitri" 
              className="w-full h-80 sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded bg-[#1e1e1e]/90 text-dimitri-gold text-xs font-bold uppercase tracking-wider border border-[#333]">
                Showroom Climatizado
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Araras e peças organizadas por categoria
              </h3>
              <p className="text-xs text-zinc-300 mt-1 max-w-lg">
                Camisaria, alfaiataria, calças e polos prontas para você experimentar com conforto.
              </p>
            </div>
          </div>

          {/* Right Column: 2 Stacked Visuals (picture-3.png and picture-2.png) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-lg relative group">
              <img 
                src="./assets/reference/picture-3.png" 
                alt="Fachada iluminada da Loja Dimitri" 
                className="w-full h-48 sm:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-bold text-white tracking-wider uppercase bg-[#121212]/80 px-2.5 py-1 rounded">
                  Av. Maurício Cardoso, 1560
                </span>
                <span className="text-[11px] text-dimitri-gold font-semibold">Novo Hamburgo</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#2a2a2a] shadow-lg relative group">
              <img 
                src="./assets/reference/picture-2.png" 
                alt="Arara de camisas de linho" 
                className="w-full h-48 sm:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-bold text-white tracking-wider uppercase bg-[#121212]/80 px-2.5 py-1 rounded">
                  Camisaria de Linho
                </span>
                <span className="text-[11px] text-zinc-300 font-semibold">Coleção Atual</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Feature Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => {
            const IconComponent = exp.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-[#181818] border border-[#262626] hover:border-dimitri-gold/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#222] flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-dimitri-gold" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {exp.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {exp.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}