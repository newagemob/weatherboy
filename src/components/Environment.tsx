// This component will render the 3D environment based on the weather data using react-three-fiber and drei

import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky } from '@react-three/drei'
import { Mesh } from 'three'
import { Island, Tree, Sun } from './Models'

const Environment: React.FC = () => {
  return (
    <>
      <div className='main_canvas'>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Island />
            <Sky />
            {/* max zoom in is 1, max zoom out is 10 */}
            <OrbitControls
              enablePan={true}
              // zoom distance min and max: 0.5, 10
              enableZoom={true}
              maxDistance={5.5}
              minDistance={4.5}
              enableRotate={true}
              autoRotate
              autoRotateSpeed={0.9}
              maxPolarAngle={Math.PI / 2 + 0.1}
              minPolarAngle={Math.PI / 2 - 0.1}
            />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default Environment
