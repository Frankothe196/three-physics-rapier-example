import { OrbitControls, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Suspense, useEffect, useState } from "react";

import Box from "./components/box";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

import bot from './assets/Xbot.glb'

import { useAnimations } from "@react-three/drei"

function Model() {
  
  const model = useLoader(GLTFLoader, bot);
  // Extract animation actions
  const { ref, actions, names } = useAnimations(model.animations)
  const [index, setIndex] = useState(4)
  
  return <primitive object={model.scene} onClick={() => setIndex((index + 1) % names.length)}/>;
}

const App = () => {

  return (
    <Canvas>
      <OrbitControls />
      <Suspense>
        <Physics debug gravity={[0, -9, 0]}>
          
          <RigidBody position={[0, 3, 0]}>
            <Box/>
          </RigidBody>
          
          <RigidBody position={[0, -2, 0]} >
            <Model/>
          </RigidBody>
          
          <RigidBody colliders={"hull"} restitution={2}>
            <Torus />
          </RigidBody>

          <CuboidCollider position={[0, -5, 0]} args={[20, 0.5, 20]} />
        </Physics>
      </Suspense>
    </Canvas>
  );
};

export default App;
