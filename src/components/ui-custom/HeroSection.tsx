
import React from 'react';
import { PixelButton } from './PixelButton';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 hero-gradient">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      {/* Sunset glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sunset-400/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sunset-pink-400/20 rounded-full blur-[120px] -z-10" />
      
      {/* Pixel art decorations */}
      <div className="absolute top-1/3 left-20 w-6 h-6 bg-sunset-400 animate-pixel-shift" />
      <div className="absolute bottom-1/3 right-20 w-8 h-8 bg-sunset-pink-500 animate-pixel-shift" style={{ animationDelay: '0.2s' }} />
      <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-sunset-yellow-400 animate-pixel-shift" style={{ animationDelay: '0.4s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-4 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-pixel text-sunset-400 bg-sunset-400/10 border-2 border-sunset-400 shadow-[2px_2px_0px_0px] shadow-sunset-400/60">
              Introducing GlowUp
            </span>
          </motion.div>
          
          <motion.h1 
            className="mb-6 font-pixel bg-sunset-gradient bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-8 md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/about">
              <PixelButton 
                size="lg" 
                variant="sunset"
                className="animate-glow"
              >
                {ctaText}
              </PixelButton>
            </Link>
            
            {secondaryCtaText && (
              <Link to="/about">
                <PixelButton 
                  size="lg" 
                  variant="outline"
                >
                  {secondaryCtaText}
                </PixelButton>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
