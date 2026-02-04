import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      pointLight: any;
      ambientLight: any;
      directionalLight: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
    }
  }
}

const DigitalBrain = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const shellRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.2;
      coreRef.current.rotation.z = t * 0.05;
    }
    if (shellRef.current) {
      shellRef.current.rotation.y = -t * 0.1;
      shellRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Inner Geometric Core */}
      <mesh ref={coreRef} scale={1.8}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#06b6d4"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Outer Protective Shell */}
      <mesh ref={shellRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Glowing Core Center */}
      <pointLight position={[0, 0, 0]} intensity={4} color="#06b6d4" distance={5} />
    </Float>
  );
};

const HeroScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#3b82f6" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />
      
      <DigitalBrain />
      
      {/* Enhanced Particles for Cyber effect */}
      <Sparkles count={120} scale={8} size={3} speed={0.4} opacity={0.6} color="#06b6d4" />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  );
};

export default HeroScene;