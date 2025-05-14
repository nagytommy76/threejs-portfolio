'use client'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { Suspense } from 'react'
import Room from '@/models/Room'

export default function HomePage() {
   return (
      <section className='h-screen'>
         <Canvas className='bg-transparent w-full h-full' camera={{ near: 0.1, far: 100 }}>
            <directionalLight color={'#ffffff'} position={[-1, 0, 0]} intensity={4} />
            <hemisphereLight color={'#ffffff'} groundColor='#000000' intensity={1} />
            <Suspense fallback={null}>
               <ScrollControls pages={2} damping={0.25}>
                  <Room position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0.5, -0.5, 0]} />
               </ScrollControls>
            </Suspense>
         </Canvas>
      </section>
   )
}
