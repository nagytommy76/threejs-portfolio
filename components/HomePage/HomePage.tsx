'use client'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Room from '@/models/Room'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default function HomePage() {
   return (
      <section className='h-screen w-full fixed top-0 z-0'>
         <Canvas
            shadows={true}
            frameloop='demand'
            className='bg-transparent w-full h-full'
            camera={{
               near: 0.01,
               far: 70,
               fov: 90,
               position: [3, 2.5, 3],
               // X: jobbra-balra
               // Y: magasság
               // Z:előre hátra, ablak oldalon
               // position: [-1, 4, 2],
            }}
         >
            <directionalLight
               color={'#ffffff'}
               position={[3, 1.9, 1.5]}
               intensity={1}
               castShadow={true}
               shadow-mapSize-width={1024}
               shadow-mapSize-height={1024}
               shadow-camera-left={-10}
               shadow-camera-right={10}
               shadow-camera-top={10}
               shadow-camera-bottom={-10}
               shadow-camera-near={0.5}
               shadow-camera-far={50}
               shadow-bias={-0.005}
            />
            <ambientLight intensity={0.2} />
            <Suspense fallback={null}>
               <OrbitControls
                  // enablePan={true}
                  // enableZoom={true}
                  // enableRotate={true}
                  enablePan={false}
                  enableZoom={false}
                  enableRotate={false}
                  minPolarAngle={Math.PI / 5}
                  maxPolarAngle={Math.PI / 2.4}
                  maxAzimuthAngle={Math.PI / 2}
                  maxDistance={5}
               />
               <Room />
            </Suspense>
         </Canvas>
      </section>
   )
}
