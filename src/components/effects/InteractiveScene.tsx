
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const InteractiveScene: React.FC<{ className?: string }> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 15;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
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
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xFF3366, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(0x76FF03, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Vector2(0, 0);
    let isHovering = false;
    
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      
      // Calculate mouse position in normalized device coordinates (-1 to +1)
      const rect = containerRef.current.getBoundingClientRect();
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
    
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    
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
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
      
      // Dispose of resources
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`} />
  );
};
