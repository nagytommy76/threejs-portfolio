'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, SoftShadows, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import Room from '@/models/Room'

export default function HomePage() {
   return (
      <section className='h-screen'>
         <Canvas className='bg-transparent w-full h-full' camera={{ near: 0.1, far: 100 }}>
            <directionalLight
               color={'#ffffff'}
               position={[1, 1, 1]}
               intensity={3}
               castShadow
               shadow-mapSize={2048}
               shadow-bias={-0.001}
            />
            {/* <spotLight color={'#ffffff'} position={[5, -2, 0]} intensity={200} angle={0.5} penumbra={1} /> */}
            {/* <hemisphereLight color={'#ffffff'} groundColor='#000000' intensity={2.5} />
            <ambientLight intensity={0.4} /> */}
            <SoftShadows samples={10} />
            <Suspense fallback={null}>
               <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  minPolarAngle={Math.PI / 52}
                  maxPolarAngle={Math.PI / 2.4}
                  maxDistance={5}
               />
               <Room position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
               {/* <Environment preset='city' /> */}
            </Suspense>
            <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
         </Canvas>
      </section>
   )
}
