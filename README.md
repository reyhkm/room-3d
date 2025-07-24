# Reykal's 3D Room

This is a modern 3D room visualization built with React, Vite, and Three.js, utilizing `@react-three/fiber` and `@react-three/drei` for easy integration.

## Features

*   **Interactive 3D Environment**: Explore a simple, modern room.
*   **Custom Photo Display**: A photo frame where you can display your own image.
*   **Personalized Text**: "REYKAL ROOM" displayed prominently within the space.
*   **Orbit Controls**: Easily navigate around the room using your mouse.

## Setup and Installation

1.  **Clone the repository (or create the files manually):**
    ```bash
    # If you're cloning from a git repository
    git clone <your-repo-url>
    cd Reykal3DRoom
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    This will start the Vite development server, and you can view the project in your browser, usually at `http://localhost:5173`.

## Customization

### Changing the Photo

To change the photo displayed in the frame:

1.  Replace the `src/assets/placeholder_photo.jpg` file with your desired image.
2.  Ensure your image is in a common web format (e.g., `.jpg`, `.png`).
3.  If you change the filename or path, update the `useLoader` call in `src/components/PhotoFrame.jsx` accordingly.

### Changing the Room Text

To change the text "REYKAL ROOM":

1.  Open `src/App.jsx`.
2.  Locate the `<RoomText />` component.
3.  Modify the `text` prop to your desired string:
    ```jsx
    <RoomText position={[0, 2.5, 2.9]} rotation={[0, Math.PI, 0]} text="YOUR CUSTOM TEXT HERE" />
    ```

### Customizing the Font

The `RoomText` component uses a font file. A placeholder `public/fonts/Roboto-Bold.ttf` is included.

1.  **Download your desired `.ttf` or `.otf` font file.** A good source is [Google Fonts](https://fonts.google.com/).
2.  Place the downloaded font file into the `public/fonts/` directory.
3.  Update the `font` prop in `src/components/RoomText.jsx` if your font file has a different name:
    ```jsx
    <Text
      // ... other props
      font="/fonts/YourNewFont.ttf" // e.g., /fonts/OpenSans-Regular.ttf
    >
    ```

### Adjusting Room Appearance

*   **Colors and Materials**: Modify the `wallMaterial`, `floorMaterial`, and `ceilingMaterial` in `src/components/Room.jsx` to change the look of the room.
*   **Lighting**: Experiment with `ambientLight`, `pointLight`, and `spotLight` properties in `src/App.jsx` to adjust the scene's illumination.
*   **Room Dimensions**: Adjust the `roomSize` array in `src/components/Room.jsx` to change the width, height, and depth of the room.

## Project Structure

```
Reykal3DRoom/
├── public/
│   ├── fonts/
│   │   └── Roboto-Bold.ttf  # Placeholder for font file
│   └── index.html
├── src/
│   ├── assets/
│   │   └── placeholder_photo.jpg # Your photo goes here
│   ├── components/
│   │   ├── PhotoFrame.jsx
│   │   ├── Room.jsx
│   │   └── RoomText.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A fast build tool for modern web projects.
*   **Three.js**: A JavaScript 3D library.
*   **@react-three/fiber**: A React renderer for Three.js.
*   **@react-three/drei**: A collection of useful helpers and abstractions for `@react-three/fiber`.

Enjoy exploring your personalized 3D room!
