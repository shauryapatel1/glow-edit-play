
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  isPresent?: boolean;
  mode?: "wait" | "sync" | "popLayout";
}

const transitionVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export function PageTransition({
  children,
  className,
  isPresent = true,
  mode = "wait"
}: PageTransitionProps) {
  return (
    <AnimatePresence mode={mode}>
      {isPresent && (
        <motion.div
          className={cn("w-full", className)}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
