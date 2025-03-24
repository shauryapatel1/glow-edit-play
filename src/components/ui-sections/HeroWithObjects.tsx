
import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../ui-custom/HeroSection';
import { LoadingSpinner } from '../ui/loading-spinner';
import { InteractiveScene } from '../effects/InteractiveScene';
import { Hero3DAnimation } from '../effects/Hero3DAnimation';

interface HeroWithObjectsProps {
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryCtaText?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

export const HeroWithObjects: React.FC<HeroWithObjectsProps> = (props) => {
  // Enhanced animation variants with better timing and easing
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="relative z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/60" />
      
      <div className="relative">
        <HeroSection 
          {...props}
        />
        
        <div className="flex">
          {/* Left side: Interactive Scene with improved animations */}
          <motion.div
            variants={itemVariants}
            className="absolute inset-0 -z-10 opacity-70 pointer-events-none"
          >
            <InteractiveScene />
          </motion.div>
          
          {/* Right side: Hero3D Animation with improved animations */}
          <motion.div
            variants={itemVariants}
            className="absolute right-0 top-0 w-full h-full md:w-1/2 -z-10 opacity-80 pointer-events-none"
          >
            <Hero3DAnimation className="h-full" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
