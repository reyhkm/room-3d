import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function Label() {
  const fontUrl = '/fonts/BebasNeue-Regular.ttf';

  return (
    <Text
      font={fontUrl}
      fontSize={1.2}
      position={[0, 4.5, -5.8]}
      rotation={[0, 0, 0]}
      color="#00ffff"
      anchorX="center"
      anchorY="middle"
      material={new THREE.MeshStandardMaterial({ emissive: '#00ffff', emissiveIntensity: 2 })}
    >
      REYKAL ROOM
    </Text>
  );
}
