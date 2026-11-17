import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/storeData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-dimitri-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dimitri-100 text-dimitri-800 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-dimitri-gold" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-dimitri-950 tracking-tight">
            Perguntas & Respostas sobre Compras e Atendimento
          </h2>
          <p className="mt-2 text-sm text-dimitri-600">
            Tudo o que você precisa saber sobre o registro de pedidos, retirada rápida e provador em casa.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-lg border border-dimitri-200 overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-dimitri-50 transition-colors"
                >
                  <span className="text-sm font-bold text-dimitri-950">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-dimitri-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-dimitri-600 leading-relaxed border-t border-dimitri-100 bg-dimitri-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
