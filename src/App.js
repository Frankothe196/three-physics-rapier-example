import { OrbitControls, Torus } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import { Suspense } from "react";

import Box from "./components/box";

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Suspense>
        <Physics debug gravity={[0,-9,0]}>

          <RigidBody position={[0, 3, 0]}>
            <Box/>
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
