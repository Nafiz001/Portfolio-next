'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, Environment, Plane, Stars } from '@react-three/drei';
import * as THREE from 'three';

const TechIcon = ({ url, position, speed }: { url: string, position: [number, number, number], speed: number }) => {
    const mesh = useRef<THREE.Mesh>(null);

    // Use a fallback to prevent total crash if one icon fails
    const texture = useLoader(THREE.TextureLoader, url, (loader) => {
        loader.setCrossOrigin('anonymous');
    });

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
            mesh.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.0015;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.5}>
            <Plane ref={mesh} position={position} args={[1.3, 1.3]}>
                <meshStandardMaterial
                    map={texture}
                    transparent={true}
                    side={THREE.DoubleSide}
                    roughness={0.2}
                    metalness={0.8}
                    emissive={new THREE.Color('#ffffff')}
                    emissiveIntensity={0.05}
                />
            </Plane>
        </Float>
    );
};

const BackgroundScene = () => {
    const icons = [
        // MERN & Next.js
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', position: [-8, 4, -5] as [number, number, number], speed: 1.1 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', position: [-6, 2, -7] as [number, number, number], speed: 0.9 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', position: [-4, 5, -4] as [number, number, number], speed: 1.3 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', position: [-2, 3, -6] as [number, number, number], speed: 1.0 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', position: [0, 6, -8] as [number, number, number], speed: 1.4 },

        // DevOps
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', position: [4, 6, -6] as [number, number, number], speed: 1.1 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', position: [7, 5, -5] as [number, number, number], speed: 1.5 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', position: [9, 3, -7] as [number, number, number], speed: 0.8 },

        // Game Dev
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', position: [-9, -2, -6] as [number, number, number], speed: 1.2 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg', position: [-7, -5, -8] as [number, number, number], speed: 1.4 },

        // Languages & Tools
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', position: [-4, -3, -5] as [number, number, number], speed: 0.9 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', position: [-1, -5, -7] as [number, number, number], speed: 1.1 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', position: [2, -6, -4] as [number, number, number], speed: 1.3 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', position: [5, -4, -6] as [number, number, number], speed: 1.0 },
        { url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', position: [8, -2, -5] as [number, number, number], speed: 1.2 },
    ];

    return (
        <>
            <ambientLight intensity={0.7} />
            <pointLight position={[10, 10, 10]} intensity={1.2} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <Suspense fallback={null}>
                {icons.map((icon, index) => (
                    <TechIcon key={index} url={icon.url} position={icon.position} speed={icon.speed} />
                ))}
            </Suspense>

            <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1.5} />
            <Environment preset="night" />
        </>
    );
};

const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-[#030712] transition-colors duration-500">
            <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
                <BackgroundScene />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
