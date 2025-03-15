
import React from 'react';
import { VideoPreview } from '../ui-custom/VideoPreview';

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
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 inline-block">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/20 dark:bg-blue-900/30 dark:text-blue-300">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Create professional videos in minutes</h2>
          <p className="text-xl text-muted-foreground">
            A simple four-step process that transforms raw footage into stunning content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Preview */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-70 dark:bg-blue-900/30"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-full opacity-70 dark:bg-purple-900/30"></div>
            
            <VideoPreview 
              imageSrc="https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="relative z-10"
              overlayText="See how easy it is to create professional videos"
            />
          </div>
          
          {/* Steps */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    
                    {index < steps.length - 1 && (
                      <div className="ml-6 mt-4 h-8 border-l-2 border-dashed border-blue-100 dark:border-blue-900/50"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
