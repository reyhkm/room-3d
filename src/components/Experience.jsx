import { OrbitControls } from '@react-three/drei';
import Room from './Room';
import PictureFrame from './PictureFrame';
import RoomText from './RoomText';

const Experience = ({ uploadedImage }) => {
  return (
    <>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        minPolarAngle={Math.PI / 4} 
        maxPolarAngle={Math.PI / 1.8}
      />

      <ambientLight intensity={0.5} />
      <pointLight position={[0, 3, 4]} intensity={15} castShadow />
      <pointLight position={[-3, 2, -4]} intensity={10} />

      <Room />
      <PictureFrame uploadedImage={uploadedImage} />
      <RoomText />
    </>
  );
};

export default Experience;
