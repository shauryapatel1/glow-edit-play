
import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { motion, useAnimation } from 'framer-motion';
import { InteractiveObjectsProps } from './types';
import { TorusKnot } from './TorusKnot';
import { Particles } from './Particles';
import { useMouseInteraction } from '../../../hooks/use-three-animation';

export const InteractiveObjects: React.FC<InteractiveObjectsProps> = ({
  scene,
  camera,
  renderer,
  container,
  onCleanup
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [targetRotation, setTargetRotation] = useState(new THREE.Vector2(0, 0));
  const controls = useAnimation();
  
  // Animate the scene when it mounts
  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    });
  }, [controls]);
  
  // Handle mouse interaction with Framer-style animation
  const handleMouseMove = (x: number, y: number) => {
    // Animate target rotation with smooth easing
    setTargetRotation(new THREE.Vector2(y * 0.5, x * 0.5));
    
    if (!isHovering) {
      setIsHovering(true);
      
      // Animate intensity change when hovering starts
      controls.start({
        scale: 1.05,
        transition: { duration: 0.4, ease: "easeOut" }
      });
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    
    // Animate back to normal when hovering ends
    controls.start({
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" }
    });
  };
  
  useMouseInteraction(container, handleMouseMove, handleMouseLeave);
  
  // Setup render loop with enhanced animation
  useEffect(() => {
    let frameId: number;
    let lastTime = 0;
    
    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      
      // Render with delta time for smooth animations
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    
    frameId = requestAnimationFrame(animate);
    
    // Register cleanup with improved handler
    const cleanupHandler = () => {
      cancelAnimationFrame(frameId);
    };
    
    onCleanup(cleanupHandler);
    
    return cleanupHandler;
  }, [scene, camera, renderer, onCleanup]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className="w-full h-full"
    >
      <TorusKnot 
        scene={scene} 
        isHovering={isHovering} 
        targetRotation={targetRotation} 
      />
      <Particles 
        scene={scene} 
        isHovering={isHovering} 
      />
    </motion.div>
  );
};
