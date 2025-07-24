import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { useStore } from '../store/useStore';
import PhotoFrame from './PhotoFrame';
import Label from './Label';

export default function Room() {
  const photos = useStore((state) => state.photos);
  const setTarget = useStore((state) => state.setTarget);

  const wallTexture = useTexture('/textures/wall_texture.jpg');
  wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
  wallTexture.repeat.set(4, 4);

  const floorTexture = useTexture('/textures/wood_floor.jpg');
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(8, 8);

  const photoPositions = [
    { position: [-4, 2.5, -5.9], rotation: [0, 0, 0] },
    { position: [-1.5, 3, -5.9], rotation: [0, 0, 0] },
    { position: [1.5, 2, -5.9], rotation: [0, 0, 0] },
    { position: [4, 3.5, -5.9], rotation: [0, 0, 0] },
    { position: [-5.9, 2, -2], rotation: [0, Math.PI / 2, 0] },
    { position: [-5.9, 3.5, 1.5], rotation: [0, Math.PI / 2, 0] },
  ];

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow onClick={() => setTarget(null)}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 3, -6]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>
      <mesh position={[-6, 3, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>
      <mesh position={[6, 3, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* Simple Furniture */}
      <mesh position={[-4, 1, 3]} castShadow>
        <boxGeometry args={[4, 2, 5]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      <mesh position={[4, 0.75, -4]} castShadow>
        <boxGeometry args={[3, 1.5, 2]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* Label */}
      <Label />

      {/* Photo Frames */}
      {photos.map((photo, index) => {
        const config = photoPositions[index % photoPositions.length];
        return <PhotoFrame key={index} textureUrl={photo} {...config} />;
      })}
    </group>
  );
}

// Create placeholder textures if they don't exist
useTexture.preload('/textures/wall_texture.jpg');
useTexture.preload('/textures/wood_floor.jpg');
