
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedLogo } from '@/components/ui-custom/AnimatedLogo';
import { Link } from 'react-router-dom';

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
        isScrolled ? "bg-background/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <AnimatedLogo variant={isScrolled ? 'minimal' : 'default'} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="#features" className="text-foreground hover:text-primary transition-colors">Features</Link>
          <Link to="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link to="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</Link>
          <Link to="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-foreground hover:text-primary transition-colors">Log In</Link>
          <Link to="/signup" className="btn-primary">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 px-2 py-1"
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
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="#features" className="py-2 text-foreground hover:text-primary transition-colors">Features</Link>
          <Link to="#how-it-works" className="py-2 text-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link to="#pricing" className="py-2 text-foreground hover:text-primary transition-colors">Pricing</Link>
          <Link to="#testimonials" className="py-2 text-foreground hover:text-primary transition-colors">Testimonials</Link>
          
          <div className="pt-2 flex flex-col space-y-3">
            <Link to="/login" className="py-2 text-foreground hover:text-primary transition-colors">Log In</Link>
            <Link to="/signup" className="btn-primary">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
