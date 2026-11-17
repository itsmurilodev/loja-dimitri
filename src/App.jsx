import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ModalitiesSection from './components/ModalitiesSection';
import SalesFunnelInteractive from './components/SalesFunnelInteractive';
import ProductCatalog from './components/ProductCatalog';
import StoreExperience from './components/StoreExperience';
import TestimonialsSection from './components/TestimonialsSection';
import LocationAndHours from './components/LocationAndHours';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [funnelModality, setFunnelModality] = useState('retirada');
  const [funnelProduct, setFunnelProduct] = useState(null);

  const scrollToFunnel = (modality = 'retirada', product = null) => {
    setFunnelModality(modality);
    if (product) {
      setFunnelProduct(product);
    }
    const el = document.getElementById('funil-pedidos-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-zinc-900 font-sans w-full max-w-full overflow-x-hidden selection:bg-dimitri-gold selection:text-white">
      
      {/* Navigation */}
      <Navbar 
        onOpenFunnel={(modality) => scrollToFunnel(modality || 'retirada')}
      />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero 
          onOpenFunnel={(modality) => scrollToFunnel(modality || 'retirada')}
          onExploreCatalog={() => {
            const el = document.getElementById('catalogo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* The 3 Verified Purchase Modalities (Compras na loja, retirada e entrega) */}
        <ModalitiesSection 
          onSelectModality={(modalityId) => {
            if (modalityId === 'loja') {
              const el = document.getElementById('localizacao');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
              scrollToFunnel(modalityId);
            }
          }}
        />

        {/* The Interactive Sales Funnel & Order Registration */}
        <section id="funil-pedidos-section" className="py-14 lg:py-20 bg-[#121212] text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SalesFunnelInteractive 
              initialModality={funnelModality}
              initialProduct={funnelProduct}
            />
          </div>
        </section>

        {/* Product Catalog & Vitrine */}
        <ProductCatalog 
          onSelectProductForFunnel={(product) => scrollToFunnel('retirada', product)}
        />

        {/* Physical Boutique & Showroom Experience */}
        <StoreExperience 
          onBookVisit={() => {
            const el = document.getElementById('localizacao');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Verified Social Proof & Google Maps Reviews */}
        <TestimonialsSection />

        {/* Exact Location, Hours & Google Maps */}
        <LocationAndHours />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenFunnel={(modality) => scrollToFunnel(modality || 'retirada')}
      />

      {/* Floating CTA & WhatsApp widget */}
      <FloatingActions 
        onOpenFunnel={(modality) => scrollToFunnel(modality || 'retirada')}
      />

    </div>
  );
}