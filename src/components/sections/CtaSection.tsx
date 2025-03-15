
import React from 'react';
import { Button } from '../ui-custom/Button';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-2xl overflow-hidden shadow-glass">
          <div className="p-8 md:p-12 lg:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
                Ready to transform your video content?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl">
                Join thousands of creators, marketers, and businesses who are elevating their video content with GlowUp's AI-powered editing platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="shadow-lg shadow-blue-500/20"
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                >
                  Schedule Demo
                </Button>
              </div>
              
              <p className="mt-6 text-sm text-muted-foreground">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
