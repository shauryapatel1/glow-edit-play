
import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../ui-custom/HeroSection';
import { FloatingObjects } from '../effects/FloatingObjects';

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
      className="relative"
    >
      {/* Add FloatingObjects component in hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingObjects 
          objectCount={10}
          colors={["#F97316", "#EA384C", "#D946EF"]}
          shapes={['sphere', 'torus']}
          rotationSpeed={0.002}
          floatSpeed={0.3}
          className="opacity-40"
        />
      </div>
      
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
