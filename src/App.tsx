import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import MarketplacePreview from './components/sections/MarketplacePreview';
import Community from './components/sections/Community';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/layout/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Features />
        <MarketplacePreview />
        <Community />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;