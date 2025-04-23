import React, { useState } from 'react';
import { Menu, X, ShoppingBag, BarChart2 } from 'lucide-react';
import Logo from '../ui/Logo';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-800 hover:text-primary font-medium">Features</a>
          <a href="#marketplace" className="text-gray-800 hover:text-primary font-medium">Marketplace</a>
          <a href="#community" className="text-gray-800 hover:text-primary font-medium">Community</a>
          <a href="#testimonials" className="text-gray-800 hover:text-primary font-medium">Testimonials</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <a href="#seller" className="btn btn-secondary">
            <ShoppingBag className="inline-block w-4 h-4 mr-2" />
            Sell
          </a>
          <a href="#partner" className="btn btn-primary">
            <BarChart2 className="inline-block w-4 h-4 mr-2" />
            Partner
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#features" 
              className="py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#marketplace" 
              className="py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketplace
            </a>
            <a 
              href="#community" 
              className="py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#testimonials" 
              className="py-2 text-gray-800 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="flex flex-col space-y-3 pt-3 border-t">
              <a href="#seller" className="btn btn-secondary w-full text-center">
                <ShoppingBag className="inline-block w-4 h-4 mr-2" />
                Start Selling
              </a>
              <a href="#partner" className="btn btn-primary w-full text-center">
                <BarChart2 className="inline-block w-4 h-4 mr-2" />
                Join as Partner
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;