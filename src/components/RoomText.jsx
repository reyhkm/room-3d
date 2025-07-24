import React from 'react';
import { Text } from '@react-three/drei';

function RoomText({ position, rotation, text }) {
  return (
    <Text
      position={position}
      rotation={rotation}
      fontSize={0.5}
      color="#333333"
      anchorX="center"
      anchorY="middle"
      font="/fonts/Roboto-Bold.ttf" // You might need to provide a font file
    >
      {text}
      <meshStandardMaterial attach="material" color="#333333" />
    </Text>
  );
}

export default RoomText;
