import React, { useState, useEffect } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Store, 
  ShoppingBag, 
  Truck, 
  ShieldCheck, 
  MessageCircle, 
  Copy, 
  Clock 
} from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export default function SalesFunnelInteractive({ 
  initialModality = 'retirada', 
  initialProduct = null 
}) {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    modality: initialModality || 'retirada',
    categories: initialProduct ? [initialProduct.category] : ['Camisaria'],
    selectedProduct: initialProduct ? initialProduct.title : '',
    size: 'M',
    customerName: '',
    customerPhone: '',
    customerAddress: '',
    notes: '',
  });

  useEffect(() => {
    if (initialModality) {
      setFormData(prev => ({ ...prev, modality: initialModality }));
    }
    if (initialProduct) {
      setFormData(prev => ({ 
        ...prev, 
        categories: [initialProduct.category],
        selectedProduct: initialProduct.title 
      }));
    }
  }, [initialModality, initialProduct]);

  useEffect(() => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setProtocolNumber(`DMT-${randomCode}`);
  }, []);

  const modalitiesList = [
    {
      id: 'retirada',
      title: 'Retirada na Loja',
      subtitle: 'Separação e retirada no balcão',
      icon: ShoppingBag,
      desc: 'Peças separadas no seu tamanho para retirada rápida na Av. Dr. Maurício Cardoso, 1560.',
    },
    {
      id: 'entrega',
      title: 'Entrega',
      subtitle: 'Envio para seu endereço',
      icon: Truck,
      desc: 'Entrega das peças no seu endereço em Novo Hamburgo e região.',
    },
    {
      id: 'loja',
      title: 'Compras na Loja Física',
      subtitle: 'Visita ao showroom',
      icon: Store,
      desc: 'Atendimento presencial no showroom da Loja Dimitri.',
    },
  ];

  const categoriesList = [
    'Camisaria em Linho Puro',
    'Polos & Casual',
    'Alfaiataria & Blazers',
    'Calças Chino & Jeans',
    'Tricot & Malharia',
    'Linha Donna / Feminina',
    'Calçados em Couro',
  ];

  const sizesList = ['P', 'M', 'G', 'GG', 'XGG', '38', '40', '42', '44', '46', '48'];

  const handleCategoryToggle = (cat) => {
    setFormData(prev => {
      const exists = prev.categories.includes(cat);
      if (exists) {
        return { ...prev, categories: prev.categories.filter(c => c !== cat) };
      } else {
        return { ...prev, categories: [...prev.categories, cat] };
      }
    });
  };

  const getModalityLabel = (id) => {
    switch (id) {
      case 'retirada': return 'Retirada na Loja';
      case 'entrega': return 'Entrega';
      case 'loja': return 'Compras na Loja Física';
      default: return id;
    }
  };

  // Structured WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    let msg = `*REGISTRO DE PEDIDO - LOJA DIMITRI*\n`;
    msg += `*Protocolo:* #${protocolNumber}\n`;
    msg += `---------------------------------\n`;
    msg += `*Modalidade:* ${getModalityLabel(formData.modality)}\n`;
    msg += `*Cliente:* ${formData.customerName || 'Não informado'}\n`;
    msg += `*Telefone / WhatsApp:* ${formData.customerPhone || 'Não informado'}\n`;
    
    if (formData.selectedProduct) {
      msg += `*Peça de Interesse:* ${formData.selectedProduct}\n`;
    }
    
    msg += `*Categorias:* ${formData.categories.join(', ') || 'Geral'}\n`;
    msg += `*Tamanho de Preferência:* ${formData.size}\n`;
    
    if (formData.modality === 'entrega') {
      msg += `*Endereço de Entrega:* ${formData.customerAddress || 'A combinar'}\n`;
    }
    
    if (formData.notes) {
      msg += `*Observações:* ${formData.notes}\n`;
    }

    msg += `---------------------------------\n`;
    msg += `_Loja Dimitri - Av. Dr. Maurício Cardoso, 1560 – Novo Hamburgo_`;
    return msg;
  };

  const handleCopySummary = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    const text = generateWhatsAppMessage();
    const url = `https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div id="funil-pedidos" className="bg-white rounded-2xl border border-[#e5e1da] shadow-2xl overflow-hidden text-zinc-900">
      
      {/* Header with Steps Tracker */}
      <div className="bg-[#121212] text-white p-6 sm:p-8 border-b border-[#262626]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1e1e1e] border border-dimitri-gold/30 text-[10px] font-bold uppercase tracking-wider text-dimitri-gold mb-2">
              <Sparkles className="w-3 h-3" />
              Registro de Pedidos Fora do Balcão
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Registro para Retirada e Entrega
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-light">
              Preencha os dados abaixo para gerar seu protocolo e enviar diretamente para o WhatsApp da Loja Dimitri.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <span className="text-xs text-zinc-400">Etapa</span>
            <span className="px-2.5 py-1 rounded bg-[#202020] border border-[#333] text-xs font-bold text-dimitri-gold">
              {step} de 3
            </span>
          </div>
        </div>

        {/* Step Progress Bar */}
        <div className="grid grid-cols-3 gap-2 mt-6">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i <= step ? 'bg-dimitri-gold' : 'bg-[#2a2a2a]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6 sm:p-8">

        {/* STEP 1: Escolha da Modalidade */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-zinc-900">
                1. Escolha a Modalidade Desejada:
              </h4>
              <p className="text-xs text-zinc-500 mt-1">
                Selecione como deseja ser atendido(a):
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {modalitiesList.map((m) => {
                const IconComponent = m.icon;
                const isSelected = formData.modality === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, modality: m.id })}
                    className={`p-5 rounded-xl border text-left transition-all duration-200 relative cursor-pointer ${
                      isSelected 
                        ? 'border-dimitri-950 bg-amber-50/40 ring-2 ring-dimitri-950 shadow-md' 
                        : 'border-[#e5e1da] hover:border-zinc-400 bg-white'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-dimitri-950 text-white flex items-center justify-center">
                        <Check className="w-3 h-3 text-dimitri-gold" />
                      </span>
                    )}

                    <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-dimitri-950" />
                    </div>

                    <h5 className="font-bold text-zinc-900 text-sm">{m.title}</h5>
                    <span className="text-[11px] font-semibold text-dimitri-gold block mt-0.5">{m.subtitle}</span>
                    <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{m.desc}</p>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-sm bg-[#121212] hover:bg-dimitri-gold text-white hover:text-dimitri-950 font-bold uppercase tracking-wider text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Avançar para Peças & Tamanhos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Peças e Tamanhos */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-zinc-900">
                2. Peças e Tamanho de Interesse:
              </h4>
              <p className="text-xs text-zinc-500 mt-1">
                Selecione as categorias que deseja consultar ou encomendar:
              </p>
            </div>

            {formData.selectedProduct && (
              <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                <span>Peça selecionada: <strong>{formData.selectedProduct}</strong></span>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, selectedProduct: '' })}
                  className="text-xs underline text-amber-800 cursor-pointer"
                >
                  Remover
                </button>
              </div>
            )}

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-2">
                Categorias:
              </label>
              <div className="flex flex-wrap gap-2">
                {categoriesList.map((cat) => {
                  const isChecked = formData.categories.includes(cat);
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => handleCategoryToggle(cat)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-[#121212] text-white border-[#121212]'
                          : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-2">
                Tamanho de Preferência:
              </label>
              <div className="flex flex-wrap gap-2">
                {sizesList.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setFormData({ ...formData, size: s })}
                    className={`w-11 h-10 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                      formData.size === s
                        ? 'bg-dimitri-gold text-dimitri-950 border-dimitri-gold shadow-sm'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:border-zinc-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 rounded text-xs font-semibold text-zinc-600 hover:text-zinc-900 flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-3 rounded-sm bg-[#121212] hover:bg-dimitri-gold text-white hover:text-dimitri-950 font-bold uppercase tracking-wider text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Avançar para Identificação</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Identificação & Envio do Protocolo */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-zinc-900">
                3. Dados para Registro do Pedido:
              </h4>
              <p className="text-xs text-zinc-500 mt-1">
                Gere seu protocolo oficial para envio direto ao WhatsApp da loja:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">
                  Seu Nome:
                </label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:border-dimitri-950 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">
                  Seu WhatsApp:
                </label>
                <input
                  type="tel"
                  placeholder="(51) 90000-0000"
                  value={formData.customerPhone}
                  onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:border-dimitri-950 outline-none"
                />
              </div>
            </div>

            {formData.modality === 'entrega' && (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">
                  Endereço para Entrega (com Bairro e Cidade):
                </label>
                <input
                  type="text"
                  placeholder="Rua, número, complemento e bairro"
                  value={formData.customerAddress}
                  onChange={(e) => setFormData({ ...formData, customerAddress: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-sm focus:border-dimitri-950 outline-none"
                />
              </div>
            )}

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-700 block mb-1">
                Observações ou Detalhes:
              </label>
              <textarea
                rows={2}
                placeholder="Ex: preferência de cor, dia de preferência, etc."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 text-sm focus:border-dimitri-950 outline-none"
              />
            </div>

            {/* Protocol Display Box */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Protocolo Gerado:
                </span>
                <span className="px-2.5 py-0.5 rounded bg-zinc-900 text-dimitri-gold font-mono font-bold text-xs">
                  #{protocolNumber}
                </span>
              </div>
              <p className="text-xs text-zinc-600">
                Modalidade: <strong>{getModalityLabel(formData.modality)}</strong> • Peças: <strong>{formData.categories.join(', ')}</strong> • Tamanho: <strong>{formData.size}</strong>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-100">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2.5 rounded text-xs font-semibold text-zinc-600 hover:text-zinc-900 flex items-center gap-1.5 cursor-pointer order-2 sm:order-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>

              <div className="flex items-center gap-2.5 w-full sm:w-auto order-1 sm:order-2">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="flex-1 sm:flex-none px-4 py-3 rounded-lg border border-zinc-300 hover:bg-zinc-100 text-zinc-700 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? 'Copiado!' : 'Copiar Resumo'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enviar para WhatsApp (51) 98432-7914</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}