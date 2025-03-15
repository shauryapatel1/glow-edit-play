
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  variant?: 'default' | 'glass' | 'bordered';
  hasAnimation?: boolean;
  delay?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  iconClassName,
  variant = 'default',
  hasAnimation = true,
  delay = 0,
}) => {
  const variants = {
    default: "bg-white dark:bg-navy-800/90 shadow-md hover:shadow-lg",
    glass: "glass-sm hover:shadow-glass",
    bordered: "border border-border bg-background/50 hover:bg-background dark:hover:bg-navy-800/50"
  };

  const iconVariants = {
    default: "bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400",
    glass: "bg-blue-500/10 text-blue-500 backdrop-blur-sm",
    bordered: "bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400"
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
        "rounded-xl p-6 transition-all duration-300",
        variants[variant],
        className
      )}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: delay * 0.1 + 0.2, duration: 0.4 }}
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
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
        className="text-xl font-semibold mb-2"
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
