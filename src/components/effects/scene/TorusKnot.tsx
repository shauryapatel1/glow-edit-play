
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface TorusKnotProps {
  scene: THREE.Scene;
  isHovering?: boolean;
  targetRotation?: THREE.Vector2;
}

export const TorusKnot: React.FC<TorusKnotProps> = ({ 
  scene, 
  isHovering = false,
  targetRotation = new THREE.Vector2(0, 0)
}) => {
  const torusRef = useRef<THREE.Mesh | null>(null);
  
  useEffect(() => {
    // Create torus knot
    const geometry = new THREE.TorusKnotGeometry(3, 0.8, 100, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00E5FF,
      emissive: 0x00E5FF,
      emissiveIntensity: 0.2,
      specular: 0xffffff,
      shininess: 50,
      transparent: true,
      opacity: 0.8,
      wireframe: true
    });

    const torusKnot = new THREE.Mesh(geometry, material);
    torusRef.current = torusKnot;
    scene.add(torusKnot);

    return () => {
      if (torusRef.current) {
        scene.remove(torusRef.current);
      }
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);
  
  // Animation effect
  useEffect(() => {
    if (!torusRef.current) return;
    
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      if (torusRef.current) {
        if (isHovering) {
          // Smooth rotation towards target when hovering
          torusRef.current.rotation.x += (targetRotation.x - torusRef.current.rotation.x) * 0.05;
          torusRef.current.rotation.y += (targetRotation.y - torusRef.current.rotation.y) * 0.05;
        } else {
          // Auto rotation when not hovering
          torusRef.current.rotation.x = Math.sin(elapsedTime * 0.5) * 0.3;
          torusRef.current.rotation.y = Math.cos(elapsedTime * 0.3) * 0.5;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovering, targetRotation]);
  
  return null;
};
