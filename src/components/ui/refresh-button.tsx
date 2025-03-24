
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw } from 'lucide-react';
import { Button, ButtonProps } from './button';
import { useRefreshAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

interface RefreshButtonProps extends Omit<ButtonProps, 'onClick'> {
  onRefresh?: () => Promise<void>;
  text?: string;
  showText?: boolean;
}

export const RefreshButton = React.forwardRef<HTMLButtonElement, RefreshButtonProps>(
  ({ className, variant = "outline", size = "icon", onRefresh, text = "Refresh", showText = false, ...props }, ref) => {
    const { isRefreshing, refresh, controls } = useRefreshAnimation();

    const handleRefresh = async () => {
      if (isRefreshing) return;
      await refresh(onRefresh);
    };

    return (
      <Button
        ref={ref}
        variant={variant}
        size={showText ? size : "icon"}
        className={cn(showText ? "" : "w-9 h-9 p-0", className)}
        onClick={handleRefresh}
        disabled={isRefreshing}
        {...props}
      >
        <motion.div animate={controls} className="flex items-center justify-center">
          <RefreshCcw className={cn("h-4 w-4", showText ? "mr-2" : "")} />
          {showText && text}
        </motion.div>
      </Button>
    );
  }
);

RefreshButton.displayName = "RefreshButton";
