import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot, Box, Torus, Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      meshStandardMaterial: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
    }
  }
}

// 1. AI Agent: Complex Organic Shape
const AgentMesh = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if(ref.current) {
        ref.current.rotation.x = state.clock.elapsedTime * 0.5;
        ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float>
      <TorusKnot ref={ref} args={[1, 0.3, 100, 16]}>
         <MeshTransmissionMaterial 
            backside
            backsideThickness={5}
            thickness={2} 
            chromaticAberration={0.5} 
            anisotropy={0.3} 
            color="#06b6d4" 
        />
      </TorusKnot>
    </Float>
  );
};

// 2. Workflow: Gears/Mechanical
const WorkflowMesh = () => {
  const g1 = useRef<THREE.Mesh>(null);
  const g2 = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if(g1.current) g1.current.rotation.z = state.clock.elapsedTime;
    if(g2.current) g2.current.rotation.z = -state.clock.elapsedTime;
  });
  return (
    <Float>
      <group>
        <Torus ref={g1} args={[0.8, 0.2, 16, 32]} position={[-0.5, 0.5, 0]}>
             <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} />
        </Torus>
        <Torus ref={g2} args={[0.8, 0.2, 16, 32]} position={[0.5, -0.5, 0]}>
             <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </Torus>
      </group>
    </Float>
  );
};

// 3. Data: Floating Blocks
const DataMesh = () => {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if(group.current) group.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  
  return (
    <Float>
      <group ref={group}>
        <Box args={[0.8, 0.8, 0.8]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#06b6d4" wireframe />
        </Box>
        <Box args={[0.5, 0.5, 0.5]} position={[0.8, 0.8, 0.5]}>
             <meshStandardMaterial color="#ffffff" />
        </Box>
        <Box args={[0.4, 0.4, 0.4]} position={[-0.8, -0.5, -0.5]}>
             <meshStandardMaterial color="#8b5cf6" />
        </Box>
      </group>
    </Float>
  );
};

interface ServiceCanvasProps {
  type: 'agent' | 'workflow' | 'data';
}

const ServiceCanvas: React.FC<ServiceCanvasProps> = ({ type }) => {
  return (
    <Canvas camera={{ position: [0, 0, 4] }} style={{ height: '100%', width: '100%' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />
      {type === 'agent' && <AgentMesh />}
      {type === 'workflow' && <WorkflowMesh />}
      {type === 'data' && <DataMesh />}
    </Canvas>
  );
};

export default ServiceCanvas;