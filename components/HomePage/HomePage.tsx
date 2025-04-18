'use client'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { Suspense } from 'react'
import LotusCar from '@/models/LotusCar'

export default function HomePage() {
   return (
      <section className='h-screen'>
         <Canvas className='bg-transparent w-full h-full' camera={{ near: 0.1, far: 100 }}>
            <directionalLight position={[1, 4, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight color={'#ffffff'} groundColor='#000000' intensity={0.4} />
            <Suspense fallback={null}>
               <ScrollControls pages={3} damping={0.25}>
                  <LotusCar position={[0, 0, 0]} scale={[1, 1, 1]} rotation={[0, 0, 0]} />
               </ScrollControls>
            </Suspense>
         </Canvas>
      </section>
   )
}
