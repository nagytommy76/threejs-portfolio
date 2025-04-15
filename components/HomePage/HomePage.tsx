'use client'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import LotusCar from '@/models/LotusCar'

export default function HomePage() {
   return (
      <section className='h-screen'>
         <Canvas className='bg-transparent w-full h-full' camera={{ near: 0.1, far: 1000 }}>
            <Suspense fallback={null}>
               <directionalLight position={[1, 4, 1]} intensity={2} />
               <ambientLight intensity={0.5} />
               {/* <pointLight position={[10, 5, 10]} intensity={2} /> */}
               {/* <spotLight position={[0, 50, 10]} angle={0.77} penumbra={1} intensity={2} /> */}
               <hemisphereLight color={'#ffffff'} groundColor='#000000' intensity={1} />
               <LotusCar position={[-1, 0, 0]} scale={[120, 120, 120]} rotation={[0.3, 1, 0]} />
            </Suspense>
         </Canvas>
      </section>
   )
}
