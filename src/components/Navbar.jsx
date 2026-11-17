import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  Menu, 
  X, 
  MessageCircle, 
  Sparkles, 
  ChevronRight 
} from 'lucide-react';
import Logo from './Logo';
import { STORE_INFO } from '../data/storeData';

export default function Navbar({ onOpenFunnel }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '3 Formas de Comprar', href: '#modalidades' },
    { label: 'Coleções & Peças', href: '#catalogo' },
    { label: 'A Loja Física', href: '#espaco' },
    { label: 'Localização & Horários', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      {/* Top Status Bar */}
      <div className="bg-[#0a0a0a] text-white text-xs border-b border-[#222222] px-4 py-2 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 text-[10px] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Loja Aberta Hoje
            </span>
            <span className="text-[#444] hidden md:inline">|</span>
            <span className="text-zinc-300 hidden md:inline font-light">
              Av. Dr. Maurício Cardoso, 1560 – Novo Hamburgo (Fecha às 18:30)
            </span>
          </div>

          <div className="flex items-center gap-4 text-zinc-300 text-[11px]">
            <a 
              href={`tel:${STORE_INFO.whatsappRaw}`} 
              className="hover:text-dimitri-gold transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-dimitri-gold" />
              <span>{STORE_INFO.phoneDisplay}</span>
            </a>
            <span className="text-[#333]">|</span>
            <a 
              href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Acessei o site da Loja Dimitri e gostaria de tirar uma dúvida.')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dimitri-gold hover:text-dimitri-gold-light font-medium inline-flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3 fill-dimitri-gold/20" />
              <span>WhatsApp: {STORE_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#121212]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#262626]' 
            : 'bg-[#121212] py-4 border-b border-[#1f1f1f]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <a href="#" className="flex-shrink-0 group">
              <Logo size="default" light={true} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.14em] font-semibold text-zinc-300 hover:text-dimitri-gold transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dimitri-gold transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              {/* Funnel Trigger CTA */}
              <button
                type="button"
                onClick={() => onOpenFunnel('retirada')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-dimitri-gold hover:bg-dimitri-gold-light text-dimitri-950 font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-md hover:shadow-gold-glow cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Registrar Pedido</span>
              </button>

              {/* Direct WhatsApp Pill */}
              <a
                href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com o atendimento da Loja Dimitri.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-[#1e1e1e] hover:bg-[#282828] text-emerald-400 border border-[#333] transition-colors"
                title="Conversar no WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zinc-300 hover:text-white hover:bg-[#222] rounded transition-colors cursor-pointer"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#141414] border-b border-[#262626] animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-sm font-semibold tracking-wider uppercase text-zinc-300 hover:text-dimitri-gold py-2 border-b border-[#222]"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </a>
                ))}
              </nav>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenFunnel('retirada');
                  }}
                  className="w-full py-3 px-4 rounded bg-dimitri-gold text-dimitri-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Fazer Pedido / Retirada</span>
                </button>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Acessei o site da Loja Dimitri.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded bg-emerald-950/70 border border-emerald-800 text-emerald-400 font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Atendimento WhatsApp: (51) 98432-7914</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}