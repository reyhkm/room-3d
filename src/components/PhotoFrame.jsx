import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

function PhotoFrame({ position, rotation }) {
  const photoTexture = useLoader(TextureLoader, '/assets/placeholder_photo.jpg');

  return (
    <group position={position} rotation={rotation}>
      {/* Frame border */}
      <mesh>
        <boxGeometry args={[1.2, 1.6, 0.05]} /> {/* Slightly larger than the photo */}
        <meshStandardMaterial color="#4a4a4a" roughness={0.5} metalness={0.2} />
      </mesh>

      {/* Photo itself */}
      <mesh position={[0, 0, 0.03]}> {/* Slightly in front of the frame */}
        <planeGeometry args={[1, 1.4]} /> {/* Aspect ratio for a common photo size */}
        <meshBasicMaterial map={photoTexture} />
      </mesh>
    </group>
  );
}

export default PhotoFrame;
