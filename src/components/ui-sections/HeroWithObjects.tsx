
import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../ui-custom/HeroSection';
import { LoadingSpinner } from '../ui/loading-spinner';
import { InteractiveScene } from '../effects/InteractiveScene';

interface HeroWithObjectsProps {
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

export const HeroWithObjects: React.FC<HeroWithObjectsProps> = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/60" />
      
      <div className="relative">
        <HeroSection 
          {...props}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute inset-0 -z-10 opacity-70 pointer-events-none"
        >
          <InteractiveScene />
        </motion.div>
      </div>
    </motion.div>
  );
};
