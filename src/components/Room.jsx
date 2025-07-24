import React from 'react';
import { Box } from '@react-three/drei';

function Room() {
  const wallMaterial = <meshStandardMaterial color="#f0f0f0" roughness={0.8} metalness={0.1} />;
  const floorMaterial = <meshStandardMaterial color="#a0a0a0" roughness={0.6} metalness={0.1} />;
  const ceilingMaterial = <meshStandardMaterial color="#e0e0e0" roughness={0.8} metalness={0.1} />;

  const roomSize = [6, 4, 6]; // Width, Height, Depth

  return (
    <group>
      {/* Floor */}
      <Box args={[roomSize[0], 0.1, roomSize[2]]} position={[0, -0.05, 0]}>
        {floorMaterial}
      </Box>

      {/* Ceiling */}
      <Box args={[roomSize[0], 0.1, roomSize[2]]} position={[0, roomSize[1] + 0.05, 0]}>
        {ceilingMaterial}
      </Box>

      {/* Back Wall */}
      <Box args={[roomSize[0], roomSize[1], 0.1]} position={[0, roomSize[1] / 2, -roomSize[2] / 2]}>
        {wallMaterial}
      </Box>

      {/* Front Wall */}
      <Box args={[roomSize[0], roomSize[1], 0.1]} position={[0, roomSize[1] / 2, roomSize[2] / 2]}>
        {wallMaterial}
      </Box>

      {/* Left Wall */}
      <Box args={[0.1, roomSize[1], roomSize[2]]} position={[-roomSize[0] / 2, roomSize[1] / 2, 0]}>
        {wallMaterial}
      </Box>

      {/* Right Wall */}
      <Box args={[0.1, roomSize[1], roomSize[2]]} position={[roomSize[0] / 2, roomSize[1] / 2, 0]}>
        {wallMaterial}
      </Box>
    </group>
  );
}

export default Room;
