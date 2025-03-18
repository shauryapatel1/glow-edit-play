
import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  variant?: 'default' | 'glass' | 'bordered';
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  iconClassName,
  variant = 'default',
}) => {
  const variants = {
    default: "bg-card shadow-sm hover:shadow",
    glass: "bg-card/40 backdrop-blur-sm border border-border/10 hover:bg-card/60",
    bordered: "border border-border bg-transparent hover:bg-card/10"
  };

  const iconVariants = {
    default: "bg-primary/10 text-primary",
    glass: "bg-primary/10 text-primary backdrop-blur-sm",
    bordered: "bg-transparent text-primary border border-primary/40"
  };

  return (
    <div 
      className={cn(
        "rounded-lg p-6 transition-all duration-200",
        variants[variant],
        className
      )}
    >
      <div 
        className={cn(
          "w-10 h-10 rounded-md flex items-center justify-center mb-4",
          iconVariants[variant],
          iconClassName
        )}
      >
        {icon}
      </div>
      <h3 className="text-base font-medium mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm">
        {description}
      </p>
    </div>
  );
};
