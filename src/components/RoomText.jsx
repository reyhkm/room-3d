import { Center, Text3D } from '@react-three/drei';

const RoomText = () => {
  return (
    <Center position={[2.5, 3.5, -4.9]} rotation={[0, -Math.PI / 16, 0]}>
      <Text3D
        font="/fonts/Inter_Bold.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        REYKAL ROOM
        <meshStandardMaterial color="#e0ac69" metalness={0.8} roughness={0.2} />
      </Text3D>
    </Center>
  );
};

export default RoomText;
