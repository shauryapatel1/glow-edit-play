
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'secondary' | 'accent' | 'glass' | 'neon' | 'neon-magenta' | 'neon-green';
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
      default: "bg-primary text-white hover:bg-primary/90 active:bg-primary/80",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80",
      accent: "bg-accent text-white hover:bg-accent/90 active:bg-accent/80",
      outline: "border border-primary text-primary bg-transparent hover:bg-primary/10",
      ghost: "text-primary hover:bg-primary/10",
      link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
      glass: "bg-popover/30 backdrop-blur-lg border border-white/10 text-foreground hover:bg-popover/40",
      neon: "bg-[#121212] text-[#00E5FF] border-2 border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.5)] hover:shadow-[0_0_15px_rgba(0,229,255,0.8)] hover:text-white",
      "neon-magenta": "bg-[#121212] text-[#FF3366] border-2 border-[#FF3366] shadow-[0_0_10px_rgba(255,51,102,0.5)] hover:shadow-[0_0_15px_rgba(255,51,102,0.8)] hover:text-white",
      "neon-green": "bg-[#121212] text-[#76FF03] border-2 border-[#76FF03] shadow-[0_0_10px_rgba(118,255,3,0.5)] hover:shadow-[0_0_15px_rgba(118,255,3,0.8)] hover:text-white"
    };
    
    const sizeClasses = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-6 text-base",
      icon: "h-10 w-10",
      wide: "h-10 px-8 py-2 text-sm"
    };
    
    const ringClasses = withRing ? 
      "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/80 focus-visible:ring-offset-background" : "";
    
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
