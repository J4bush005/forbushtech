import * as THREE from "three";
import { OrbitControls, PerspectiveCamera, RenderTexture} from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro"
import { styled } from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  scroll-snap-align: center;
`;


const WaveShaderMaterial = shaderMaterial(
    {uColor: new THREE.Color(0.0, 0.0, 0.0)},
    glsl`
    void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `,
    glsl`
    void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
    `
);

extend({ WaveShaderMaterial });


const Scene = () => {
  return (
    <Container>
    <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
      <mesh>
        <sphereGeometry args={[3, 32, 32]} scale={1}/>
        <waveShaderMaterial/>
      </mesh>
    </Canvas>
    </Container>
  );
};
export default Scene;
