import * as THREE from 'three';

const Wall = ({ position, rotation, size, color }) => (
  <mesh position={position} rotation={rotation} receiveShadow>
    <boxGeometry args={size} />
    <meshStandardMaterial color={color} side={THREE.DoubleSide} />
  </mesh>
);

const Room = () => {
  const roomSize = { width: 10, height: 5, depth: 10 };

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[roomSize.width, roomSize.depth]} />
        <meshStandardMaterial color="#5c5c5c" />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, roomSize.height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[roomSize.width, roomSize.depth]} />
        <meshStandardMaterial color="#c7c7c7" />
      </mesh>

      {/* Back Wall */}
      <Wall 
        position={[0, roomSize.height / 2, -roomSize.depth / 2]} 
        rotation={[0, 0, 0]} 
        size={[roomSize.width, roomSize.height, 0.1]} 
        color="#a0a0a0" 
      />

      {/* Left Wall */}
      <Wall 
        position={[-roomSize.width / 2, roomSize.height / 2, 0]} 
        rotation={[0, Math.PI / 2, 0]} 
        size={[roomSize.depth, roomSize.height, 0.1]} 
        color="#b0b0b0" 
      />

      {/* Right Wall */}
      <Wall 
        position={[roomSize.width / 2, roomSize.height / 2, 0]} 
        rotation={[0, -Math.PI / 2, 0]} 
        size={[roomSize.depth, roomSize.height, 0.1]} 
        color="#b0b0b0" 
      />
    </group>
  );
};

export default Room;
