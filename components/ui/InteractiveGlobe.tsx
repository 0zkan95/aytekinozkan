"use client";

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Globe from 'three-globe';
import * as THREE from 'three';

// Assuming globeData is the content of your data/globe.json
// In a real setup, you might fetch this or import it differently if it's very large
import globeData from '@/data/globe.json'; // Make sure this path is correct

const GlobeComponent: React.FC = () => {
  const globeRef = useRef<Globe | null>(null);
  const [globeReady, setGlobeReady] = useState(false);

  const globeMaterial = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      // color: 0xaaaaaa, // Base color if texture fails
      map: new THREE.TextureLoader().load('/flexy-globe.jpg'), // Path to your globe texture
      transparent: false, // Set to true if you have transparency in your texture and need it
    });
  }, []);
  
  useEffect(() => {
    if (!globeRef.current) {
      const instance = new Globe({
        waitForGlobeReady: true,
        animateIn: true,
      })
        // .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg') // Default night view
        .globeMaterial(globeMaterial) // Use custom material with your texture
        .polygonsData(globeData.features)
        .polygonCapColor(() => 'rgba(100, 100, 200, 0.6)') // Light blue for countries
        .polygonSideColor(() => 'rgba(0, 0, 0, 0.05)')      // Slightly darker side
        .polygonStrokeColor(() => '#666699');              // Border color for countries
        
      globeRef.current = instance;
      setGlobeReady(true);
    }
    
    // Auto-rotate will be handled by OrbitControls props now
    // if (globeRef.current) {
    //     // globeRef.current.controls().autoRotate = true; // This causes TS error
    //     // globeRef.current.controls().autoRotateSpeed = 0.3; // This causes TS error
    // }

  }, [globeMaterial]);


  // This is needed to integrate three-globe with R3F's render loop
  useFrame(() => {
    if (globeRef.current) {
      // @ts-ignore This is a known pattern for three-globe with R3F
      globeRef.current.tick();
    }
  });

  if (!globeReady || !globeRef.current) {
    return null; // Or a loading spinner
  }

  return <primitive object={globeRef.current} />;
};

const InteractiveGlobe: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '100%', cursor: 'grab' }}>
      <Canvas camera={{ fov: 75, position: [0, 0, 250] }}>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[1, 1, 1]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <GlobeComponent />
        <OrbitControls 
          enableZoom={true} 
          zoomSpeed={0.7} 
          autoRotate={true} // Enable auto-rotation here
          autoRotateSpeed={0.5} // Adjust speed as desired
          enablePan={false} 
        />
      </Canvas>
    </div>
  );
};

export default InteractiveGlobe;
