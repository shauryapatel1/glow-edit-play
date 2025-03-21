
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Animated 3D cube component
const AnimatedCube = ({ position = [0, 0, 0], size = 1, color = '#ff3366' }) => {
  const mesh = useRef(null);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.3;
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>
    </Float>
  );
};

// Animated 3D sphere component
const AnimatedSphere = ({ position = [0, 0, 0], size = 0.7, color = '#00E5FF' }) => {
  const mesh = useRef(null);
  
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.15;
    }
  });
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.9} />
      </mesh>
    </Float>
  );
};

// 3D scene with multiple objects
const Scene = () => {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <AnimatedCube position={[-2, 0, 0]} size={1.2} color="#FF3366" />
      <AnimatedSphere position={[2, 0, 0]} size={0.8} color="#00E5FF" />
      <AnimatedCube position={[0, 2, -1]} size={0.7} color="#76FF03" />
      <AnimatedSphere position={[0, -1.5, 0]} size={0.6} color="#F97316" />
      
      <Sparkles count={100} scale={10} size={2} speed={0.5} opacity={0.5} />
    </>
  );
};

// Main component that wraps the 3D scene
export function Hero3DAnimation({ className }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn("w-full h-full min-h-[400px]", className)}
    >
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </motion.div>
  );
}

