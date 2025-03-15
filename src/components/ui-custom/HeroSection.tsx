
import React from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  secondaryCtaText,
  onCtaClick,
  onSecondaryCtaClick,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-navy-900 dark:to-navy-800 py-20 md:py-28 lg:py-32">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      {/* Blue glow effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-2 inline-block">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-300">
              Introducing GlowUp
            </span>
          </div>
          
          <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent font-bold tracking-tight">
            {title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 md:text-2xl max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="shadow-lg shadow-blue-500/20"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
            
            {secondaryCtaText && (
              <Button 
                size="lg" 
                variant="outline"
                onClick={onSecondaryCtaClick}
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
