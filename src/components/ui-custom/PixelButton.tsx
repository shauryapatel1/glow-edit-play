
import React from 'react';
import { cn } from "@/lib/utils";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'sunset' | 'purple' | 'neon' | 'neon-magenta' | 'neon-green';
  size?: 'default' | 'sm' | 'lg' | 'wide';
  withAnimation?: boolean;
  children: React.ReactNode;
}

export const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ 
    className,
    variant = 'default',
    size = 'default',
    withAnimation = true,
    children,
    ...props
  }, ref) => {
    const baseClasses = "font-pixel inline-flex items-center justify-center transition-all duration-100 border-2 shadow-[4px_4px_0px_0px] active:translate-y-1 active:translate-x-1 active:shadow-[2px_2px_0px_0px]";
    
    const variantClasses = {
      default: "bg-primary text-white border-primary shadow-primary/60 hover:bg-primary/90",
      outline: "bg-transparent text-primary border-primary shadow-primary/60 hover:bg-primary/10",
      ghost: "bg-transparent text-primary border-transparent shadow-transparent hover:bg-primary/10 hover:border-primary/50 hover:shadow-primary/30",
      sunset: "bg-gradient-to-r from-sunset-400 via-sunset-500 to-sunset-600 text-white border-sunset-600 shadow-sunset-600/60",
      purple: "bg-sunset-pink-500 text-white border-sunset-pink-600 shadow-sunset-pink-600/60 hover:bg-sunset-pink-600",
      neon: "bg-[#121212] text-[#00E5FF] border-[#00E5FF] shadow-[#00E5FF]/60 hover:bg-[#121212]/80 animate-[neonPulse_2s_infinite]",
      "neon-magenta": "bg-[#121212] text-[#FF3366] border-[#FF3366] shadow-[#FF3366]/60 hover:bg-[#121212]/80",
      "neon-green": "bg-[#121212] text-[#76FF03] border-[#76FF03] shadow-[#76FF03]/60 hover:bg-[#121212]/80"
    };
    
    const sizeClasses = {
      default: "h-10 px-4 py-2 text-xs",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-6 text-sm",
      wide: "h-10 px-8 py-2 text-xs"
    };
    
    const animationClasses = withAnimation ? "hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px]" : "";
    
    return (
      <button
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
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

PixelButton.displayName = "PixelButton";
