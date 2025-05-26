'use client'

import React, { JSX, useRef } from 'react'
import * as THREE from 'three'

import { Html } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'

import type GLTFResult from './Types'

import TechStack from './TechStack'

export default function Room(props: JSX.IntrinsicElements['group']) {
   const roomRef = useRef(THREE.Mesh)

   const { nodes, materials } = useGLTF('/3d/Room.glb') as unknown as GLTFResult

   return (
      <group ref={roomRef} {...props}>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Walls.geometry}
            material={materials.Walls}
            position={[-0.036, 1.568, -0.009]}
         >
            {/* Left Wall light */}
            <rectAreaLight
               intensity={1}
               width={0.25}
               height={3.85}
               position={[-1.6, 1.4, 0]}
               rotation={[-1.57, 0, 0]}
            />
            {/* Right Wall light */}
            <rectAreaLight
               intensity={1}
               width={3.85}
               height={0.25}
               position={[0, 1.4, -1.65]}
               rotation={[-1.57, 0, 0]}
            />
         </mesh>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.WallBorder.geometry}
            material={materials.FloorBorder}
            position={[0.057, 2.002, 0.094]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chair.geometry}
            material={materials.Chair}
            position={[-0.499, 0.724, 0.559]}
            rotation={[-Math.PI, 1.087, -Math.PI]}
            scale={1.137}
         >
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Circle.geometry}
               material={materials['Material.010']}
               position={[0.203, -0.014, 0.159]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Circle001.geometry}
               material={materials['Material.009']}
               position={[0.204, -0.321, 0.159]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cube001.geometry}
               material={materials['Material.008']}
               position={[0, 0, 0.005]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder005.geometry}
               material={materials['Material.011']}
               position={[0.363, -0.46, -0.118]}
               rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder006.geometry}
               material={nodes.Cylinder006.material}
               position={[0.519, -0.46, 0.159]}
               rotation={[Math.PI / 2, 0, -0.456]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder007.geometry}
               material={nodes.Cylinder007.material}
               position={[0.366, -0.46, 0.436]}
               rotation={[Math.PI / 2, 0, -0.137]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder008.geometry}
               material={nodes.Cylinder008.material}
               position={[0.046, -0.46, 0.437]}
               rotation={[Math.PI / 2, 0, -0.333]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder009.geometry}
               material={nodes.Cylinder009.material}
               position={[-0.108, -0.46, 0.16]}
               rotation={[Math.PI / 2, 0, -0.539]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder010.geometry}
               material={nodes.Cylinder010.material}
               position={[0.047, -0.46, -0.117]}
               rotation={[Math.PI / 2, 0, 0.376]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane.geometry}
               material={materials['Material.002']}
               position={[0.084, 0.158, 0.144]}
               rotation={[0, 0, -1.6]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane001.geometry}
               material={materials['Material.007']}
               position={[0.499, 0.159, 0.143]}
               rotation={[0, 0.001, -1.61]}
            />
         </mesh>
         <group position={[-0.651, 2.271, -1.724]} rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder012_1.geometry}
               material={materials.Hexagon2}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder012_2.geometry}
               material={materials.Hexagon3}
            />
         </group>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Lamp.geometry}
            material={materials['Material.013']}
            position={[-1.599, 0.95, 1.451]}
         >
            <pointLight
               castShadow
               position={[0.2, 0, 0]}
               intensity={0.3}
               color={'#ffffff'}
               shadow-mapSize-width={512}
               shadow-mapSize-height={512}
               shadow-camera-left={-10}
               shadow-camera-right={10}
               shadow-camera-top={10}
               shadow-camera-bottom={-10}
               shadow-camera-near={0.5}
               shadow-camera-far={50}
               shadow-bias={-0.005}
            />
            {/* <spotLight color={'#ffffff'} position={[-0, 0, 0]} intensity={10} angle={0.7} penumbra={1} /> */}
         </mesh>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Flower.geometry}
            material={materials.Flower}
            position={[-1.323, 0.691, 1.854]}
            rotation={[0.67, 1.112, -0.691]}
            scale={2.63}
         >
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder011.geometry}
               material={materials.Vaze}
               position={[0.015, -0.15, -0.03]}
               rotation={[-0.09, -1.215, 0.202]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane003.geometry}
               material={materials['Material.005']}
               position={[-0.101, -0.031, 0.002]}
               rotation={[0.684, -0.794, 0.674]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane004.geometry}
               material={materials['Material.004']}
               position={[0.004, -0.043, 0.019]}
               rotation={[-0.013, 0.268, 0.179]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane005.geometry}
               material={materials['Material.003']}
               position={[0.072, -0.006, -0.021]}
               rotation={[0.24, 0.762, -0.344]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane006.geometry}
               material={materials['Material.006']}
               position={[-0.116, 0.002, -0.049]}
               rotation={[1.662, -0.929, 1.615]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane008.geometry}
               material={materials.Flower1}
               position={[0.103, -0.005, -0.092]}
               rotation={[1.966, 1.114, -2.34]}
            />
         </mesh>
         <group name='Background'>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Background.geometry}
               material={materials.BackgroundPlane}
               position={[-10.093, 0.019, -3.561]}
               scale={[1.5, 1.5, 1.5]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Background001.geometry}
               material={materials.BackgroundPlane}
               position={[15.87, 0.768, -18.227]}
               rotation={[0, Math.PI / 2, 0]}
            />
         </group>
         <group
            onClick={() => {
               console.log('Certek klikkk')
            }}
         >
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.CertFrameReact.geometry}
               material={materials.PictureFrame}
               position={[-1.772, 1.373, -1.438]}
               rotation={[0, 0, -Math.PI / 2]}
            >
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.React.geometry}
                  material={materials.CertReact}
                  position={[0, 0.012, 0]}
               />
            </mesh>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.CertFrameFrontend.geometry}
               material={materials.PictureFrame}
               position={[-1.772, 1.373, -1.103]}
               rotation={[0, 0, -Math.PI / 2]}
            >
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Frontend.geometry}
                  material={materials.Cert}
                  position={[0, 0.011, -0.001]}
               />
            </mesh>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.CertFrameLLM.geometry}
               material={materials.PictureFrame}
               position={[-1.772, 1.373, -0.767]}
               rotation={[0, 0, -Math.PI / 2]}
            >
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.LLM.geometry}
                  material={materials.Cert1}
                  position={[0, 0.011, -0.001]}
               />
            </mesh>
         </group>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.ThomasText.geometry}
            material={materials.ThomasText}
            position={[-1.76, 2.696, 0.564]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={1.255}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Flooring2.geometry}
            material={materials.Flooring}
            position={[1.521, 0.152, 0.093]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={nodes.Cylinder.material}
            position={[0.505, 1.575, -1.766]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={nodes.Cylinder001.material}
            position={[0.505, 1.641, -1.785]}
            rotation={[Math.PI / 2, 0, 0]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={nodes.Cylinder002.material}
            position={[0.505, 1.641, -1.806]}
            rotation={[Math.PI / 2, 0, 0]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowShade.geometry}
            material={materials.Shader}
            position={[1.005, 1.786, -1.705]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003.geometry}
            material={materials.Blinder}
            position={[1.005, 2.661, -1.705]}
            rotation={[0, 0, 1.571]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004.geometry}
            material={materials['Blinder.001']}
            position={[1.005, 2.047, -1.698]}
            rotation={[0, 0, 1.571]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowFrame.geometry}
            material={materials.WindowFrame}
            position={[0.994, 1.776, -1.777]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window.geometry}
            material={materials.Window}
            position={[0.997, 1.776, -1.989]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowGlass.geometry}
            material={materials.WindowLight}
            position={[0.999, 1.776, -1.955]}
         >
            <rectAreaLight
               intensity={10}
               width={0.8}
               height={1.55}
               position={[-0, -0, 0.05]}
               rotation={[0, 3.15, 0]}
            />
         </mesh>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Matress.geometry}
            material={materials.Matress}
            position={[-0.58, 0.557, -1.096]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow01.geometry}
            material={materials.Pillow}
            position={[-1.32, 0.647, -1.096]}
            rotation={[0, 0, -0.187]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow02.geometry}
            material={materials.Pillow1}
            position={[-1.056, 0.636, -1.094]}
            rotation={[0, 0, -0.561]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sheet.geometry}
            material={materials.Sheet}
            position={[-0.344, 1.107, -1.065]}
            rotation={[0.551, 0, 0]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.BedFrame.geometry}
            material={materials.BedFrame}
            position={[0.438, 0.17, -0.589]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.DeskTable.geometry}
            material={materials.DeskTable}
            position={[-1.186, 0.944, 0.571]}
            rotation={[0, 0, 3.138]}
         >
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.DeskBottom.geometry}
               material={materials.DeskLeg1}
               position={[-0.368, 0.772, 0.684]}
               rotation={[0, 0, -3.138]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.DeskFrame.geometry}
               material={nodes.DeskFrame.material}
               position={[-0.292, 0.048, -0.732]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.DeskLeg.geometry}
               material={materials['Material.012']}
               position={[-0.002, 0.064, 0.678]}
               rotation={[0, 0, 0.003]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.DeskLegs.geometry}
               material={materials.DeskLeg}
               position={[-0.003, 0.732, 0.681]}
               rotation={[0, 0, -3.138]}
            />
         </mesh>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials.MonitorBase}
            position={[-1.43, 0.944, 0.784]}
         />
         <group position={[-1.324, 1.327, 0.793]}>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cube027_1.geometry}
               material={materials.MonitorScreen}
               rotation={[0, 0, 0]}
            >
               <Html
                  castShadow
                  receiveShadow
                  center
                  fullscreen
                  distanceFactor={3}
                  scale={[0.2, 0.2, 0.2]}
                  rotation-y={1.57}
                  position={[0.006, 0, 0]}
                  transform
                  occlude={'blending'}
                  style={{
                     width: '665px',
                     height: '290px',
                  }}
               >
                  <div
                     onPointerDown={(e) => e.stopPropagation()}
                     style={{
                        width: '665x',
                        height: '290px',
                        background: 'red',
                        color: 'white',
                     }}
                  >
                     <h2>My Projects</h2>
                     <ul>
                        <li>
                           <a href='https://github.com/you/project1' target='_blank'>
                              Project 1
                           </a>
                        </li>
                        <li>
                           <a href='https://github.com/you/project2' target='_blank'>
                              Project 2
                           </a>
                        </li>
                     </ul>
                  </div>
               </Html>
            </mesh>

            <mesh
               onClick={() => {
                  console.log('Monitor Kijelző')
               }}
               castShadow
               receiveShadow
               geometry={nodes.Cube027.geometry}
               material={materials['Material.016']}
            ></mesh>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cube009.geometry}
               material={materials['Material.016']}
               position={[-0.025, 0.02, -0.011]}
            />
         </group>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mouse.geometry}
            material={nodes.Mouse.material}
            position={[-1.117, 0.973, 0.18]}
         >
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder012.geometry}
               material={nodes.Cylinder012.material}
               position={[-0.043, 0.004, 0]}
               rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Mouse001.geometry}
               material={nodes.Mouse001.material}
               position={[0, -0.002, 0]}
            />
         </mesh>
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials.PCCase}
            position={[-1.111, 1.25, -0.104]}
            scale={1.112}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials.PCCase}
            position={[-0.816, 1.25, -0.104]}
            scale={1.112}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials.PCCase}
            position={[-1.111, 1.25, -0.104]}
            scale={1.112}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes['be_quiet!'].geometry}
            material={materials.bequiet}
            position={[-0.804, 1.461, -0.076]}
            rotation={[Math.PI / 2, 0.53, -Math.PI / 2]}
            scale={[1, 0.118, 0.743]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={materials.PCCase}
            position={[-1.332, 0.968, -0.012]}
            scale={1.112}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.BézierCurve.geometry}
            material={materials.KeyboardCable}
            position={[-1.483, 1.23, 0.718]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.BézierCurve001.geometry}
            material={materials.KeyboardCable}
            position={[-1.664, 1.242, 0.838]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.BézierCurve002.geometry}
            material={materials.KeyboardCable}
            position={[-1.19, 0.961, 0.177]}
         />
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.Baseboard.geometry}
            material={materials.Baseboard_material}
         />
         <TechStack materials={materials} nodes={nodes} />
         <group name='Keyboard'>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.KeyboardButton021.geometry}
               material={materials['Material.014']}
               position={[-1.037, 0.98, 0.536]}
               rotation={[Math.PI / 2, 1.448, -Math.PI / 2]}
            >
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube018.geometry}
                  material={nodes.Cube018.material}
                  position={[-0.339, -0.022, 0.065]}
                  rotation={[-0.049, 0, 0]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube019.geometry}
                  material={nodes.Cube019.material}
                  position={[-0.339, -0.033, -0.07]}
                  rotation={[-0.049, 0, 0]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.kEYBOARDbASE.geometry}
                  material={materials.Keyboard}
                  position={[-0.078, -0.024, -0.001]}
                  rotation={[-0.049, 0, 0]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton.geometry}
                  material={materials['Material.001']}
                  position={[-0.351, 0, -0.038]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton001.geometry}
                  material={materials['Material.001']}
                  position={[-0.311, 0, -0.013]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton002.geometry}
                  material={materials['Material.001']}
                  position={[-0.305, 0, 0.012]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton003.geometry}
                  material={materials['Material.001']}
                  position={[-0.318, 0, 0.038]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton004.geometry}
                  material={materials['Material.001']}
                  position={[-0.301, 0, -0.069]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton005.geometry}
                  material={materials['Material.001']}
                  position={[-0.184, 0, -0.068]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton006.geometry}
                  material={materials['Material.001']}
                  position={[-0.07, 0, -0.069]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton007.geometry}
                  material={materials['Material.001']}
                  position={[0.037, 0, -0.069]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton008.geometry}
                  material={materials['Material.001']}
                  position={[0.038, 0, -0.039]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton009.geometry}
                  material={materials['Material.001']}
                  position={[0.038, 0, -0.014]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton010.geometry}
                  material={materials['Material.001']}
                  position={[0.038, 0, 0.063]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton011.geometry}
                  material={materials['Material.001']}
                  position={[0.12, 0, -0.039]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton012.geometry}
                  material={materials['Material.001']}
                  position={[0.12, 0, -0.013]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton013.geometry}
                  material={materials['Material.001']}
                  position={[0.12, 0, 0.012]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton014.geometry}
                  material={materials['Material.001']}
                  position={[0.121, 0, 0.038]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton015.geometry}
                  material={materials['Material.001']}
                  position={[-0.349, 0, 0.063]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton016.geometry}
                  material={materials['Material.001']}
                  position={[-0.351, 0, -0.069]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton018.geometry}
                  material={materials['Material.001']}
                  position={[-0.092, 0, 0.063]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton019.geometry}
                  material={materials['Material.001']}
                  position={[0.063, 0, 0.038]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButton020.geometry}
                  material={materials['Material.001']}
                  position={[0.171, 0, 0.063]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButtonSpace.geometry}
                  material={materials['Material.001']}
                  position={[-0.188, 0, 0.063]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButtonSpace001.geometry}
                  material={materials['Material.001']}
                  position={[-0.014, 0, 0.038]}
                  scale={[0.781, 1, 1]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButtonSpace002.geometry}
                  material={materials['Material.001']}
                  position={[-0.004, 0, -0.038]}
                  scale={[0.693, 1, 1]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButtonSpace003.geometry}
                  material={materials['Material.001']}
                  position={[-0.341, 0, 0.012]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButtonSpace004.geometry}
                  material={materials['Material.001']}
                  position={[-0.348, 0, 0.038]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButtonSpace005.geometry}
                  material={materials['Material.001']}
                  position={[-0.345, 0, -0.013]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButtonSpace006.geometry}
                  material={materials['Material.001']}
                  position={[0.133, 0, 0.063]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButtonSpace007.geometry}
                  material={materials['Material.001']}
                  position={[0.197, 0, 0.051]}
                  rotation={[0, 1.571, 0]}
               />
               <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.KeyboardButtonSpace008.geometry}
                  material={materials['Material.001']}
                  position={[0.197, 0, 0]}
                  rotation={[0, 1.571, 0]}
               />
            </mesh>
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Cylinder013.geometry}
               material={nodes.Cylinder013.material}
               position={[-1.118, 0.977, 0.616]}
               rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.BézierCurve003.geometry}
               material={materials.KeyboardCable}
               position={[-1.197, 0.976, 0.616]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane009.geometry}
               material={materials.test}
               position={[-1.025, 0.974, 0.709]}
               rotation={[0, 0, -0.124]}
               scale={[-0.061, -0.078, -0.187]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane010.geometry}
               material={materials.test}
               position={[-1.065, 0.98, 0.473]}
               rotation={[0, 0, -0.124]}
               scale={[-0.021, -0.02, -0.036]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane011.geometry}
               material={materials.test}
               position={[-1.027, 0.974, 0.376]}
               rotation={[0, 0, -0.124]}
               scale={[-0.06, -0.021, -0.047]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane012.geometry}
               material={materials.test}
               position={[-0.975, 0.968, 0.472]}
               rotation={[0, 0, -0.124]}
               scale={[-0.011, -0.017, -0.036]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane013.geometry}
               material={materials.test}
               position={[-1, 0.972, 0.472]}
               rotation={[0, 0, -0.124]}
               scale={[-0.011, -0.017, -0.01]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane014.geometry}
               material={materials.test}
               position={[-1.107, 0.985, 0.473]}
               rotation={[0, 0, -0.124]}
               scale={[-0.011, -0.02, -0.036]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane015.geometry}
               material={materials.test}
               position={[-1.106, 0.984, 0.798]}
               rotation={[0, 0, -0.124]}
               scale={[-0.011, -0.077, -0.048]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane016.geometry}
               material={materials.test}
               position={[-1.105, 0.984, 0.683]}
               rotation={[0, 0, -0.124]}
               scale={[-0.011, -0.077, -0.048]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.Plane017.geometry}
               material={materials.test}
               position={[-1.106, 0.984, 0.568]}
               rotation={[0, 0, -0.124]}
               scale={[-0.011, -0.077, -0.048]}
            />
         </group>
      </group>
   )
}

useGLTF.preload('/3d/Room.glb')
