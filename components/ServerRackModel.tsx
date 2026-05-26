'use client';

import React, { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Path to the downloaded model. Drop your file at: public/models/server-rack.glb
const MODEL_URL = '/models/server-rack.glb';

// We auto-scale any model to this height, so you never have to guess the export scale.
const TARGET_HEIGHT = 3;

type Props = {
  position: [number, number, number];
  rotation: [number, number, number];
  /** Extra multiplier on top of the auto-fit (1 = exactly TARGET_HEIGHT tall). */
  scale?: number;
};

/**
 * Loads a real GLTF/GLB server-rack model, clones it for each orbit slot,
 * auto-normalizes its size, and sits it on the grid (y=0).
 */
export default function ServerRackModel({ position, rotation, scale = 1 }: Props) {
  const { scene } = useGLTF(MODEL_URL);
  const ref = useRef<THREE.Group>(null);

  // Clone per instance (one Object3D can't be in the graph twice) and measure it.
  const { model, fit, halfHeight } = useMemo(() => {
    const clone = scene.clone(true);

    // Render the model's authored PBR materials as-is — no tinting/metalness overrides,
    // so the real textures (screens, LEDs, branding) show. Lighting comes from the
    // <Environment> map added in Scene3D.
    clone.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });

    // Measure bounding box to auto-fit height and rest it on the grid.
    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    const autoFit = size.y > 0 ? TARGET_HEIGHT / size.y : 1;

    // Recenter the mesh on its own origin so our scale/position math is predictable.
    clone.position.set(-center.x, -center.y, -center.z);

    return { model: clone, fit: autoFit, halfHeight: (size.y / 2) * autoFit };
  }, [scene]);

  const finalScale = fit * scale;
  const yOffset = halfHeight * scale; // keeps the rack resting on the grid at any scale

  useFrame((state) => {
    if (ref.current) {
      // Gentle idle float; base Y keeps the rack sitting on the grid.
      ref.current.position.y = position[1] + yOffset + Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
    }
  });

  return (
    <group
      ref={ref}
      position={[position[0], position[1] + yOffset, position[2]]}
      rotation={rotation}
      scale={finalScale}
    >
      <primitive object={model} />
    </group>
  );
}

// Warm the cache so all 6 racks pop in together instead of one-by-one.
useGLTF.preload(MODEL_URL);
