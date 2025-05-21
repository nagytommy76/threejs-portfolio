'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Room from '@/models/Room'

export default function HomePage() {
   return (
      <section className='h-screen'>
         <Canvas shadows className='bg-transparent w-full h-full' camera={{ near: 0.1, far: 50, fov: 80 }}>
            <directionalLight
               color={'#ffffff'}
               position={[3, 1.9, 1.5]}
               intensity={0.2}
               castShadow={true}
               shadow-mapSize-width={2048}
               shadow-mapSize-height={2048}
               shadow-camera-left={-10}
               shadow-camera-right={10}
               shadow-camera-top={10}
               shadow-camera-bottom={-10}
               shadow-camera-near={0.5}
               shadow-camera-far={50}
               shadow-bias={-0.005}
               // shadow-normalBias={0.02}
            />
            <pointLight
               position={[-1, 2.5, 0]}
               castShadow
               intensity={0.5}
               color={'#ffffff'}
               shadow-mapSize-width={2048}
               shadow-mapSize-height={2048}
               shadow-camera-left={-10}
               shadow-camera-right={10}
               shadow-camera-top={10}
               shadow-camera-bottom={-10}
               shadow-camera-near={0.5}
               shadow-camera-far={50}
               shadow-bias={-0.005}
            />
            <ambientLight intensity={0.35} />
            <Suspense fallback={null}>
               <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  minPolarAngle={Math.PI / 52}
                  maxPolarAngle={Math.PI / 2.4}
                  maxDistance={5}
               />
               <Room position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
            </Suspense>
         </Canvas>
      </section>
   )
}
