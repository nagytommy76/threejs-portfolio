'use client'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { Suspense } from 'react'
import Mars from '@/models/Mars'

export default function HomePage() {
   return (
      <section className='h-screen'>
         <Canvas className='bg-transparent w-full h-full' camera={{ near: 0.1, far: 100 }}>
            <directionalLight color={'#ffffff'} position={[-0.13, -0.1, 0]} intensity={4} />
            <hemisphereLight color={'#ffffff'} groundColor='#000000' intensity={0.2} />
            <Suspense fallback={null}>
               <ScrollControls pages={2} damping={0.25}>
                  <Mars position={[0, 0, 0]} scale={[0.7, 0.7, 0.7]} rotation={[0, 0, 0]} />
               </ScrollControls>
            </Suspense>
         </Canvas>
      </section>
   )
}
