
import React, { useState, useEffect } from 'react';
import { PixelButton } from '../ui-custom/PixelButton';
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
        isScrolled ? "bg-background/80 dark:bg-navy-900/80 backdrop-blur-lg shadow-[2px_2px_0px_0px] shadow-sunset-400/30" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 border-2 border-sunset-400 shadow-[2px_2px_0px_0px] shadow-sunset-400/60 bg-sunset-400/10 flex items-center justify-center text-sunset-400 font-pixel text-xl">
            G
          </div>
          <span className="text-xl font-pixel bg-sunset-gradient bg-clip-text text-transparent">
            GlowUp
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-pixel text-foreground hover:text-sunset-400 transition-colors">Features</a>
          <a href="#how-it-works" className="font-pixel text-foreground hover:text-sunset-400 transition-colors">How It Works</a>
          <a href="#pricing" className="font-pixel text-foreground hover:text-sunset-400 transition-colors">Pricing</a>
          <a href="#testimonials" className="font-pixel text-foreground hover:text-sunset-400 transition-colors">Testimonials</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <PixelButton variant="ghost" size="sm">Log In</PixelButton>
          <PixelButton variant="sunset" size="sm">Sign Up</PixelButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 px-2 py-1 border-2 border-sunset-400/60 bg-sunset-400/10 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-sunset-400 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-sunset-400 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-sunset-400 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/90 backdrop-blur-lg border-t-2 border-sunset-400/30 shadow-[0px_2px_0px_0px] shadow-sunset-400/20 overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#features" className="py-2 font-pixel text-foreground hover:text-sunset-400 transition-colors">Features</a>
          <a href="#how-it-works" className="py-2 font-pixel text-foreground hover:text-sunset-400 transition-colors">How It Works</a>
          <a href="#pricing" className="py-2 font-pixel text-foreground hover:text-sunset-400 transition-colors">Pricing</a>
          <a href="#testimonials" className="py-2 font-pixel text-foreground hover:text-sunset-400 transition-colors">Testimonials</a>
          
          <div className="pt-2 flex flex-col space-y-3">
            <PixelButton variant="ghost" className="justify-center w-full">Log In</PixelButton>
            <PixelButton variant="sunset" className="justify-center w-full">Sign Up</PixelButton>
          </div>
        </div>
      </div>
    </header>
  );
};
