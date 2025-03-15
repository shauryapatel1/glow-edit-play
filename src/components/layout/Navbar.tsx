
import React, { useState, useEffect } from 'react';
import { Button } from '../ui-custom/Button';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/80 dark:bg-navy-900/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold text-xl">
            G
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
            GlowUp
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-blue-500 transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground hover:text-blue-500 transition-colors">How It Works</a>
          <a href="#pricing" className="text-foreground hover:text-blue-500 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-foreground hover:text-blue-500 transition-colors">Testimonials</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="default">Log In</Button>
          <Button variant="default" size="default">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 glass shadow-lg border-t border-border overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#features" className="py-2 text-foreground hover:text-blue-500 transition-colors">Features</a>
          <a href="#how-it-works" className="py-2 text-foreground hover:text-blue-500 transition-colors">How It Works</a>
          <a href="#pricing" className="py-2 text-foreground hover:text-blue-500 transition-colors">Pricing</a>
          <a href="#testimonials" className="py-2 text-foreground hover:text-blue-500 transition-colors">Testimonials</a>
          
          <div className="pt-2 flex flex-col space-y-3">
            <Button variant="ghost" className="justify-center">Log In</Button>
            <Button variant="default" className="justify-center">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
