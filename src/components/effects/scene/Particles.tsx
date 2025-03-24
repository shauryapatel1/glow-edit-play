
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useRippleEffect } from '../../../hooks/use-three-animation';

interface ParticlesProps {
  scene: THREE.Scene;
  isHovering: boolean;
}

export const Particles: React.FC<ParticlesProps> = ({ scene, isHovering }) => {
  const particlesRef = useRef<THREE.Points | null>(null);
  const [particlesGeometry] = useState(() => new THREE.BufferGeometry());
  const [particlesCount] = useState(1000);
  const [originalPositions] = useState(() => new Float32Array(particlesCount * 3));
  const [velocities] = useState(() => new Float32Array(particlesCount * 3));
  
  // Setup particles
  useEffect(() => {
    const particlesMaterial = new THREE.PointsMaterial({
      color: isHovering ? 0x76FF03 : 0xFF3366,
      size: isHovering ? 0.08 : 0.05,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    const positions = new Float32Array(particlesCount * 3);
    
    // Initialize particle positions
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      const radius = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      originalPositions[i3] = positions[i3];
      originalPositions[i3 + 1] = positions[i3 + 1];
      originalPositions[i3 + 2] = positions[i3 + 2];
      
      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    particlesRef.current = particles;
    scene.add(particles);
    
    return () => {
      if (particlesRef.current) {
        scene.remove(particlesRef.current);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [scene, particlesCount, particlesGeometry, originalPositions, velocities]);
  
  // Update particle material based on hover state
  useEffect(() => {
    if (particlesRef.current) {
      const material = particlesRef.current.material as THREE.PointsMaterial;
      material.color.set(isHovering ? 0x76FF03 : 0xFF3366);
      material.size = isHovering ? 0.08 : 0.05;
    }
  }, [isHovering]);
  
  // Apply the ripple effect
  useRippleEffect(particlesGeometry, originalPositions, particlesCount, isHovering);
  
  return null;
};
