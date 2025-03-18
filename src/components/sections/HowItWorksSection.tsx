
import React from 'react';
import { motion } from 'framer-motion';
import { VideoPreview } from '../ui-custom/VideoPreview';
import { Separator } from '@/components/ui/separator';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Upload your footage",
      description: "Simply drag and drop your raw video files into GlowUp. We support all popular formats including MP4, MOV, AVI, and more."
    },
    {
      number: "02",
      title: "AI enhancement",
      description: "Our intelligent algorithms analyze your footage and suggest professional enhancements including color grading, transitions, and cuts."
    },
    {
      number: "03",
      title: "Customize & collaborate",
      description: "Fine-tune your video with our intuitive editor, add effects, and invite team members to collaborate in real-time."
    },
    {
      number: "04",
      title: "Export & share",
      description: "Render your masterpiece in various formats and resolutions, then share directly to your favorite platforms."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-2xl md:text-3xl font-medium mt-2 mb-4">Create professional videos in minutes</h2>
          <p className="text-muted-foreground">
            A simple four-step process that transforms raw footage into stunning content.
          </p>
          <Separator className="w-16 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Video Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <VideoPreview 
              imageSrc="https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="rounded-lg overflow-hidden shadow-md"
              overlayText="See how easy it is to create professional videos"
            />
          </motion.div>
          
          {/* Steps */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center text-primary text-sm">
                      {step.number.substring(1)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                    
                    {index < steps.length - 1 && (
                      <div className="ml-4 my-3 h-6 border-l border-primary/20"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
