
import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Lock, Shield } from "lucide-react";

interface AuthLoaderProps {
  type?: 'login' | 'signup' | 'verification';
}

export function AuthLoader({ type = 'login' }: AuthLoaderProps) {
  const getIcon = () => {
    switch (type) {
      case 'login':
        return <Lock className="w-8 h-8 text-primary" />;
      case 'signup':
        return <Fingerprint className="w-8 h-8 text-primary" />;
      case 'verification':
        return <Shield className="w-8 h-8 text-primary" />;
    }
  };

  const getText = () => {
    switch (type) {
      case 'login':
        return "Logging you in...";
      case 'signup':
        return "Creating your account...";
      case 'verification':
        return "Verifying credentials...";
    }
  };

  const iconVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };

  const pulseVariants = {
    initial: { opacity: 0, scale: 0.6 },
    animate: { 
      opacity: [0.2, 0.4, 0.2], 
      scale: [0.8, 1.2, 0.8], 
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      } 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="relative mb-6">
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 rounded-full bg-primary/20"
        />
        <motion.div
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="relative z-10"
        >
          {getIcon()}
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <p className="text-lg font-medium">{getText()}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Please wait while we secure your session
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="flex space-x-2 mt-8"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="w-2 h-2 rounded-full bg-primary"
            style={{
              animation: `bounce-subtle 1.2s ease-in-out ${i * 0.2}s infinite`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
