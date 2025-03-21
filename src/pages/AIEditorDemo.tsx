
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AIEditorScene } from '@/components/ui-sections/AIEditorScene';
import { EditingLoader } from '@/components/ui/editing-loader';

export default function AIEditorDemo() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async (prompt: string) => {
    setIsProcessing(true);
    setProgress(0);
    setShowResult(false);
    
    // Simulate AI processing
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsProcessing(false);
            setShowResult(true);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  return (
    <div className="container max-w-5xl mx-auto py-12 px-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI Code Editor
      </motion.h1>
      
      <AIEditorScene 
        onSubmit={handleSubmit}
        isProcessing={isProcessing}
      />
      
      {isProcessing && (
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <EditingLoader 
            progress={progress} 
            statusText={progress < 50 ? "Analyzing prompt..." : "Generating code..."}
          />
        </motion.div>
      )}
      
      {showResult && (
        <motion.div 
          className="mt-8 p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4">Generated Result</h3>
          <div className="bg-card p-4 rounded-md font-mono text-sm">
            <pre className="whitespace-pre-wrap">
              {`import React from 'react';
              
// Your AI-generated component would appear here
const GeneratedComponent = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
      <h2 className="text-lg font-medium">AI Generated Component</h2>
      <p className="mt-2 text-muted-foreground">This component was created by AI based on your prompt.</p>
    </div>
  );
};

export default GeneratedComponent;`}
            </pre>
          </div>
        </motion.div>
      )}
    </div>
  );
}
