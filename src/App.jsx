import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Experience from './components/Experience';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="ui-container">
        <h1>3D Room Control</h1>
        <label htmlFor="photo-upload" className="file-input-label">
          Upload Your Photo
        </label>
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <div className="instructions">
        Click and drag to look around
      </div>
      <Canvas
        camera={{ position: [0, 1.6, 5], fov: 60 }}
        shadows
      >
        <Suspense fallback={null}>
          <Experience uploadedImage={uploadedImage} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
