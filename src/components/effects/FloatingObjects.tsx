
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface FloatingObjectsProps {
  className?: string;
  objectCount?: number;
  rotationSpeed?: number;
  floatSpeed?: number;
  colors?: string[];
  shapes?: ('cube' | 'sphere' | 'cone' | 'torus')[];
  minSize?: number;
  maxSize?: number;
}

export const FloatingObjects: React.FC<FloatingObjectsProps> = ({
  className = "",
  objectCount = 15,
  rotationSpeed = 0.001,
  floatSpeed = 0.5,
  colors = ["#0A84FF", "#30CF5D", "#6C5CE7", "#FF2D55", "#FFCC00"],
  shapes = ['cube', 'sphere', 'cone', 'torus'],
  minSize = 0.3,
  maxSize = 1,
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
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create objects
    const objects: THREE.Mesh[] = [];
    
    for (let i = 0; i < objectCount; i++) {
      // Pick random shape
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      let geometry: THREE.BufferGeometry;
      
      switch (shapeType) {
        case 'cube':
          geometry = new THREE.BoxGeometry();
          break;
        case 'sphere':
          geometry = new THREE.SphereGeometry(0.5, 16, 16);
          break;
        case 'cone':
          geometry = new THREE.ConeGeometry(0.5, 1, 16);
          break;
        case 'torus':
          geometry = new THREE.TorusGeometry(0.3, 0.2, 16, 32);
          break;
        default:
          geometry = new THREE.BoxGeometry();
      }
      
      // Random color and material
      const color = colors[Math.floor(Math.random() * colors.length)];
      const material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(color),
        transparent: true,
        opacity: 0.7,
        side: THREE.DoubleSide,
      });
      
      const object = new THREE.Mesh(geometry, material);
      
      // Random position
      object.position.x = (Math.random() - 0.5) * 10;
      object.position.y = (Math.random() - 0.5) * 10;
      object.position.z = (Math.random() - 0.5) * 5 - 2;
      
      // Random rotation
      object.rotation.x = Math.random() * Math.PI;
      object.rotation.y = Math.random() * Math.PI;
      
      // Random size
      const scale = minSize + Math.random() * (maxSize - minSize);
      object.scale.set(scale, scale, scale);
      
      // Add to scene and objects array
      scene.add(object);
      objects.push(object);
      
      // Custom properties for animation
      (object as any).floatDirection = Math.random() < 0.5 ? 1 : -1;
      (object as any).floatSpeed = (Math.random() * 0.01 + 0.005) * floatSpeed;
      (object as any).rotateSpeedX = (Math.random() * 0.01 + 0.002) * rotationSpeed;
      (object as any).rotateSpeedY = (Math.random() * 0.01 + 0.002) * rotationSpeed;
    }
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Animate each object
      objects.forEach(object => {
        // Rotation
        object.rotation.x += (object as any).rotateSpeedX;
        object.rotation.y += (object as any).rotateSpeedY;
        
        // Floating movement
        object.position.y += (object as any).floatSpeed * (object as any).floatDirection;
        
        // Change direction when reaching thresholds
        if (object.position.y > 5 || object.position.y < -5) {
          (object as any).floatDirection *= -1;
        }
      });
      
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
      
      // Dispose resources
      objects.forEach(object => {
        object.geometry.dispose();
        (object.material as THREE.Material).dispose();
      });
      
      renderer.dispose();
    };
  }, [objectCount, rotationSpeed, floatSpeed, colors, shapes, minSize, maxSize]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} 
    />
  );
};
