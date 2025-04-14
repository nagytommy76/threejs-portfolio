'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import LotusCar from '@/models/LotusCar'

export default function HomePage() {
   return (
      <section className='h-screen'>
         <h1 className='text-4xl font-bold'>Three.js Portfolio</h1>
         <Canvas className='bg-transparent' camera={{ near: 0.1, far: 1000 }}>
            <Suspense fallback={null}>
               <directionalLight />
               <ambientLight />
               <pointLight />
               <spotLight />
               <hemisphereLight />
               <LotusCar />
            </Suspense>
         </Canvas>
      </section>
   )
}
