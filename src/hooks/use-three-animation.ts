
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type AnimationCleanupFn = () => void;

/**
 * Hook for animating a Three.js object with rotation
 */
export function useRotationAnimation(
  mesh: React.RefObject<THREE.Mesh>,
  speed: { x: number; y: number; z: number } = { x: 0.01, y: 0.01, z: 0 }
): AnimationCleanupFn {
  const animationRef = useRef<number>();
  
  useEffect(() => {
    if (!mesh.current) return;
    
    const animate = () => {
      if (mesh.current) {
        mesh.current.rotation.x += speed.x;
        mesh.current.rotation.y += speed.y;
        mesh.current.rotation.z += speed.z;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mesh, speed]);
  
  return () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };
}

/**
 * Hook for handling mouse interactions with 3D objects
 */
export function useMouseInteraction(
  container: HTMLDivElement | null,
  onMove?: (x: number, y: number) => void,
  onLeave?: () => void
): AnimationCleanupFn {
  useEffect(() => {
    if (!container) return;
    
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      if (onMove) onMove(x, y);
    };
    
    const handleMouseLeave = () => {
      if (onLeave) onLeave();
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [container, onMove, onLeave]);
  
  return () => {};
}

/**
 * Hook for creating a ripple effect on particles
 */
export function useRippleEffect(
  particlesGeometry: THREE.BufferGeometry,
  originalPositions: Float32Array,
  particlesCount: number,
  isHovering: boolean
): AnimationCleanupFn {
  const animationRef = useRef<number>();
  
  useEffect(() => {
    if (!particlesGeometry) return;
    
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        if (isHovering) {
          // Ripple effect when hovering
          const distFromCenter = Math.sqrt(
            positions[i3] * positions[i3] +
            positions[i3 + 1] * positions[i3 + 1] +
            positions[i3 + 2] * positions[i3 + 2]
          );
          
          const rippleFactor = Math.sin(distFromCenter - elapsedTime * 2) * 0.1;
          
          const dirX = positions[i3] / distFromCenter;
          const dirY = positions[i3 + 1] / distFromCenter;
          const dirZ = positions[i3 + 2] / distFromCenter;
          
          positions[i3] = originalPositions[i3] + dirX * rippleFactor * 5;
          positions[i3 + 1] = originalPositions[i3 + 1] + dirY * rippleFactor * 5;
          positions[i3 + 2] = originalPositions[i3 + 2] + dirZ * rippleFactor * 5;
        } else {
          // Gentle movement when not hovering
          positions[i3] = originalPositions[i3] + Math.sin(elapsedTime + i) * 0.3;
          positions[i3 + 1] = originalPositions[i3 + 1] + Math.cos(elapsedTime + i) * 0.3;
          positions[i3 + 2] = originalPositions[i3 + 2] + Math.cos(elapsedTime * 0.5 + i) * 0.3;
        }
      }
      
      particlesGeometry.attributes.position.needsUpdate = true;
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particlesGeometry, originalPositions, particlesCount, isHovering]);
  
  return () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };
}
