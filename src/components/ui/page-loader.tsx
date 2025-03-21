
import React from 'react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from './loading-spinner';

interface PageLoaderProps {
  text?: string;
}

export function PageLoader({ text = "Loading" }: PageLoaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center p-6 rounded-lg"
      >
        <LoadingSpinner size="lg" />
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg font-pixel"
        >
          {text}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
