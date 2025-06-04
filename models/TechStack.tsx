'use client'
import React, { useState, useEffect } from 'react'
import type GLTFResult from './Types'

export default function TechStack({
   nodes,
   materials,
}: {
   nodes: GLTFResult['nodes']
   materials: GLTFResult['materials']
}) {
   const [hoveredTechStack, setHoveredTechStack] = useState<boolean>(false)
   const [hoveredSocial, setHoveredSocial] = useState<boolean>(false)

   useEffect(() => {
      document.body.style.cursor = hoveredTechStack || hoveredSocial ? 'pointer' : 'auto'
   }, [hoveredTechStack, hoveredSocial])

   return (
      <>
         <group
            name='TechStacks'
            onClick={() => console.log('TechStacks')}
            onPointerEnter={() => {
               setHoveredTechStack(true)
               // gsap.to(cameraRef.current.position, { duration: 0.5, x: 1.5, y: 1, z: 0 })
            }}
            onPointerLeave={() => setHoveredTechStack(false)}
         >
            {hoveredTechStack && (
               <rectAreaLight
                  intensity={1.5}
                  width={1.7}
                  height={0.45}
                  position={[-1.72, 2.15, 0.55]}
                  rotation={[0, 1.57, 0]}
               />
            )}
            {/* ReactFrame */}
            <group name='ReactFrame'>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Curve.geometry}
                  material={materials['SVGMat.001']}
                  position={[-1.762, 2.232, 1.168]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1.849}
               >
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve001.geometry}
                     material={materials['SVGMat.002']}
                     position={[-0.062, 0, 0.062]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve002.geometry}
                     material={materials['SVGMat.001']}
                     position={[-0.062, 0, 0.062]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve003.geometry}
                     material={materials['SVGMat.002']}
                     position={[-0.062, 0, 0.062]}
                  />
               </mesh>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Text.geometry}
                  material={materials.Text}
                  position={[-1.76, 2.083, 1.166]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1.772}
               />

               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube005.geometry}
                  material={materials.PictureFrame}
                  position={[-1.757, 2.174, 1.166]}
                  scale={1.353}
               />
            </group>
            {/* NextFrame */}
            <group name='NextFrame'>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Curve006.geometry}
                  material={materials.Text}
                  position={[-1.764, 2.178, 0.747]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1.353}
               >
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve004.geometry}
                     material={materials.Text}
                     position={[0.057, 0, 0]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve005.geometry}
                     material={materials.Text}
                     position={[-0.058, 0, 0]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve007.geometry}
                     material={materials.Text}
                     position={[-0.014, 0, 0.014]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve008.geometry}
                     material={materials.Text}
                     position={[-0.105, 0, 0]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve009.geometry}
                     material={materials.Text}
                     position={[0.08, 0, 0.022]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve010.geometry}
                     material={materials.Text}
                     position={[0.092, 0, 0.014]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve011.geometry}
                     material={materials.Text}
                     position={[0.11, 0, 0.014]}
                  />
               </mesh>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube006.geometry}
                  material={materials.PictureFrame}
                  position={[-1.757, 2.174, 0.759]}
                  scale={1.353}
               />
            </group>
            {/* MongoDBFrame */}
            <group name='MongoDBFrame'>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Curve015.geometry}
                  material={materials['SVGMat.013']}
                  position={[-1.765, 2.166, 0.391]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1.353}
               >
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve012.geometry}
                     material={materials['SVGMat.010']}
                     position={[-0.069, 0, -0.023]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve013.geometry}
                     material={materials['SVGMat.011']}
                     position={[-0.091, 0, -0.022]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve014.geometry}
                     material={materials['SVGMat.012']}
                     position={[-0.079, 0, 0.021]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve016.geometry}
                     material={materials.Shader}
                     position={[0.125, 0, -0.005]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve017.geometry}
                     material={materials['SVGMat.013']}
                     position={[0.043, 0, 0.006]}
                  />
               </mesh>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube007.geometry}
                  material={materials.PictureFrame}
                  position={[-1.758, 2.174, 0.353]}
                  scale={1.353}
               />
            </group>
            {/* TypescriptFrame */}
            <group name='TypescriptFrame'>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Curve018.geometry}
                  material={materials['SVGMat.015']}
                  position={[-1.756, 2.22, -0.055]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1.748}
               >
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve019.geometry}
                     material={materials['SVGMat.016']}
                     position={[-0.014, 0, 0.025]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve020.geometry}
                     material={materials['SVGMat.016']}
                     position={[0.034, 0, 0.025]}
                  />
               </mesh>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Text001.geometry}
                  material={materials.Text}
                  position={[-1.763, 2.048, -0.025]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1.455}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube008.geometry}
                  material={materials.PictureFrame}
                  position={[-1.758, 2.174, -0.054]}
                  scale={1.353}
               />
            </group>
         </group>
         <group
            name='Socials'
            onPointerEnter={() => setHoveredSocial(true)}
            onPointerLeave={() => setHoveredSocial(false)}
         >
            {hoveredSocial && (
               <rectAreaLight
                  intensity={1.5}
                  width={0.8}
                  height={0.4}
                  position={[-1.72, 1.75, 0.55]}
                  rotation={[0, 1.57, 0]}
               />
            )}
            {/* GithubFrame */}
            <group name='GithubFrame'>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Curve021.geometry}
                  material={materials.SVGMat}
                  position={[-1.756, 1.81, 0.76]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1.353}
               >
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Cube014.geometry}
                     material={materials.PictureFrame}
                     position={[0.001, -0.001, 0.033]}
                     rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Text002.geometry}
                     material={materials.Text}
                     position={[0.029, -0.003, 0.132]}
                     scale={1.391}
                  />
               </mesh>
            </group>
            {/* LinkedInFrame */}
            <group name='LinkedInFrame'>
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Curve022.geometry}
                  material={materials['SVGMat.004']}
                  position={[-1.753, 1.804, 0.35]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={1.353}
               >
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Cube015.geometry}
                     material={materials.PictureFrame}
                     position={[-0.001, -0.003, 0.029]}
                     rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Curve023.geometry}
                     material={materials['SVGMat.005']}
                     position={[-0.114, 0.001, 0.114]}
                  />
                  <mesh
                     castShadow
                     receiveShadow
                     geometry={nodes.Text003.geometry}
                     material={materials.Text}
                     position={[0.003, -0.005, 0.129]}
                     scale={1.386}
                  />
               </mesh>
            </group>
         </group>
      </>
   )
}
