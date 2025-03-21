import React, { useEffect } from 'react';
import * as THREE from 'three';
import { InteractiveObjectsProps } from './types';

interface TorusKnotProps {
  scene: THREE.Scene;
}

const TorusKnot: React.FC<TorusKnotProps> = ({ scene }) => {
  useEffect(() => {
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
    scene.add(torusKnot);

    return () => {
      geometry.dispose();
      material.dispose();
      scene.remove(torusKnot);
    };
  }, [scene]);

  return null;
};

interface ParticlesProps {
  scene: THREE.Scene;
}

const Particles: React.FC<ParticlesProps> = ({ scene }) => {
  useEffect(() => {
    const particlesCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xFF3366,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const positions = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);
    const originalPositions = new Float32Array(particlesCount * 3);

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
    scene.add(particles);

    return () => {
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(particles);
    };
  }, [scene]);

  return null;
};

export const InteractiveObjects: React.FC<InteractiveObjectsProps> = ({
  scene,
  camera,
  renderer,
  container,
  onCleanup
}) => {
  useEffect(() => {
    // Main interactive shape - torus knot
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
    scene.add(torusKnot);

    // Create particles around the shape
    const particlesCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xFF3366,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const positions = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount * 3);
    const originalPositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      // Create particles in a spherical distribution
      const radius = 5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Copy original positions
      originalPositions[i3] = positions[i3];
      originalPositions[i3 + 1] = positions[i3 + 1];
      originalPositions[i3 + 2] = positions[i3 + 2];

      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2(0, 0);
    let isHovering = false;

    const handleMouseMove = (event: MouseEvent) => {
      if (!container) return;

      // Calculate mouse position in normalized device coordinates (-1 to +1)
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Update target rotation based on mouse position
      targetRotation.x = mouse.y * 0.5;
      targetRotation.y = mouse.x * 0.5;

      isHovering = true;

      // Change particle color on hover
      particlesMaterial.color.set(0x76FF03);
      particlesMaterial.size = 0.08;
    };

    const handleMouseLeave = () => {
      isHovering = false;

      // Reset particle color when not hovering
      particlesMaterial.color.set(0xFF3366);
      particlesMaterial.size = 0.05;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const positions = particlesGeometry.attributes.position.array as Float32Array;

      // Rotate torus knot
      if (isHovering) {
        // Smooth rotation towards target when hovering
        torusKnot.rotation.x += (targetRotation.x - torusKnot.rotation.x) * 0.05;
        torusKnot.rotation.y += (targetRotation.y - torusKnot.rotation.y) * 0.05;
      } else {
        // Auto rotation when not hovering
        torusKnot.rotation.x = Math.sin(elapsedTime * 0.5) * 0.3;
        torusKnot.rotation.y = Math.cos(elapsedTime * 0.3) * 0.5;
      }

      // Animate particles
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;

        if (isHovering) {
          // Create ripple effect from center when hovering
          const distFromCenter = Math.sqrt(
            positions[i3] * positions[i3] +
            positions[i3 + 1] * positions[i3 + 1] +
            positions[i3 + 2] * positions[i3 + 2]
          );

          const rippleFactor = Math.sin(distFromCenter - elapsedTime * 2) * 0.1;

          // Move particles away from center with ripple effect
          const dirX = positions[i3] / distFromCenter;
          const dirY = positions[i3 + 1] / distFromCenter;
          const dirZ = positions[i3 + 2] / distFromCenter;

          positions[i3] = originalPositions[i3] + dirX * rippleFactor * 5;
          positions[i3 + 1] = originalPositions[i3 + 1] + dirY * rippleFactor * 5;
          positions[i3 + 2] = originalPositions[i3 + 2] + dirZ * rippleFactor * 5;
        } else {
          // Gentle particle movement when not hovering
          positions[i3] = originalPositions[i3] + Math.sin(elapsedTime + i) * 0.3;
          positions[i3 + 1] = originalPositions[i3 + 1] + Math.cos(elapsedTime + i) * 0.3;
          positions[i3 + 2] = originalPositions[i3 + 2] + Math.cos(elapsedTime * 0.5 + i) * 0.3;
        }
      }

      particlesGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Register cleanup function
    onCleanup(() => {
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    });
  }, [scene, camera, renderer, container, onCleanup]);

  return null;
};
