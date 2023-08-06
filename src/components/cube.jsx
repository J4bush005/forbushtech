import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

function cube() {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="rgba(203, 178, 106)">
            <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0,0,2]} />
              <color attach="background" args={["black"]} />
              <Text fontSize={1} color="white">
                Elevate
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  );
}

export default cube;
