'use client';

import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Drop your file at: public/models/network-switch.glb
const MODEL_URL = '/models/network-switch.glb';

// Auto-scale the model so its longest dimension matches this (in world units),
// regardless of how the asset was exported.
const TARGET_SIZE = 6;

type Props = {
  /** Where the DataCables converge — the hub center. */
  position?: [number, number, number];
  /** Extra multiplier on top of the auto-fit. */
  scale?: number;
};

/**
 * The central network switch / core router that the orbiting racks plug into.
 * Renders the model's authored PBR materials as-is (lit by the scene <Environment>),
 * auto-normalizes its size. Kept stationary so the plugged-in cables stay aligned
 * with the ports.
 */
export default function NetworkSwitchModel({ position = [0, 4, 0], scale = 1 }: Props) {
  const { scene } = useGLTF(MODEL_URL);

  const { model, fit } = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const autoFit = maxDim > 0 ? TARGET_SIZE / maxDim : 1;

    // Recenter on its own origin so it spins around its middle.
    clone.position.set(-center.x, -center.y, -center.z);

    return { model: clone, fit: autoFit };
  }, [scene]);

  return (
    <group position={position} scale={fit * scale}>
      <primitive object={model} />
    </group>
  );
}

useGLTF.preload(MODEL_URL);
