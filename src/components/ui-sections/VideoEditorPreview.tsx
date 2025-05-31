// In src/components/ui-sections/VideoEditorPreview.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VideoPreview } from '../ui-custom/VideoPreview';
import { ParticleField } from '../effects/ParticleField';
import { GlowingOrb } from '../effects/GlowingOrb';
import { PixelButton } from '../ui-custom/PixelButton';
import { VideoUpload } from '../ui-custom/VideoUpload'; // Assuming this is correctly imported
import { LoadingSpinner } from '@/components/ui/loading-spinner'; // Assuming this exists
import { cn } from '@/lib/utils';

export const VideoEditorPreview: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingError, setProcessingError] = useState<string | null>(null);
  const [processedVideoPath, setProcessedVideoPath] = useState<string | null>(null);
  const [originalUploadedFilename, setOriginalUploadedFilename] = useState<string | null>(null);
  const [videoPreviewKey, setVideoPreviewKey] = useState<number>(Date.now()); // To force re-render of VideoPreview if needed

  const handleUploadSuccess = async (uploadResponse: { message: string; filename: string; path: string }) => {
    console.log("Upload success response from server:", uploadResponse);
    setOriginalUploadedFilename(uploadResponse.filename);
    setProcessedVideoPath(null); // Clear previous processed video
    setProcessingError(null);

    await handleProcessVideo(uploadResponse.filename);
  };

  const handleProcessVideo = async (filename: string) => {
    if (!filename) return;

    setIsProcessing(true);
    setProcessingError(null);

    try {
      const response = await fetch(`http://localhost:3001/process/${filename}`, {
        method: 'POST',
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `Processing failed with status: ${response.status}`);
      }

      console.log('Processing successful:', result);
      setProcessedVideoPath(result.path); // Assuming result.path is like '/videos/processed-file.mp4'
      // Potentially update VideoPreview to show the new video
      // For now, we'll rely on the download link and the status text
      setVideoPreviewKey(Date.now()); // Change key to force re-render VideoPreview if it's showing old content

    } catch (error: any) {
      setProcessingError(error.message || 'An unknown error occurred during processing.');
      console.error('Processing error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* ... (ParticleField and other effects remain the same) ... */}
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
                <div className="ml-4 text-sunset-400 text-sm font-mono">GlowUp Viral Editor - {originalUploadedFilename || "NewProject.mp4"}</div>
              </div>
              
              <div className="flex space-x-3">
                <PixelButton variant="ghost" size="sm">Save Project</PixelButton>
                <PixelButton variant="purple" size="sm" disabled={!processedVideoPath || isProcessing}>Export Final Video</PixelButton>
              </div>
            </div>
            
            {/* Editor Content */}
            <div className="grid grid-cols-4 bg-sunset-500/5 backdrop-blur-lg">
              {/* Left Sidebar - Assets & Trends */}
              <div className="col-span-1 bg-sunset-400/5 border-r border-sunset-400/10 p-4">
                <div className="text-sunset-400 text-sm font-pixel mb-3">Trending Now</div>
                <div className="space-y-2">
                  {['Pixel Transition', 'Glitch Text', 'Duotone Filter'].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="glass-sm rounded-md p-2 flex items-center border border-sunset-400/20"
                    >
                      <div className="w-8 h-8 bg-sunset-400/20 rounded-md mr-2 flex items-center justify-center text-xs font-bold text-sunset-400">
                        #{index + 1}
                      </div>
                      <div className="text-xs text-sunset-400 font-mono">{item}</div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-sunset-400 text-sm font-pixel mt-4 mb-3">Effects</div>
                <div className="grid grid-cols-2 gap-2">
                  {['Neon', 'Retro', 'Glitch', 'Zoom'].map((item, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      className="glass-sm rounded-md p-2 flex items-center justify-center border border-sunset-400/20"
                    >
                      <div className="text-xs text-sunset-400 font-mono">{item}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Main Editor */}
              <div className="col-span-3 p-4">
                <VideoUpload
                  onUploadSuccess={handleUploadSuccess}
                  className="mb-4"
                />

                {isProcessing && (
                  <div className="flex flex-col items-center justify-center p-6 bg-black/30 rounded-lg mb-4">
                    <LoadingSpinner size="lg" />
                    <p className="mt-3 text-white/80 text-center">
                      AI is enhancing your video... Please wait.
                    </p>
                  </div>
                )}

                {processingError && (
                  <div className="p-3 mb-4 bg-red-500/20 border border-red-700 rounded-md text-red-300 text-sm">
                    Error: {processingError}
                  </div>
                )}

                {processedVideoPath && !isProcessing && (
                  <div className="mb-4 p-3 bg-green-500/20 border border-green-700 rounded-md">
                    <p className="text-green-300 text-sm mb-2">
                      Video processing complete! Ready for preview or download.
                    </p>
                    <PixelButton
                      variant="cta"
                      size="sm"
                      onClick={() => {
                        // Attempt to update VideoPreview or open in new tab
                        setVideoPreviewKey(Date.now()); // Force re-render
                        // window.open(`http://localhost:3001${processedVideoPath}`, '_blank');
                        // For now, direct interaction with VideoPreview to play the video is deferred
                      }}
                    >
                      Refresh Preview
                    </PixelButton>
                    <a
                      href={`http://localhost:3001${processedVideoPath}`}
                      download
                      className="ml-3 text-sunset-yellow-400 hover:text-sunset-yellow-300 text-sm underline"
                    >
                      Download Processed Video
                    </a>
                  </div>
                )}

                {/* Video Preview Area */}
                <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4 relative border-2 border-sunset-400">
                  <VideoPreview 
                    key={videoPreviewKey}
                    imageSrc={ (isProcessing || (processedVideoPath && originalUploadedFilename)) ? undefined : "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}
                    videoSrc={processedVideoPath ? `http://localhost:3001${processedVideoPath}` : undefined}
                    overlayText={
                      isProcessing ? "Processing..." :
                      processedVideoPath ? `Processed: ${originalUploadedFilename}` :
                      originalUploadedFilename ? `Uploaded: ${originalUploadedFilename}` :
                      "Your video will appear here"
                    }
                    className="w-full h-full"
                  />
                  
                  {/* Video Controls (simplified or adapted based on actual video playback) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 flex items-center justify-between">
                    <div className="text-white text-xs font-mono">
                      {isProcessing ? "Processing..." : processedVideoPath ? "00:00:00 / 00:00:00 (Simulated)" : "Controls Hidden"}
                    </div>
                    {/* Actual controls might be hidden or disabled if not playing real video */}
                  </div>
                </div>
                
                {/* Timeline with Collaboration */}
                <div className="glass-sm rounded-lg p-3 border border-sunset-400/20">
                  <div className="h-8 flex items-center mb-2 justify-between">
                    <div className="text-sunset-400 text-xs font-pixel">Timeline</div>
                    {/* ... (collaborators icons) ... */}
                  </div>
                  <div className="space-y-2">
                    {['Video', 'Audio', 'Effects', 'Text'].map((track, index) => (
                      <div key={track} className="flex">
                        <div className="w-16 text-sunset-400 text-xs font-mono">{track}</div>
                        <div className="flex-1 h-6 bg-sunset-400/10 rounded-md relative">
                          <motion.div 
                            whileHover={{ scale: 1.02, x: 2 }}
                            className={`absolute top-0 ${index === 0 && processedVideoPath ? 'left-0 right-0 bg-sunset-pink-400/50' : (index === 3 ? 'left-20 right-20 bg-sunset-pink-400/30' : 'left-4 right-4 bg-sunset-400/30')} bottom-0 rounded-sm`}
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
