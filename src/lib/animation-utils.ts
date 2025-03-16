
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

// New animation variants
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
