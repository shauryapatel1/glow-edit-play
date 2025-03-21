
// Fade animation variants for framer-motion
export const fadeIn = (direction: "up" | "down" | "left" | "right" = "up", delay: number = 0) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay,
      },
    },
  };
};

// Pixel-style animation variant
export const pixelFadeIn = (delay: number = 0) => {
  return {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "steps(5)",
        delay,
      }
    }
  };
};

// Glitch effect animation
export const glitchEffect = (delay: number = 0) => {
  return {
    hidden: { opacity: 0, x: 0 },
    show: {
      opacity: 1,
      x: [0, -5, 5, -3, 3, 0],
      y: [0, 3, -3, 2, -2, 0],
      transition: {
        x: {
          duration: 0.4,
          repeat: 2,
          repeatType: "mirror",
          ease: "steps(3)",
          delay,
        },
        y: {
          duration: 0.4,
          repeat: 2,
          repeatType: "mirror",
          ease: "steps(3)",
          delay,
        },
        opacity: {
          duration: 0.3,
          delay,
        }
      }
    }
  };
};
