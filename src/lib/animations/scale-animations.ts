
// Scale animation variants for framer-motion
export const scaleIn = (delay: number = 0) => {
  return {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        delay,
      },
    },
  };
};

export const pixelScaleIn = (delay: number = 0) => {
  return {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "steps(3)",
        delay,
      }
    }
  };
};

// Pulse animation
export const pulseAnimation = (scale: number = 1.05, duration: number = 2, delay: number = 0) => {
  return {
    initial: { scale: 1 },
    animate: {
      scale: [1, scale, 1],
      transition: {
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }
    }
  };
};
