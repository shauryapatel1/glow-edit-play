
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <span className="font-medium text-xl">GlowUp</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transform your videos with AI-powered editing.
            </p>
          </div>
          
          {/* Simplified Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About GlowUp
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Pricing
            </Link>
            <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Support
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms & Privacy
            </Link>
          </nav>
        </div>
        
        <Separator className="my-6 opacity-20" />
        
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GlowUp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
