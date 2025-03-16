
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface PixelCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  variant?: 'orange' | 'purple' | 'yellow';
  hasAnimation?: boolean;
  delay?: number;
}

export const PixelCard: React.FC<PixelCardProps> = ({
  icon,
  title,
  description,
  className,
  iconClassName,
  variant = 'orange',
  hasAnimation = true,
  delay = 0,
}) => {
  const variants = {
    orange: "bg-white border-sunset-400 shadow-sunset-400/60",
    purple: "bg-white border-sunset-pink-500 shadow-sunset-pink-500/60",
    yellow: "bg-white border-sunset-yellow-400 shadow-sunset-yellow-400/60"
  };

  const iconVariants = {
    orange: "bg-sunset-400/10 text-sunset-400",
    purple: "bg-sunset-pink-500/10 text-sunset-pink-500",
    yellow: "bg-sunset-yellow-400/10 text-sunset-yellow-400"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.1,
        type: "spring",
        stiffness: 50 
      }}
      whileHover={hasAnimation ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={cn(
        "rounded-md p-6 transition-all duration-300 border-2 shadow-[4px_4px_0px_0px]",
        variants[variant],
        className
      )}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: delay * 0.1 + 0.2, duration: 0.4 }}
        className={cn(
          "w-12 h-12 rounded-md flex items-center justify-center mb-4 border border-current",
          iconVariants[variant],
          iconClassName
        )}
      >
        {icon}
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay * 0.1 + 0.3, duration: 0.4 }}
        className="text-base font-pixel mb-2"
      >
        {title}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.1 + 0.4, duration: 0.4 }}
        className="text-muted-foreground"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
