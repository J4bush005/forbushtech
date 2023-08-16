import {
  OrbitControls
} from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import Transform from "./Transform";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

function Cube() {
  return (
    <Container>
      <Canvas camera={{ fov: 30, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Transform />
      </Canvas>
    </Container>
  );
}

export default Cube;
