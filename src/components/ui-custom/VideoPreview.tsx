
import React from 'react';
import { cn } from "@/lib/utils";

interface VideoPreviewProps {
  imageSrc?: string;
  className?: string;
  overlayText?: string;
  aspectRatio?: "square" | "video" | "ultrawide";
  glowEffect?: boolean;
}

export const VideoPreview: React.FC<VideoPreviewProps> = ({
  imageSrc = "https://images.unsplash.com/photo-1616499452581-cc7f8e3dd3c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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

  return (
    <div className={cn(
      "relative rounded-xl overflow-hidden border-2",
      aspectRatioClasses[aspectRatio],
      glowEffect ? "border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.5)]" : "border-[#1E1E1E]",
      "before:absolute before:inset-0 before:bg-[#121212]/30 before:z-10",
      className
    )}>
      {/* Video Preview Image */}
      <img 
        src={imageSrc} 
        alt="Video preview" 
        className="w-full h-full object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-transparent to-[#121212]/30 z-20 opacity-90 flex items-end">
        {overlayText && (
          <div className="p-6 text-white">
            <p className="font-pixel text-lg">{overlayText}</p>
          </div>
        )}
      </div>
      
      {/* Play Button with Neon Effect */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#121212]/50 border-2 border-[#FF3366] shadow-[0_0_15px_rgba(255,51,102,0.6)] group-hover:shadow-[0_0_20px_rgba(255,51,102,0.8)] transition-all duration-300">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-[#FF3366] border-b-[8px] border-b-transparent ml-1"></div>
        </div>
      </div>
      
      {/* Neon Corner Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#76FF03] z-30"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#76FF03] z-30"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#76FF03] z-30"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#76FF03] z-30"></div>
    </div>
  );
};
