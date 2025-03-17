
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'secondary' | 'accent' | 'glass' | 'neon';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'wide';
  asChild?: boolean;
  withRing?: boolean;
  withAnimation?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant = 'default',
    size = 'default',
    withRing = true,
    withAnimation = true,
    children,
    ...props
  }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";
    
    const variantClasses = {
      default: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
      secondary: "bg-teal-400 text-navy-800 hover:bg-teal-500 active:bg-teal-600",
      accent: "bg-purple-400 text-white hover:bg-purple-500 active:bg-purple-600",
      outline: "border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50 dark:hover:bg-navy-800",
      ghost: "text-blue-500 hover:bg-blue-50 dark:hover:bg-navy-800",
      link: "text-blue-500 underline-offset-4 hover:underline p-0 h-auto",
      glass: "bg-white/70 backdrop-blur-lg border border-white/20 text-navy-800 hover:bg-white/80 dark:bg-navy-800/50 dark:text-white dark:hover:bg-navy-800/60",
      neon: "bg-[#121212] text-[#00E5FF] border-2 border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.5)] hover:shadow-[0_0_15px_rgba(0,229,255,0.8)] hover:text-white"
    };
    
    const sizeClasses = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10",
      wide: "h-10 px-8 py-2 text-sm"
    };
    
    const ringClasses = withRing ? 
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500/80 focus-visible:ring-offset-background" : "";
    
    const animationClasses = withAnimation ? "hover:-translate-y-1 transition-transform" : "";
    
    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          ringClasses,
          animationClasses,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
