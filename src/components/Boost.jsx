import React, { useRef } from "react";
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";


function Boost() {
        const textRef = useRef()
    useFrame(state=>(textRef.current.position.x = Math.sin(state.clock.elapsedTime)))
  return (
    <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="rgba(203, 178, 106)">
            <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0,0,2]} />
              <color attach="background" args={["black"]} />
              <Text ref={textRef} fontSize={1} color="white">
                Elevate
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
  )
}

export default Boost;