import { Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const SpinningSphere = ({ size }) => {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta / 2; // چرخش در محور y
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshNormalMaterial wireframe />
    </mesh>
  );
};

const Contaact = () => {
  return (
    <div className="h-screen">
      <Canvas>
        <Stage>
          <SpinningSphere size={0.5} />
        </Stage>
      </Canvas>
    </div>
  );
};

export default Contaact;
