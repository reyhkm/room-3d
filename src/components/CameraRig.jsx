import { useFrame } from '@react-three/fiber';
import { useStore } from '../store/useStore';
import * as THREE from 'three';

export default function CameraRig() {
  const target = useStore((state) => state.target);

  useFrame((state) => {
    if (target) {
      // Smoothly move camera to the target position
      state.camera.position.lerp(target, 0.05);
      
      // Smoothly look at a point slightly in front of the target's origin
      const lookAtTarget = new THREE.Vector3(target.x, target.y, target.z - 3);
      state.camera.lookAt(lookAtTarget);
      state.camera.updateProjectionMatrix();
    }
  });

  return null;
}
