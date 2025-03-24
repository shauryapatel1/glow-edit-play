
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
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
    <Link to="/" className={cn("block", className)} onClick={onClick}>
      <GlowUpLogo
        size={size}
        variant={variant === 'minimal' ? 'minimal' : 'default'}
        withTagline={variant === 'default'}
      />
    </Link>
  );
};
