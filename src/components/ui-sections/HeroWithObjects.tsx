
import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../ui-custom/HeroSection';
import { LoadingSpinner } from '../ui/loading-spinner';

// Lazy load the 3D animation component for better performance
const Hero3DAnimation = lazy(() => import('../effects/Hero3DAnimation').then(mod => ({ default: mod.Hero3DAnimation })));

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
      
      <div className="relative">
        <HeroSection 
          title={props.title}
          subtitle={props.subtitle}
          ctaText={props.ctaText}
          secondaryCtaText={props.secondaryCtaText}
          onCtaClick={props.onCtaClick}
          onSecondaryCtaClick={props.onSecondaryCtaClick}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute inset-0 -z-10 opacity-70 pointer-events-none"
        >
          <Suspense fallback={<LoadingSpinner size="lg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}>
            <Hero3DAnimation />
          </Suspense>
        </motion.div>
      </div>
    </motion.div>
  );
};
