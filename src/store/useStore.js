import { create } from 'zustand';
import * as THREE from 'three';

// Automatically import all photos from the public/photos directory
const photoFiles = import.meta.glob('/public/photos/*.{png,jpg,jpeg}', { eager: true });

const photos = Object.values(photoFiles).map(file => file.default);

export const useStore = create((set) => ({
  photos,
  target: null, // The Vector3 position the camera should look at
  setTarget: (newTarget) => set({ target: newTarget }),
}));
