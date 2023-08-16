import {
  OrbitControls
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import Boost from "./Boost";
import Media from "react-media";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

function Cube() {
  return (
    <Media query="(min-width: 769px)">
    <Container>
      <Canvas camera={{ fov: 35, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Boost />
      </Canvas>
    </Container>
    </Media>
  );
}

export default Cube;
