
import React from 'react';
import { motion } from 'framer-motion';
import { VideoPreview } from '../ui-custom/VideoPreview';
import { ParticleField } from '../effects/ParticleField';
import { GlowingOrb } from '../effects/GlowingOrb';
import { PixelButton } from '../ui-custom/PixelButton';

export const VideoEditorPreview: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleField density={20} speed={0.3} color="#F97316" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-12 w-24 h-24 bg-sunset-400/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-sunset-pink-400/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
          
          <div className="absolute -top-20 -right-20 w-40 h-40">
            <GlowingOrb size={20} color="#D946EF" position={[0, 0, 0]} />
          </div>
          
          {/* Editor Preview */}
          <motion.div 
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="relative glass rounded-xl shadow-xl overflow-hidden border-2 border-sunset-400/30"
          >
            {/* Editor Toolbar */}
            <div className="bg-sunset-400/5 backdrop-blur-md p-3 border-b border-sunset-400/20 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-sunset-500 animate-pulse-slow"></div>
                <div className="w-3 h-3 rounded-full bg-sunset-yellow-400 animate-pulse-slow" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-3 h-3 rounded-full bg-sunset-pink-500 animate-pulse-slow" style={{ animationDelay: "0.4s" }}></div>
                <div className="ml-4 text-sunset-400 text-sm font-mono">GlowUp Editor - My Awesome Video.mp4</div>
              </div>
              
              <div className="flex space-x-3">
                <PixelButton variant="ghost" size="sm">Save</PixelButton>
                <PixelButton variant="purple" size="sm">Export</PixelButton>
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="grid grid-cols-4 bg-sunset-500/5 backdrop-blur-lg">
              {/* Left Sidebar - Assets */}
              <div className="col-span-1 bg-sunset-400/5 border-r border-sunset-400/10 p-4">
                <div className="text-sunset-400 text-sm font-pixel mb-3">Assets</div>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <motion.div 
                      key={item}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="glass-sm rounded-md p-2 flex items-center border border-sunset-400/20"
                    >
                      <div className="w-8 h-8 bg-sunset-400/20 rounded-md mr-2"></div>
                      <div className="text-xs text-sunset-400 font-mono">Video {item}</div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-sunset-400 text-sm font-pixel mt-4 mb-3">Effects</div>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div 
                      key={item}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      className="glass-sm rounded-md p-2 flex items-center justify-center border border-sunset-400/20"
                    >
                      <div className="text-xs text-sunset-400 font-mono">Effect {item}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Main Editor */}
              <div className="col-span-3 p-4">
                {/* Preview Area */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4 relative border-2 border-sunset-400">
                  <VideoPreview 
                    imageSrc="https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    className="w-full h-full"
                    overlayText=""
                  />
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex items-center justify-between">
                    <div className="text-white text-xs font-mono">00:01:24 / 00:03:42</div>
                    <div className="flex space-x-2 text-white">
                      <motion.button 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1" 
                        aria-label="Play/Pause"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="6" y="4" width="4" height="16"></rect>
                          <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1" 
                        aria-label="Volume"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        </svg>
                      </motion.button>
                      <motion.button 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1" 
                        aria-label="Fullscreen"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <polyline points="9 21 3 21 3 15"></polyline>
                          <line x1="21" y1="3" x2="14" y2="10"></line>
                          <line x1="3" y1="21" x2="10" y2="14"></line>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                {/* Timeline */}
                <div className="glass-sm rounded-lg p-3 border border-sunset-400/20">
                  <div className="h-8 flex items-center mb-2">
                    <div className="text-sunset-400 text-xs font-pixel mr-2">Tracks</div>
                    <div className="flex-1 h-0.5 bg-sunset-400/20"></div>
                  </div>
                  <div className="space-y-2">
                    {['Video', 'Audio', 'Effects'].map((track) => (
                      <div key={track} className="flex">
                        <div className="w-16 text-sunset-400 text-xs font-mono">{track}</div>
                        <div className="flex-1 h-6 bg-sunset-400/10 rounded-md relative">
                          <motion.div 
                            whileHover={{ scale: 1.02, x: 2 }}
                            className="absolute top-0 left-4 bottom-0 right-4 bg-sunset-400/30 rounded-sm"
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
