
import { useState } from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-uor-purple">
            <span className="hidden sm:inline">UOR Student Dev</span>
            <span className="sm:hidden">UOR Dev</span> Portfolios
          </h1>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('benefits')} className="text-gray-700 hover:text-uor-purple transition-colors">
            Benefits
          </button>
          <button onClick={() => scrollToSection('process')} className="text-gray-700 hover:text-uor-purple transition-colors">
            How It Works
          </button>
          <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-uor-purple transition-colors">
            Pricing
          </button>
          <button onClick={() => scrollToSection('request-form')} className="text-gray-700 hover:text-uor-purple transition-colors">
            Request Form
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-uor-purple transition-colors">
            FAQ
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-uor-purple focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-2 px-4">
          <div className="flex flex-col space-y-2">
            <button onClick={() => scrollToSection('benefits')} className="py-2 text-gray-700 hover:text-uor-purple transition-colors">
              Benefits
            </button>
            <button onClick={() => scrollToSection('process')} className="py-2 text-gray-700 hover:text-uor-purple transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="py-2 text-gray-700 hover:text-uor-purple transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('request-form')} className="py-2 text-gray-700 hover:text-uor-purple transition-colors">
              Request Form
            </button>
            <button onClick={() => scrollToSection('faq')} className="py-2 text-gray-700 hover:text-uor-purple transition-colors">
              FAQ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
