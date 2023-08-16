import * as THREE from "three";
import React, {useRef, Suspense} from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro"
import { styled } from "styled-components";
import { Color } from "three";
import Colors from "../images/Color logo - no background.png"


const Container = styled.div`
  height: 50vh;
  width: 100%;
  scroll-snap-align: center;
`;


const WaveShaderMaterial = shaderMaterial(
    { uTime: 0, uColor: new THREE.Color(0,0,0), uTexture: new THREE.Texture()},

    glsl`
    
    varying vec2 vUv;

    void main(){

        vUv = uv;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
      vec3 texture = texture2D(uTexture, vUv).rgb;
        gl_FragColor = vec4(vUv.y * uColor, 0.01);
    }
    `
);

extend({ WaveShaderMaterial });


const Wave = () => {
  const ref = useRef();
   useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime())); 

  const [image] = useLoader(THREE.TextureLoader, [Colors]);
  const shadowColor = new Color(0.203, 0.178, 0.106);

  return(
    <mesh>
        <torusGeometry args={[3, 0.5, 3, 100]} scale={1}/>
        <waveShaderMaterial uColor={shadowColor} ref={ref}  uTexture={image}/>
      </mesh>
      
  );
};

const Scene = () => {
  return (
    <Container>
    <Canvas>
        <OrbitControls enableZoom={false}  />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Suspense fallback={null}>
      <Wave />
      </Suspense>
    </Canvas>
    </Container>
  );
};
export default Scene;
