
import React from 'react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from './loading-spinner';

interface PageLoaderProps {
  text?: string;
  isFullscreen?: boolean;
}

export function PageLoader({ text = "Loading", isFullscreen = true }: PageLoaderProps) {
  // Performance optimization: avoid excessive animations
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  const contentVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 }
  };
  
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.25 }}
      className={`${isFullscreen ? 'fixed inset-0' : 'relative'} z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm`}
    >
      <motion.div
        variants={contentVariants}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center p-6 rounded-lg"
      >
        <LoadingSpinner size="lg" />
        <motion.span 
          variants={textVariants}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg font-pixel"
        >
          {text}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
