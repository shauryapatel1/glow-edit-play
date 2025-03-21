
import React from 'react';
import { motion } from 'framer-motion';
import { Loader, Wand2 } from "lucide-react";
import { Progress } from "./progress";

interface EditingLoaderProps {
  progress?: number;
  statusText?: string;
}

export function EditingLoader({ progress = 0, statusText = "Processing video..." }: EditingLoaderProps) {
  const loadingSteps = [
    { emoji: "✨", text: "Applying AI magic" },
    { emoji: "🎨", text: "Enhancing colors" },
    { emoji: "🔊", text: "Optimizing audio" },
    { emoji: "✂️", text: "Smart trimming" },
  ];

  const currentStep = Math.min(
    Math.floor((progress / 100) * loadingSteps.length),
    loadingSteps.length - 1
  );

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg glass-sm">
      <div className="flex items-center justify-center mb-4">
        <Wand2 className="w-5 h-5 mr-2 text-primary animate-pulse" />
        <h3 className="text-lg font-medium">AI Processing</h3>
      </div>
      
      <Progress value={progress} className="h-2 mb-4" />
      
      <p className="text-center text-sm text-muted-foreground mb-2">
        {statusText || loadingSteps[currentStep].text}
      </p>
      
      <div className="flex items-center justify-center mt-4 space-x-2">
        <Loader className="h-4 w-4 animate-spin text-primary" />
        <span className="text-xs">{progress}%</span>
      </div>

      <motion.div 
        className="mt-6 text-xs text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        This may take a few moments
      </motion.div>
    </div>
  );
}
