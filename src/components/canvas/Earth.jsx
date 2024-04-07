import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Preload } from "@react-three/drei"
import CanvasLoader from '../Loader'

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 50,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
       }}
    >

      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          />
        <Earth />
      </Suspense>
    </Canvas>
  )
}
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

export default EarthCanvas