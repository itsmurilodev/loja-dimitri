import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function LocationAndHours() {
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;

    if (day === 0) {
      setIsOpenNow(false);
    } else if (day === 6) {
      setIsOpenNow(currentTime >= 9 && currentTime < 17);
    } else {
      setIsOpenNow(currentTime >= 9.5 && currentTime < 18.5);
    }
  }, []);

  return (
    <section id="localizacao" className="py-16 lg:py-24 bg-white border-b border-[#e5e1da]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f0e8] text-dimitri-950 text-xs font-bold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-dimitri-gold" />
            Endereço & Atendimento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dimitri-950 tracking-tight">
            Localização e Horários de Funcionamento
          </h2>
          <p className="mt-4 text-base text-zinc-600 font-normal">
            Estamos situados na Av. Dr. Maurício Cardoso, 1560 em Novo Hamburgo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Store Details & Hours Card */}
          <div className="lg:col-span-5 bg-[#faf8f5] rounded-2xl border border-[#e5e1da] p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            
            <div className="space-y-6">
              
              {/* Live Status Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#e5e1da]">
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span className="text-sm font-bold text-dimitri-950">
                    {isOpenNow ? 'Aberto Agora' : 'Fechado no Momento'}
                  </span>
                </div>
                <span className="text-xs text-zinc-500 font-medium">
                  {isOpenNow ? 'Fecha às 18:30' : 'Abre às 09:30'}
                </span>
              </div>

              {/* Address block */}
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-1">
                  Endereço Oficial
                </p>
                <h3 className="text-lg font-bold text-dimitri-950">
                  {STORE_INFO.address}
                </h3>
                <p className="text-sm text-zinc-600 mt-0.5">
                  {STORE_INFO.neighborhood} — {STORE_INFO.city}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  CEP: {STORE_INFO.cep}
                </p>
              </div>

              {/* Operating Hours Table */}
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-dimitri-gold" />
                  Horários de Funcionamento
                </p>
                <div className="divide-y divide-[#e5e1da] bg-white rounded-xl border border-[#e5e1da] text-xs overflow-hidden">
                  <div className="flex justify-between p-3">
                    <span className="text-zinc-600">Segunda a Sexta</span>
                    <span className="font-bold text-zinc-900">09:30 – 18:30</span>
                  </div>
                  <div className="flex justify-between p-3 bg-zinc-50/50">
                    <span className="text-zinc-600">Sábado</span>
                    <span className="font-bold text-zinc-900">09:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="text-zinc-600">Domingo</span>
                    <span className="font-semibold text-rose-600">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="pt-2 border-t border-[#e5e1da] space-y-2 text-xs text-zinc-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-dimitri-gold flex-shrink-0" />
                  <span>WhatsApp / Telefone: <strong>{STORE_INFO.whatsappDisplay}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Modalidades: Compras na loja, retirada e entrega</span>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#e5e1da] flex flex-col sm:flex-row gap-3">
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-sm bg-[#121212] hover:bg-dimitri-gold text-white hover:text-dimitri-950 font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Ver no Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com o atendimento da Loja Dimitri.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 bg-[#faf8f5] rounded-2xl border border-[#e5e1da] overflow-hidden shadow-sm flex flex-col min-h-[380px]">
            <div className="p-4 bg-white border-b border-[#e5e1da] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-dimitri-gold" />
                <span className="text-xs font-bold text-zinc-900">
                  Av. Dr. Maurício Cardoso, 1560 – Novo Hamburgo, RS
                </span>
              </div>
              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-dimitri-gold hover:underline font-semibold"
              >
                Abrir Mapa Completo →
              </a>
            </div>

            <div className="flex-1 w-full relative min-h-[340px]">
              <iframe
                title="Localização da Loja Dimitri"
                src="https://maps.google.com/maps?q=Loja+Dimitri+Av+Dr+Mauricio+Cardoso+1560+Novo+Hamburgo&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}