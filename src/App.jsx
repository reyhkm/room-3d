import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Room from './components/Room';
import CameraRig from './components/CameraRig';

export default function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        shadows
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <Room />
          <CameraRig />
          <Preload all />
          <EffectComposer>
            <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.9} height={300} intensity={1.5} />
          </EffectComposer>
        </Suspense>
        <OrbitControls makeDefault minDistance={2} maxDistance={15} maxPolarAngle={Math.PI / 2 - 0.1} />
      </Canvas>
      <div className="absolute top-4 left-4 text-white font-sans text-sm md:text-base pointer-events-none">
        <h1 className="font-bold text-2xl">Reykal's Room</h1>
        <p>Use mouse to navigate. Click on photos to focus.</p>
      </div>
    </>
  );
}
