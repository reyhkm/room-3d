import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Room from './components/Room';
import PhotoFrame from './components/PhotoFrame';
import RoomText from './components/RoomText';

function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
      <Suspense fallback={null}>
        {/* Lighting for the scene */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, -10]} angle={0.3} penumbra={1} intensity={0.8} castShadow />

        {/* Environment for realistic lighting and reflections */}
        <Environment preset="city" />

        {/* The 3D Room */}
        <Room />

        {/* Photo Frame on the back wall */}
        <PhotoFrame position={[0, 1.5, -2.9]} rotation={[0, 0, 0]} />

        {/* Text 'REYKAL ROOM' on the front wall */}
        <RoomText position={[0, 2.5, 2.9]} rotation={[0, Math.PI, 0]} text="REYKAL ROOM" />

        {/* OrbitControls for camera navigation */}
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Suspense>
    </Canvas>
  );
}

export default App;
