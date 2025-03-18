
import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../ui-custom/HeroSection';

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
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/60"></div>
      
      <HeroSection 
        title={props.title}
        subtitle={props.subtitle}
        ctaText={props.ctaText}
        secondaryCtaText={props.secondaryCtaText}
        onCtaClick={props.onCtaClick}
        onSecondaryCtaClick={props.onSecondaryCtaClick}
      />
    </motion.div>
  );
};
