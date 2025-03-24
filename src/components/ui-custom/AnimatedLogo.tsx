
import React from 'react';
import { cn } from '@/lib/utils';
import { GlowUpLogo } from './GlowUpLogo';

interface AnimatedLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'minimal';
  onClick?: () => void;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  className,
  size = 'md',
  variant = 'default',
  onClick,
}) => {
  return (
    <div className={cn("block", className)} onClick={onClick}>
      <GlowUpLogo
        size={size}
        variant={variant === 'minimal' ? 'minimal' : 'default'}
        withTagline={variant === 'default'}
      />
    </div>
  );
};
