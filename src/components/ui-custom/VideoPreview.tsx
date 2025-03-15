
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
      "relative rounded-xl overflow-hidden shadow-xl group",
      aspectRatioClasses[aspectRatio],
      glowEffect && "shadow-blue-500/20 dark:shadow-blue-500/10",
      className
    )}>
      {/* Video Preview Image */}
      <img 
        src={imageSrc} 
        alt="Video preview" 
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/70 to-transparent opacity-80 transition-opacity duration-300 flex items-end">
        {overlayText && (
          <div className="p-6 text-white">
            <p className="font-medium text-lg">{overlayText}</p>
          </div>
        )}
      </div>
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-blue-500 border-b-[8px] border-b-transparent ml-1"></div>
        </div>
      </div>
      
      {/* Optional editor controls mockup */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-black/70 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center justify-center h-full gap-4">
          <div className="w-8 h-1 bg-white/50 rounded-full"></div>
          <div className="w-1 h-4 bg-white/50 rounded-full"></div>
          <div className="w-8 h-1 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
