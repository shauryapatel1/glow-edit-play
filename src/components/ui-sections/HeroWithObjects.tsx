
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
      className="relative z-10"
    >
      {/* Floating Objects in hero section - reduced count since we have InteractiveScene */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingObjects 
          objectCount={8} // Reduced from 10
          colors={["#F97316", "#00E5FF", "#FF3366"]}
          shapes={['sphere', 'torus']}
          rotationSpeed={0.003} // Increased slightly
          floatSpeed={0.4} // Increased slightly
          className="opacity-30" // Reduced opacity
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
