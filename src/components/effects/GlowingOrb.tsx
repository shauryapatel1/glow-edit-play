
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface GlowingOrbProps {
  className?: string;
  size?: number;
  color?: string;
  intensity?: number;
  position?: [number, number, number];
}

export const GlowingOrb: React.FC<GlowingOrbProps> = ({
  className = "",
  size = 100,
  color = "#0A84FF",
  intensity = 1.5,
  position = [0, 0, 0],
}) => {
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
    camera.position.z = 200;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Orb geometry
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    
    // Orb material with glow
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(color),
      transparent: true,
      opacity: 0.8,
    });
    
    // Create the orb
    const orb = new THREE.Mesh(geometry, material);
    orb.position.set(position[0], position[1], position[2]);
    scene.add(orb);
    
    // Add point light
    const light = new THREE.PointLight(color, intensity, 300);
    light.position.set(position[0], position[1], position[2]);
    scene.add(light);
    
    // Create a glow effect
    const glowGeometry = new THREE.SphereGeometry(size * 1.2, 32, 32);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(color) },
        viewVector: { value: camera.position }
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(0.6 - dot(vNormal, vNormel), 2.0);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, intensity);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true
    });
    
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMesh.position.set(position[0], position[1], position[2]);
    scene.add(glowMesh);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Slow rotation
      orb.rotation.x += 0.003;
      orb.rotation.y += 0.005;
      glowMesh.rotation.x += 0.003;
      glowMesh.rotation.y += 0.005;
      
      // Subtle breathing effect
      const scale = 1 + 0.05 * Math.sin(Date.now() * 0.001);
      orb.scale.set(scale, scale, scale);
      
      renderer.render(scene, camera);
    };
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of resources
      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      renderer.dispose();
    };
  }, [color, intensity, position, size]);

  return (
    <div ref={containerRef} className={`${className}`} />
  );
};
