
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui-custom/Button';
import { fadeIn } from '@/lib/animation-utils';

interface AIEditorProps {
  className?: string;
  onSubmit?: (prompt: string) => Promise<void>;
  isProcessing?: boolean;
  placeholder?: string;
}

export const AIEditor: React.FC<AIEditorProps> = ({
  className,
  onSubmit,
  isProcessing = false,
  placeholder = "Ask me to create or modify your components..."
}) => {
  const [prompt, setPrompt] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isProcessing) return;
    
    if (onSubmit) {
      await onSubmit(prompt);
    }
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (!prompt.trim()) {
      setIsExpanded(false);
    }
  };

  return (
    <motion.div 
      className={cn(
        "relative w-full max-w-3xl mx-auto rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm shadow-lg", 
        isExpanded ? "p-4" : "p-3",
        className
      )}
      initial="hidden"
      animate="show"
      variants={fadeIn("up", 0.2)}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 right-0 -mt-3 -mr-3">
        <motion.div 
          className="bg-primary rounded-full p-1 text-primary-foreground shadow-lg"
          animate={{ rotate: isProcessing ? 360 : 0 }}
          transition={{ duration: 2, repeat: isProcessing ? Infinity : 0, ease: "linear" }}
        >
          <Sparkles size={18} />
        </motion.div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          {isExpanded ? (
            <Textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              className="min-h-[100px] w-full resize-none rounded-md border-border/50 bg-background/50 focus:border-primary"
              autoFocus
            />
          ) : (
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onFocus={handleFocus}
              placeholder={placeholder}
              className="w-full border-border/50 bg-background/50 focus:border-primary pr-24"
            />
          )}

          {!isExpanded && (
            <div className="absolute right-1 top-1">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsExpanded(true)}
                className="text-xs font-normal px-2 h-8"
              >
                Expand
              </Button>
            </div>
          )}
        </div>

        {isExpanded && (
          <motion.div 
            className="flex justify-between items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-xs text-muted-foreground">
              Press Enter to submit
            </div>
            <div className="flex space-x-2">
              <Button 
                type="button" 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setPrompt('');
                  setIsExpanded(false);
                }}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                variant="default" 
                size="sm" 
                disabled={!prompt.trim() || isProcessing}
              >
                {isProcessing ? <LoadingSpinner size="sm" /> : 'Generate'}
              </Button>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};
