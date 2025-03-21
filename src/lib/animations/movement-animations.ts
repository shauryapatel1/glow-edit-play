
// Stagger container for sequenced animations
export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// Float animation
export const floatAnimation = (amplitude: number = 20, duration: number = 3, delay: number = 0) => {
  return {
    initial: { y: 0 },
    animate: {
      y: [0, -amplitude, 0],
      transition: {
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        delay,
      }
    }
  };
};

// Rotate animation
export const rotateAnimation = (duration: number = 10, delay: number = 0) => {
  return {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        delay,
      }
    }
  };
};

// Pixel shift animation
export const pixelShiftAnimation = (amplitude: number = 2, duration: number = 0.5, delay: number = 0) => {
  return {
    initial: { x: 0, y: 0 },
    animate: {
      x: [0, amplitude, 0, amplitude, 0],
      y: [0, 0, amplitude, amplitude, 0],
      transition: {
        duration,
        ease: "steps(4)",
        repeat: Infinity,
        delay,
      }
    }
  };
};
