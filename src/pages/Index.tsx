
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/ui-custom/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { VideoPreview } from '@/components/ui-custom/VideoPreview';
import { Button } from '@/components/ui-custom/Button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection 
          title="Transform Your Videos with AI-Powered Editing"
          subtitle="Create professional-grade videos in minutes with our intuitive browser-based platform. No installation required."
          ctaText="Start Free Trial"
          secondaryCtaText="Watch Demo"
        />
        
        {/* Video Editor Preview */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-12 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
              
              {/* Editor Preview */}
              <div className="relative glass rounded-xl shadow-xl overflow-hidden border border-white/20">
                {/* Editor Toolbar */}
                <div className="bg-navy-800/90 backdrop-blur-md p-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-white text-sm">GlowUp Editor - My Awesome Video.mp4</div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="glass" size="sm">Save</Button>
                    <Button variant="secondary" size="sm">Export</Button>
                  </div>
                </div>
                
                {/* Editor Content */}
                <div className="grid grid-cols-4 bg-navy-900/60 backdrop-blur-lg">
                  {/* Left Sidebar - Assets */}
                  <div className="col-span-1 bg-navy-800/50 border-r border-white/5 p-4">
                    <div className="text-white text-sm font-medium mb-3">Assets</div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="glass-sm rounded-md p-2 flex items-center">
                          <div className="w-8 h-8 bg-navy-700 rounded-md mr-2"></div>
                          <div className="text-xs text-white">Video {item}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-white text-sm font-medium mt-4 mb-3">Effects</div>
                    <div className="grid grid-cols-2 gap-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="glass-sm rounded-md p-2 flex items-center justify-center">
                          <div className="text-xs text-white">Effect {item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Main Editor */}
                  <div className="col-span-3 p-4">
                    {/* Preview Area */}
                    <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4 relative">
                      <VideoPreview 
                        imageSrc="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        className="w-full h-full"
                        overlayText=""
                      />
                      
                      {/* Video Controls */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex items-center justify-between">
                        <div className="text-white text-xs">00:01:24 / 00:03:42</div>
                        <div className="flex space-x-2 text-white">
                          <button className="p-1" aria-label="Play/Pause">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="6" y="4" width="4" height="16"></rect>
                              <rect x="14" y="4" width="4" height="16"></rect>
                            </svg>
                          </button>
                          <button className="p-1" aria-label="Volume">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                            </svg>
                          </button>
                          <button className="p-1" aria-label="Fullscreen">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <polyline points="9 21 3 21 3 15"></polyline>
                              <line x1="21" y1="3" x2="14" y2="10"></line>
                              <line x1="3" y1="21" x2="10" y2="14"></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline */}
                    <div className="glass-sm rounded-lg p-3">
                      <div className="h-8 flex items-center mb-2">
                        <div className="text-white text-xs mr-2">Tracks</div>
                        <div className="flex-1 h-0.5 bg-white/20"></div>
                      </div>
                      <div className="space-y-2">
                        {['Video', 'Audio', 'Effects'].map((track) => (
                          <div key={track} className="flex">
                            <div className="w-16 text-white text-xs">{track}</div>
                            <div className="flex-1 h-6 bg-navy-700 rounded-md relative">
                              <div className="absolute top-0 left-4 bottom-0 right-4 bg-blue-500/30 rounded-sm"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* CTA Section */}
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
