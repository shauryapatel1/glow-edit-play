
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AIEditor } from '@/components/ui-custom/AIEditor';
import { Hero3DAnimation } from '@/components/effects/Hero3DAnimation';
import { InteractiveScene } from '@/components/effects/InteractiveScene';

interface AIEditorSceneProps {
  className?: string;
  onSubmit?: (prompt: string) => Promise<void>;
  isProcessing?: boolean;
}

export const AIEditorScene: React.FC<AIEditorSceneProps> = ({
  className,
  onSubmit,
  isProcessing = false
}) => {
  return (
    <motion.div 
      className={cn("relative w-full min-h-[600px] overflow-hidden rounded-xl", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background 3D Animation */}
      <div className="absolute inset-0 z-0">
        <InteractiveScene />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
        <motion.div 
          className="mb-8 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-white drop-shadow-md">
            AI-Powered Code Editor
          </h2>
          <p className="text-white/80 max-w-md mx-auto">
            Create, modify, and refactor components with natural language
          </p>
        </motion.div>
        
        <AIEditor
          onSubmit={onSubmit}
          isProcessing={isProcessing}
          className="w-full max-w-2xl"
        />
        
        <motion.div 
          className="mt-8 bg-black/20 backdrop-blur-sm p-4 rounded-lg border border-white/10 w-full max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="text-xs text-white/70 mb-2 font-mono">Example prompts:</div>
          <div className="grid gap-2 text-sm text-white/90">
            <div className="p-2 bg-white/5 rounded hover:bg-white/10 transition-colors cursor-pointer">
              "Create a responsive pricing card component with a hover effect"
            </div>
            <div className="p-2 bg-white/5 rounded hover:bg-white/10 transition-colors cursor-pointer">
              "Add a dark mode toggle to the navbar"
            </div>
            <div className="p-2 bg-white/5 rounded hover:bg-white/10 transition-colors cursor-pointer">
              "Refactor the button component to support more variants"
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
