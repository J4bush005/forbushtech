import {
  OrbitControls
} from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import Transform from "./Transform";
import Media from "react-media";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;
const Containers = styled.div`
  height: 90vh;
  width: 100%;
  padding-bottom: 50%;
`;

function Cube() {
  return (
    <>
    <Media query="(max-width: 768px)">
      <Containers>
        <Canvas camera={{ fov: 30, position: [5, 5, 5] }}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Transform />
        </Canvas>
      </Containers>
    </Media>
    <Media query="(min-width: 769px)">
        <Container>
          <Canvas camera={{ fov: 35, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Transform />
          </Canvas>
        </Container>
      </Media>
  </>
  );
}

export default Cube;
