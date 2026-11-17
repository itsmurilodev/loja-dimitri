import React from 'react';
import { Star, CheckCircle, Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS, STORE_INFO } from '../data/storeData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-dimitri-50 border-b border-dimitri-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dimitri-200 text-dimitri-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            Avaliações Verificadas
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-dimitri-950 tracking-tight">
            Aprovada por quem valoriza elegância e caimento.
          </h2>
          
          {/* Rating Summary Bar */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-base font-extrabold text-dimitri-950">
              4.9 de 5.0
            </span>
            <span className="text-xs text-dimitri-500">
              baseado em avaliações no Google Maps
            </span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-xl border border-dimitri-200 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-dimitri-200" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-dimitri-700 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-dimitri-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-dimitri-950">{t.name}</h4>
                  <p className="text-[11px] text-dimitri-500">{t.city}</p>
                </div>
                <span className="text-[10px] text-dimitri-400 font-medium">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps link badge */}
        <div className="mt-12 text-center">
          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dimitri-700 hover:text-dimitri-950 transition-colors underline"
          >
            <span>Ver todas as avaliações no perfil do Google Maps</span>
          </a>
        </div>

      </div>
    </section>
  );
}
