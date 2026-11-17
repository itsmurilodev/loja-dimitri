import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ExternalLink 
} from 'lucide-react';
import Logo from './Logo';
import { STORE_INFO } from '../data/storeData';

export default function Footer({ onOpenFunnel }) {
  return (
    <footer className="bg-[#0d0d0d] text-white border-t border-[#222] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#222]">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="full" light={true} size="default" />
            
            <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-sm mt-3">
              Loja de roupa em Novo Hamburgo. Vestuário masculino e feminino com atendimento na loja física, retirada no balcão e entrega em domicílio.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#181818] hover:bg-[#222] border border-[#333] text-xs text-zinc-200 transition-colors"
              >
                <span>★ 4.9 no Google Maps (52 avaliações)</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Col 2: As 3 Modalidades & Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-dimitri-gold">
              3 Modalidades de Compra
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  1. Compras na Loja Física
                </a>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenFunnel('retirada')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  2. Retirada na Loja
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => onOpenFunnel('entrega')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  3. Entrega
                </button>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Vitrine de Peças
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contato & Horários */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-dimitri-gold">
              Endereço & Atendimento
            </h4>
            <div className="space-y-2 text-xs text-zinc-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-dimitri-gold flex-shrink-0 mt-0.5" />
                <span>{STORE_INFO.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dimitri-gold flex-shrink-0" />
                <span>WhatsApp / Telefone: <strong>{STORE_INFO.phoneDisplay}</strong></span>
              </p>
              <div className="pt-1 flex items-start gap-2 text-zinc-400">
                <Clock className="w-4 h-4 text-dimitri-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p>Segunda a Sexta: 09:30 às 18:30</p>
                  <p>Sábado: 09:00 às 17:00 • Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <p>© {new Date().getFullYear()} Loja Dimitri. Todos os direitos reservados. Av. Dr. Maurício Cardoso, 1560 – Novo Hamburgo - RS.</p>
          <p>Pedidos fora do balcão via WhatsApp oficial: (51) 98432-7914.</p>
        </div>

      </div>
    </footer>
  );
}