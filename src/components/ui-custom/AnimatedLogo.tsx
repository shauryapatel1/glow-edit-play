
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface AnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
  onClick?: () => void;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  className,
  size = 'md',
  variant = 'default',
  onClick,
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  const glowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const letters = "GlowUp".split("");

  return (
    <Link to="/" className="block" onClick={onClick}>
      <motion.div
        className={cn(
          "relative flex items-center font-pixel font-bold",
          sizeClasses[size],
          className
        )}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {variant === 'default' && (
          <motion.div
            className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />
        )}

        {letters.map((letter, index) => (
          <motion.span
            key={`logo-letter-${index}`}
            className={cn(
              "relative",
              index < 4 ? "text-primary" : "bg-sunset-gradient bg-clip-text text-transparent"
            )}
            custom={index}
            variants={letterVariants}
            initial="initial"
            animate="animate"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </Link>
  );
};

