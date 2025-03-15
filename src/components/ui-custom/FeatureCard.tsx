
import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  variant?: 'default' | 'glass' | 'bordered';
  hasAnimation?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  iconClassName,
  variant = 'default',
  hasAnimation = true,
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
    <div 
      className={cn(
        "rounded-xl p-6 transition-all duration-300",
        variants[variant],
        hasAnimation && "hover:-translate-y-1",
        className
      )}
    >
      <div 
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
          iconVariants[variant],
          iconClassName
        )}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
