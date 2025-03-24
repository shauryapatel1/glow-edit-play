
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface GlowUpLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal' | 'horizontal';
  withTagline?: boolean;
  onClick?: () => void;
}

export const GlowUpLogo: React.FC<GlowUpLogoProps> = ({
  className,
  size = 'md',
  variant = 'default',
  withTagline = false,
  onClick,
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
  };

  const logoVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      } 
    },
  };

  const barVariants = {
    initial: { 
      opacity: 0,
      x: -20,
    },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  const textVariants = {
    initial: { 
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <Link to="/" className="block" onClick={onClick}>
      <motion.div
        className={cn(
          "relative flex items-center",
          variant === 'horizontal' ? 'flex-row' : 'flex-col',
          className
        )}
        variants={logoVariants}
        initial="initial"
        animate="animate"
      >
        {/* Logo Bar Container */}
        <div className={cn(
          "relative flex items-center justify-center",
          sizeClasses[size]
        )}>
          {/* First gradient bar */}
          <motion.div
            custom={0}
            variants={barVariants}
            className={cn(
              "rounded-full bg-gradient-to-r from-[#FF1E8C] to-[#FFC2FF]",
              size === 'sm' ? 'w-5 h-1.5' : size === 'md' ? 'w-7 h-2' : 'w-10 h-3',
              "transform -rotate-12 -translate-x-1"
            )}
          />
          
          {/* Second gradient bar */}
          <motion.div
            custom={1}
            variants={barVariants}
            className={cn(
              "rounded-full bg-gradient-to-r from-[#FF1E8C] via-[#FF7E5F] to-[#FFA83D]",
              size === 'sm' ? 'w-5 h-1.5' : size === 'md' ? 'w-7 h-2' : 'w-10 h-3',
              "transform rotate-12 translate-x-1"
            )}
          />
        </div>
        
        {/* Logo Text */}
        {variant !== 'minimal' && (
          <motion.div
            className={cn(
              "font-bold tracking-wide",
              size === 'sm' ? 'text-xl mt-1' : size === 'md' ? 'text-2xl mt-1.5' : 'text-4xl mt-2',
              variant === 'horizontal' ? 'ml-3' : ''
            )}
            variants={textVariants}
          >
            GLOWUP
          </motion.div>
        )}
        
        {/* Optional tagline */}
        {withTagline && (
          <motion.div
            className="text-xs text-muted-foreground mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Enhancing Short Videos with AI
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};
