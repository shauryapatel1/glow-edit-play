
import React from 'react';
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
  color?: 'primary' | 'white' | 'muted';
}

export function LoadingSpinner({ 
  size = 'md', 
  className,
  text,
  color = 'primary'
}: LoadingSpinnerProps) {
  // Pre-compute size classes for better performance
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-10 h-10',
  };
  
  // Pre-compute color classes for better performance
  const colorClasses = {
    primary: 'text-primary',
    white: 'text-white',
    muted: 'text-muted-foreground'
  };

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <Loader className={cn("animate-spin", colorClasses[color], sizeClasses[size])} />
      {text && <p className="mt-2 text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
