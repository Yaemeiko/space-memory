import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

function Scene() {
  const group = useRef();

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.02;
    group.current.rotation.x += delta * 0.005;
  });

  return (
    <group ref={group}>
      <Stars
        radius={150}
        depth={60}
        count={7000}
        factor={7}
        saturation={0}
        fade
        speed={0.5}
      />
    </group>
  );
}

export default function SpaceScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 1],
      }}
    >
      <Scene />
    </Canvas>
  );
}
