// components/Box.js
import React from 'react';

const Box = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Box;
