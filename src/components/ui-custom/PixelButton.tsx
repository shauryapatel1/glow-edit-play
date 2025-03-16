
import React from 'react';
import { cn } from "@/lib/utils";

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'sunset' | 'purple';
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
      default: "bg-sunset-400 text-white border-sunset-500 shadow-sunset-500/60 hover:bg-sunset-500",
      outline: "bg-transparent text-sunset-400 border-sunset-400 shadow-sunset-400/60 hover:bg-sunset-400/10",
      ghost: "bg-transparent text-sunset-400 border-transparent shadow-transparent hover:bg-sunset-400/10 hover:border-sunset-400/50 hover:shadow-sunset-400/30",
      sunset: "bg-gradient-to-r from-sunset-400 via-sunset-500 to-sunset-600 text-white border-sunset-600 shadow-sunset-600/60",
      purple: "bg-sunset-pink-500 text-white border-sunset-pink-600 shadow-sunset-pink-600/60 hover:bg-sunset-pink-600",
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

export { PixelButton };
