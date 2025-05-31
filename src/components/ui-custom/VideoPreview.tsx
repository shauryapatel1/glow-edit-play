// In src/components/ui-custom/VideoPreview.tsx
import React from 'react';
import { cn } from "@/lib/utils";

interface VideoPreviewProps {
  imageSrc?: string;
  videoSrc?: string; // New prop for video source
  className?: string;
  overlayText?: string;
  aspectRatio?: "square" | "video" | "ultrawide";
  glowEffect?: boolean;
}

export const VideoPreview: React.FC<VideoPreviewProps> = ({
  imageSrc = "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  videoSrc,
  className,
  overlayText,
  aspectRatio = "video",
  glowEffect = true,
}) => {
  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    ultrawide: "aspect-[21/9]"
  };

  const showVideo = videoSrc && videoSrc.trim() !== '';

  return (
    <div className={cn(
      "relative rounded-xl overflow-hidden border-2 group transition-all duration-300",
      aspectRatioClasses[aspectRatio],
      glowEffect ? "border-[#FF1E8C] shadow-[0_0_15px_rgba(255,30,140,0.5)] hover:shadow-[0_0_25px_rgba(255,30,140,0.8)]" : "border-[#1E1E1E]",
      // Removed the "before:absolute before:inset-0 before:bg-[#121212]/30 before:z-10" to ensure video controls are not obscured
      className
    )}>
      {showVideo ? (
        <video
          src={videoSrc}
          controls
          className="w-full h-full object-contain z-0" // z-0, video is base layer
          autoPlay={false}
        />
      ) : (
        <img
          src={imageSrc}
          alt="Video preview"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      
      {/* Gradient Overlay for text, should not block controls */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/30 to-transparent z-20 flex items-end",
        showVideo ? "pointer-events-none" : "" // Allow clicks to pass through to video controls if video is shown
      )}>
        {overlayText && (
          <div className="p-6 text-white">
            <p className="font-pixel text-lg text-[#E0E0E0] group-hover:text-[#FF1E8C] transition-colors duration-300">{overlayText}</p>
          </div>
        )}
      </div>
      
      {/* Custom Play Button: Only show if not showing the video (which has its own controls) */}
      {!showVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#121212]/50 border-2 border-[#FF1E8C] shadow-[0_0_15px_rgba(255,30,140,0.6)] group-hover:shadow-[0_0_25px_rgba(255,30,140,0.8)] group-hover:scale-110 transition-all duration-300">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-[#FF1E8C] border-b-[8px] border-b-transparent ml-1"></div>
          </div>
        </div>
      )}
      
      {/* Neon Corner Accents - keep them above other elements if needed, but ensure they don't block video controls */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#FFA83D] z-30 opacity-80 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-300 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#FFA83D] z-30 opacity-80 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-300 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#FFA83D] z-30 opacity-80 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-300 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#FFA83D] z-30 opacity-80 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};
