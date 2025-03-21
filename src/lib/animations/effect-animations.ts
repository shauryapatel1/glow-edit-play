
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
