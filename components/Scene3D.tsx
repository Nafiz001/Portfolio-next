'use client';

import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Stars, Instance, Instances, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

// A single Server Rack
const ServerRack = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Main Cabinet */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[2, 4, 3]} />
        <meshStandardMaterial color="#0a192f" emissive="#00f0ff" emissiveIntensity={0.05} roughness={0.7} metalness={0.5} />
      </mesh>
      
      {/* Glowing drive lights (Front Only) */}
      <Instances limit={20} range={20}>
        <boxGeometry args={[0.8, 0.1, 0.05]} />
        <meshStandardMaterial color="#00ffaa" emissive="#00f0ff" emissiveIntensity={2} />
        {Array.from({ length: 8 }).map((_, i) => (
          <Instance key={`d1-${i}`} position={[-0.4, 0.5 + i * 0.4, 1.51]} />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <Instance key={`d2-${i}`} position={[0.4, 0.5 + i * 0.4, 1.51]} />
        ))}
      </Instances>

      {/* Glass Door (Front Only) */}
      <mesh position={[0, 2, 1.55]}>
        <boxGeometry args={[1.8, 3.8, 0.05]} />
        <meshStandardMaterial color="#00f0ff" transparent opacity={0.15} roughness={0.1} metalness={0.8} />
      </mesh>
    </group>
  );
};

const NavNode = ({ position, label, onClick, color, viewId, rotation = [0, 0, 0] }: any) => {
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group 
        position={position} 
        rotation={rotation}
        onClick={(e) => { e.stopPropagation(); onClick(viewId); }} 
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
      >
        <mesh>
          <boxGeometry args={[6.2, 2.0, 0.1]} />
          <meshStandardMaterial color="#050505" roughness={0.9} metalness={0.5} />
        </mesh>
        
        {/* Glowing Screen centered to be visible on both front and back */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[6, 1.8, 0.12]} />
          <meshStandardMaterial 
            color={hovered ? color : '#111'} 
            emissive={hovered ? color : '#000'} 
            emissiveIntensity={hovered ? 1.5 : 0} 
            transparent 
            opacity={0.9} 
            wireframe={!hovered}
          />
        </mesh>

        {/* Text Front */}
        <Text
          position={[0, 0, 0.16]}
          fontSize={0.8}
          color={hovered ? '#000' : color}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
        
        {/* Text Back - Double Sided */}
        <Text
          position={[0, 0, -0.16]}
          rotation={[0, Math.PI, 0]}
          fontSize={0.8}
          color={hovered ? '#000' : color}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
};

// Abstract central server/core
const DataCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.005;
      coreRef.current.rotation.x += 0.002;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.01;
      ringRef.current.rotation.y -= 0.005;
    }
  });

  return (
    <group position={[0, 4, 0]}>
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#00f0ff" wireframe emissive="#00f0ff" emissiveIntensity={0.8} />
        </mesh>
        <mesh ref={ringRef}>
          <torusGeometry args={[2.5, 0.02, 12, 100]} />
          <meshStandardMaterial color="#00ffaa" emissive="#00ffaa" emissiveIntensity={1} />
        </mesh>
      </Float>
    </group>
  );
};

// Controls the snap effect for dragging
const CarouselSnapper = ({ currentView, controlsRef }: { currentView: string, controlsRef: any }) => {
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;
    
    let timeoutId: NodeJS.Timeout;
    
    const onEnd = () => {
      // Only snap if we are in 'home' view
      if (currentView !== 'home') return;
      
      clearTimeout(timeoutId);
      // Wait slightly so momentum dragging completes
      timeoutId = setTimeout(() => {
        const obj = controls.object;
        const angle = Math.atan2(obj.position.x, obj.position.z);
        // Snap to nearest 90 degrees (Math.PI / 2)
        const snapped = Math.round(angle / (Math.PI / 2)) * (Math.PI / 2);
        
        const radius = Math.sqrt(obj.position.x**2 + obj.position.z**2);
        
        gsap.to(obj.position, {
          x: Math.sin(snapped) * radius,
          z: Math.cos(snapped) * radius,
          duration: 0.8,
          ease: "power2.out",
          onUpdate: () => controls.update()
        });
      }, 200); 
    };
    
    controls.addEventListener('end', onEnd);
    return () => controls.removeEventListener('end', onEnd);
  }, [controlsRef, currentView]);
  return null;
};

// A spotlight that follows the camera and illuminates the scene
const CameraLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(({ camera }) => {
    if (lightRef.current) {
      lightRef.current.position.copy(camera.position);
    }
  });
  // Increased distance to 45 so side servers are visible but noticeably darker than the front server
  return <pointLight ref={lightRef} intensity={5} color="#ffffff" distance={45} decay={1.5} />;
};

const CameraController = ({ currentView, controlsRef, isMobile }: { currentView: string, controlsRef: any, isMobile: boolean }) => {
  useEffect(() => {
    if (!controlsRef.current) return;
    
    // Decreased radius to 12
    const targets: Record<string, { pos: [number, number, number], look: [number, number, number] }> = {
      'home': { 
        pos: isMobile ? [0, 8, 30] : [0, 8, 22], 
        look: [0, 4, 0] 
      },
      'projects': { pos: [-20, 6, 0], look: [-12, 6, 0] },     // Outside West
      'about': { pos: [20, 6, 0], look: [12, 6, 0] },          // Outside East
      'contact': { pos: [0, 6, -20], look: [0, 6, -12] },      // Outside North
      'education': { pos: [0, 6, 20], look: [0, 6, 12] },      // Outside South
    };
    
    const target = targets[currentView] || targets['home'];
    
    gsap.to(controlsRef.current.object.position, {
      x: target.pos[0],
      y: target.pos[1],
      z: target.pos[2],
      duration: 1.5,
      ease: "power3.inOut"
    });

    gsap.to(controlsRef.current.target, {
      x: target.look[0],
      y: target.look[1],
      z: target.look[2],
      duration: 1.5,
      ease: "power3.inOut"
    });
    
  }, [currentView, controlsRef, isMobile]);
  
  return null;
};

interface Scene3DProps {
  currentView: string;
  setCurrentView: (view: any) => void;
}

export default function Scene3D({ currentView, setCurrentView }: Scene3DProps) {
  const [isMobile, setIsMobile] = useState(false);
  const controlsRef = useRef<any>(null);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isHome = currentView === 'home';

  return (
    <div className="fixed inset-0 -z-10 bg-[#020202]">
      <Canvas camera={{ position: [0, 8, 30], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Increased ambient light so back servers don't disappear into pure blackness */}
          <ambientLight intensity={0.4} />
          
          <pointLight position={[0, -5, 0]} intensity={1.5} color="#00f0ff" distance={40} />
          {/* Dim global overhead light to explicitly highlight shapes of out-of-focus side servers */}
          <pointLight position={[0, 15, 0]} intensity={1} color="#00ffaa" distance={50} />

          <CameraLight />

          <gridHelper args={[120, 120, '#001a33', '#001122']} position={[0, 0, 0]} />
          
          {/* Softer fog so background objects fade gracefully instead of being abruptly erased */}
          <fog attach="fog" args={['#020202', 20, isMobile ? 55 : 70]} />

          <DataCore />
          
          {/* Servers tightly orbited at nominal radius 12 */}
          <ServerRack position={[-12, 0, 0]} rotation={[0, -Math.PI / 2, 0]} /> {/* West */}
          <ServerRack position={[12, 0, 0]} rotation={[0, Math.PI / 2, 0]} />   {/* East */}
          <ServerRack position={[0, 0, -12]} rotation={[0, Math.PI, 0]} />      {/* North */}
          <ServerRack position={[0, 0, 12]} rotation={[0, 0, 0]} />             {/* South */}

          {/* Nodes face OUTWARDS */}
          {isHome && (
            <>
              <NavNode 
                position={[-12, 6, 0]} 
                rotation={[0, -Math.PI / 2, 0]}
                label="SYS.PROJECTS" 
                viewId="projects"
                color="#00f0ff" 
                onClick={setCurrentView} 
              />
              <NavNode 
                position={[12, 6, 0]} 
                rotation={[0, Math.PI / 2, 0]}
                label="SYS.ABOUT" 
                viewId="about"
                color="#00ffaa" 
                onClick={setCurrentView} 
              />
              <NavNode 
                position={[0, 6, -12]} 
                rotation={[0, Math.PI, 0]}
                label="SYS.CONTACT" 
                viewId="contact"
                color="#ff0055" 
                onClick={setCurrentView} 
              />
              <NavNode 
                position={[0, 6, 12]} 
                rotation={[0, 0, 0]}
                label="SYS.EDUCATION" 
                viewId="education"
                color="#ffcc00" 
                onClick={setCurrentView} 
              />
            </>
          )}

          <Stars radius={40} depth={20} count={3000} factor={3} saturation={0} fade speed={1} />
          
          <OrbitControls 
            ref={controlsRef} 
            enablePan={false} 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2 + 0.1} 
            minPolarAngle={Math.PI / 4}
            autoRotate={isHome && !isMobile}
            autoRotateSpeed={0.5}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={isMobile ? 1.5 : 1}
            makeDefault
          />
          <CameraController currentView={currentView} controlsRef={controlsRef} isMobile={isMobile} />
          <CarouselSnapper currentView={currentView} controlsRef={controlsRef} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] mix-blend-overlay border-[1px] border-[#00f0ff]/10 m-2"></div>
    </div>
  );
}
