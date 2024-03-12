import logo from './logo.svg';
import './App.css';
import * as THREE from 'three'
import { useRef } from 'react';

function App() {
  const appRef = useRef()
  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  appRef.current.appendChild(renderer.domElement);

  // Create a box geometry
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const box = new THREE.Mesh(geometry, material);
  
  // Center the box
  box.position.set(0, 0, 0);

  // Add the box to the scene
  scene.add(box);

  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  return (
    <div ref={appRef} className="App">
      
    </div>
  );
}

export default App;
