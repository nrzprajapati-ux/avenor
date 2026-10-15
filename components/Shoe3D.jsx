import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, PresentationControls } from '@react-three/drei'

function Model({ url }) {
  try {
    const { scene } = useGLTF(url)
    return <primitive object={scene} scale={1.4} />
  } catch (e) {
    return null
  }
}

export default function Shoe3D() {
  // This component tries to load /models/shoe.gltf if present. Replace with a hosted GLTF.
  const modelUrl = '/models/shoe.gltf'

  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.8} position={[5, 5, 5]} />
      <PresentationControls global polar={[-0.2, 0.2]} azimuth={[-0.2, 0.4]}>
        <Model url={modelUrl} />
      </PresentationControls>
      <OrbitControls enablePan={false} />
    </Canvas>
  )
}
