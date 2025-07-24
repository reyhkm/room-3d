import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const PictureFrame = ({ uploadedImage }) => {
  const texture = useLoader(THREE.TextureLoader, uploadedImage || '');

  const imageTexture = useMemo(() => {
    if (!uploadedImage) {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      context.fillStyle = '#ccc';
      context.fillRect(0, 0, 256, 256);
      context.fillStyle = '#555';
      context.font = '20px Arial';
      context.textAlign = 'center';
      context.fillText('Upload a Photo', 128, 128);
      return new THREE.CanvasTexture(canvas);
    }
    return texture;
  }, [uploadedImage, texture]);

  return (
    <group position={[-2.5, 2.5, -4.9]}>
      {/* Frame */}
      <mesh castShadow>
        <boxGeometry args={[2.2, 3.2, 0.1]} />
        <meshStandardMaterial color="#3d2a1d" />
      </mesh>
      {/* Picture */}
      <mesh position={[0, 0, 0.06]} castShadow>
        <planeGeometry args={[2, 3]} />
        <meshStandardMaterial map={imageTexture} />
      </mesh>
    </group>
  );
};

export default React.memo(PictureFrame);
