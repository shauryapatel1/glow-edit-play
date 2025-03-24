
import { useEffect, useState } from 'react';
import { AnimationControls, useAnimation } from 'framer-motion';

// Hook for animated components that should animate when they become visible
export const useAnimateOnView = (options = { delay: 0.2, duration: 0.5 }) => {
  const controls = useAnimation();
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(ref);
    
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: options.duration,
        delay: options.delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return { ref: setRef, controls, variants };
};

// Hook for staggered animations (children animate one after another)
export const useStaggerAnimation = (): AnimationControls => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  
  return controls;
};

// Hook for refresh animation
export const useRefreshAnimation = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const controls = useAnimation();
  
  const refresh = async (callback?: () => Promise<void>) => {
    setIsRefreshing(true);
    
    // Animate a 360 degree rotation
    await controls.start({
      rotate: 360,
      transition: { duration: 0.6, ease: "easeInOut" }
    });
    
    // Reset rotation without animation
    controls.set({ rotate: 0 });
    
    if (callback) {
      await callback();
    }
    
    setIsRefreshing(false);
  };
  
  return { isRefreshing, refresh, controls };
};
