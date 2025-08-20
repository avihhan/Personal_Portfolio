import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useFrame } from "@react-three/fiber";
import { SpotLight } from '@react-three/drei';

// Preload the compressed 3D model immediately
useGLTF.preload("./desktop_pc/scene-compressed.gltf");

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene-compressed.gltf");
  const [rotationAngle, setRotationAngle] = useState(0);
  const { camera } = useThree();
  
  // Memoize the optimized scene to prevent unnecessary re-renders
  const optimizedScene = useMemo(() => {
    if (computer?.scene) {
      const scene = computer.scene.clone();
      
      // Traverse and optimize
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          
          // Optimize materials
          if (child.material) {
            child.material.needsUpdate = true;
            // Reduce material complexity for better performance
            if (child.material.map) {
              child.material.map.generateMipmaps = false;
            }
          }
          
          // Enable frustum culling
          child.frustumCulled = true;
        }
      });
      
      return scene;
    }
    return null;
  }, [computer]);
  
  // Performance-based LOD (Level of Detail)
  const scale = useMemo(() => {
    if (isMobile) return 0.7;
    
    // Adjust scale based on distance from camera
    const distance = camera.position.distanceTo([0, -3.25, -1.5]);
    if (distance > 30) return 0.5; // Smaller when far away
    if (distance > 20) return 0.65;
    return 0.75; // Full size when close
  }, [isMobile, camera.position]);

  useFrame((_, delta) => {
    setRotationAngle((prevAngle) => prevAngle + (2.5 * delta));
  });
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      
      {optimizedScene && (
        <primitive
          object={optimizedScene}
          scale={scale}
          position={isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
          rotation={[0, (rotationAngle * Math.PI) / 180, 0]}
        />
      )}
      
      {/* Spotlight targeting the computer */}
      {optimizedScene && (
        <spotLight
          position={[0, 8, -2]}
          angle={0.25}
          penumbra={0.15}
          intensity={15}
          castShadow
          color="#ffffff"
          target={optimizedScene}
        />
      )}
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='always'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: false, // Disable antialiasing for better performance
        powerPreference: "high-performance"
      }}
      performance={{ min: 0.5 }} // Auto-adjust performance
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />

        {/* Spotlight */}
      {/* <SpotLight
        position={[0, 10, 5]}
        angle={0.3}
        penumbra={0.1}
        intensity={1}
        castShadow
        color="#ffffff"
      /> */}

      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;