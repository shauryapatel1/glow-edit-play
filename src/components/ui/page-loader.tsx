
import React from 'react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from './loading-spinner';

interface PageLoaderProps {
  text?: string;
  isFullscreen?: boolean;
}

export function PageLoader({ text = "Loading", isFullscreen = true }: PageLoaderProps) {
  // Enhanced animation variants with better easing
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }
  };
  
  const contentVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1]
      } 
    },
    exit: { 
      scale: 0.95, 
      opacity: 0, 
      transition: { 
        duration: 0.3, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };
  
  const textVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.2, 
        duration: 0.3, 
        ease: [0.22, 1, 0.36, 1]
      } 
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      transition: { 
        duration: 0.2, 
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  };

  const dotsVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  };

  const dotTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${isFullscreen ? 'fixed inset-0' : 'relative'} z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm`}
    >
      <motion.div
        variants={contentVariants}
        className="flex flex-col items-center justify-center p-6 rounded-lg"
      >
        <LoadingSpinner size="lg" />
        <motion.div className="flex items-center mt-4">
          <motion.span 
            variants={textVariants}
            className="text-lg font-pixel"
          >
            {text}
          </motion.span>
          
          <motion.div className="flex space-x-1 ml-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  ...dotTransition,
                  delay: i * 0.2
                }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
