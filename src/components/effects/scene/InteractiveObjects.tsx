
import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
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
  
  // Handle mouse interaction
  const handleMouseMove = (x: number, y: number) => {
    setTargetRotation(new THREE.Vector2(y * 0.5, x * 0.5));
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  useMouseInteraction(container, handleMouseMove, handleMouseLeave);
  
  // Setup render loop
  useEffect(() => {
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Register cleanup
    onCleanup(() => {
      cancelAnimationFrame(animationId);
    });
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [scene, camera, renderer, onCleanup]);
  
  return (
    <>
      <TorusKnot 
        scene={scene} 
        isHovering={isHovering} 
        targetRotation={targetRotation} 
      />
      <Particles 
        scene={scene} 
        isHovering={isHovering} 
      />
    </>
  );
};
