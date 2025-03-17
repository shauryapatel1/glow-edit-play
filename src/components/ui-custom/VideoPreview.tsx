
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
      "relative rounded-xl overflow-hidden border-2 border-sunset-400/50 shadow-[4px_4px_0px_0px] shadow-sunset-400/20",
      aspectRatioClasses[aspectRatio],
      glowEffect && "shadow-sunset-400/20 dark:shadow-sunset-400/10",
      className
    )}>
      {/* Video Preview Image */}
      <img 
        src={imageSrc} 
        alt="Video preview" 
        className="w-full h-full object-cover"
      />
      
      {/* Simple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-800/70 to-transparent opacity-80 flex items-end">
        {overlayText && (
          <div className="p-6 text-white">
            <p className="font-pixel text-lg">{overlayText}</p>
          </div>
        )}
      </div>
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-sunset-400/60 bg-sunset-400/10 shadow-[2px_2px_0px_0px] shadow-sunset-400/30">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-sunset-400 border-b-[8px] border-b-transparent ml-1"></div>
        </div>
      </div>
    </div>
  );
};
