import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useStore } from '../store/useStore';

export default function PhotoFrame({ textureUrl, position, rotation = [0, 0, 0], scale = 1 }) {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const texture = useTexture(textureUrl);
  const setTarget = useStore((state) => state.setTarget);

  const frameWidth = 2 * scale;
  const frameHeight = 2 * scale;
  const frameDepth = 0.1 * scale;

  useFrame(() => {
    if (ref.current) {
      ref.current.scale.lerp(new THREE.Vector3(1, 1, 1).multiplyScalar(isHovered ? 1.1 : 1), 0.1);
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    const targetPosition = new THREE.Vector3();
    ref.current.getWorldPosition(targetPosition);
    // Move camera in front of the frame
    const cameraOffset = new THREE.Vector3(0, 0, 3);
    cameraOffset.applyQuaternion(ref.current.quaternion);
    targetPosition.add(cameraOffset);
    setTarget(targetPosition);
  };

  return (
    <group position={position} rotation={rotation}>
      <mesh
        ref={ref}
        onPointerOver={(e) => { e.stopPropagation(); setIsHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setIsHovered(false); document.body.style.cursor = 'auto'; }}
        onClick={handleClick}
        castShadow
      >
        {/* Frame */}
        <boxGeometry args={[frameWidth + 0.2, frameHeight + 0.2, frameDepth]} />
        <meshStandardMaterial color="#222222" roughness={0.3} metalness={0.8} />
        
        {/* Photo */}
        <mesh position={[0, 0, frameDepth / 2 + 0.01]}>
          <planeGeometry args={[frameWidth, frameHeight]} />
          <meshBasicMaterial map={texture} />
        </mesh>
      </mesh>
    </group>
  );
}
