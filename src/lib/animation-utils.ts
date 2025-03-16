
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to combine class names with Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Animation variants for framer-motion
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

// Sunset glow animation
export const glowAnimation = (intensity: number = 0.2, duration: number = 3, delay: number = 0) => {
  return {
    initial: { boxShadow: `0 0 10px rgba(249, 115, 22, ${intensity})` },
    animate: {
      boxShadow: [
        `0 0 10px rgba(249, 115, 22, ${intensity})`,
        `0 0 25px rgba(249, 115, 22, ${intensity + 0.3})`,
        `0 0 10px rgba(249, 115, 22, ${intensity})`
      ],
      transition: {
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }
    }
  };
};
