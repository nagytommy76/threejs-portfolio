'use client'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import { /* useFrame,*/ useThree, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function LotusCar(props: any) {
   const gltf = useLoader(GLTFLoader, '/3d/Car.glb')
   const { nodes, materials } = gltf
   const carRef = useRef(null)

   return (
      <>
         <OrbitControls />
         <group {...props} ref={carRef} dispose={null}>
            <primitive object={nodes._rootJoint} />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_Base_0000_001_SM_Base_0000_MAT_Lotus_EMEYA_2022_Base_lMAT_Lotus_EMEYA_2022_Base1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_R_02_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_L_02_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_R_03_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_L_03_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_R_04_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_L_04_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_R_05_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_02_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_02_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_03_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_03_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Base_0000_001_SM_Base_0000_MAT_Lotus_EMEYA_2022_Base1_lMAT_Lotus_EMEYA_2022_Base1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_04_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Base_0000_001_SM_Base_0000_MAT_Lotus_EMEYA_2022_Base2_lMAT_Lotus_EMEYA_2023_Carbon1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_05_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_04_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_06_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_05_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_07_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_Base_0000_001_SM_Base_0000_MAT_Lotus_EMEYA_2022_Base3_lMAT_Lights1_0.geometry
               }
               material={materials.lMAT_Lights1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_08_lMAT_Lights1_0.geometry}
               material={materials.lMAT_Lights1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_06_lMAT_Lights1_0.geometry}
               material={materials.lMAT_Lights1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_09_lMAT_Lights1_0.geometry}
               material={materials.lMAT_Lights1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_Base_0000_001_SM_Base_0000_MAT_Lotus_EMEYA_2022_Base4_lMAT_Glass1_0.geometry
               }
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_10_lMAT_Glass1_0.geometry}
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_07_lMAT_Glass1_0.geometry}
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_11_lMAT_Glass1_0.geometry}
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_08_lMAT_Glass1_0.geometry}
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_12_lMAT_Glass1_0.geometry}
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_09_lMAT_Glass1_0.geometry}
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_13_lMAT_Glass1_0.geometry}
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_10_lMAT_Glass1_0.geometry}
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_14_lMAT_Glass1_0.geometry}
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_Base_0000_001_SM_Base_0000_MAT_Lotus_EMEYA_2022_Base5_lMAT_Details_EXT1_0.geometry
               }
               material={materials.lMAT_Details_EXT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_15_lMAT_Details_EXT1_0.geometry}
               material={materials.lMAT_Details_EXT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_Base_0000_001_SM_Base_0000_MAT_Lotus_EMEYA_2022_Base6_lMAT_Details_MAT1_0.geometry
               }
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_16_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_11_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_17_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_12_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_18_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_L_05_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_R_06_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_13_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_19_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_14_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_20_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_R_07_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_15_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_21_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_16_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_22_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_L_06_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Glass_R_08_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_17_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_23_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_18_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_24_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_19_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_25_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_20_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_26_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_21_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_27_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_22_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_28_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_23_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_29_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_24_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_30_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_25_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_31_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_26_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_32_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_27_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_33_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_28_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_34_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_FrontKit_0000_001_SM_FrontKit_0000_MAT_Lotus_EMEYA_2022_Base_001_lMAT_Lotus_EMEYA_2022_Base1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_FrontKit_0000_001_SM_FrontKit_0000_MAT_Lotus_EMEYA_2022_Base_002_lMAT_Lotus_EMEYA_2023_Carbon1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_FrontKit_0000_001_SM_FrontKit_0000_MAT_Lotus_EMEYA_2022_Base_003_lMAT_Lights1_0
                     .geometry
               }
               material={materials.lMAT_Lights1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_FrontKit_0000_001_SM_FrontKit_0000_MAT_Lotus_EMEYA_2022_Base_004_lMAT_Glass1_0
                     .geometry
               }
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_FrontKit_0000_001_SM_FrontKit_0000_MAT_Lotus_EMEYA_2022_Base_005_lMAT_Details_EXT1_0
                     .geometry
               }
               material={materials.lMAT_Details_EXT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_FrontKit_0000_001_SM_FrontKit_0000_MAT_Lotus_EMEYA_2022_Base_006_lMAT_Details_MAT1_0
                     .geometry
               }
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_FrontKit_0000_001_SM_FrontKit_0000_MAT_Lotus_EMEYA_2022_Base_007_lMAT_Details_Chassis_0001_002_0
                     .geometry
               }
               material={materials.lMAT_Details_Chassis_0001_002}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Hood_0000_001_SM_Hood_0000_MAT_Lotus_EMEYA_2022_Base_002_lMAT_Lotus_EMEYA_2022_Base1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Hood_0000_001_SM_Hood_0000_MAT_Lotus_EMEYA_2022_Base_003_lMAT_Lotus_EMEYA_2023_Carbon1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_Hood_0000_001_SM_Hood_0000_MAT_Lotus_EMEYA_2022_Base_004_lMAT_Details_MAT1_0
                     .geometry
               }
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Interior_0000_001_SM_Interior_0000_MAT_Lotus_EMEYA_2022_Base_003_lMAT_Lotus_EMEYA_2022_Base1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_35_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_00_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_29_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_36_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_01_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_30_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_37_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_02_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_31_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lRoot_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_38_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Interior_0000_001_SM_Interior_0000_MAT_Lotus_EMEYA_2022_Base_004_lMAT_Lotus_EMEYA_2023_Carbon1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_32_lMAT_Lotus_EMEYA_2023_Carbon_010_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon_010}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_39_lMAT_Lotus_EMEYA_2023_Carbon_010_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon_010}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_03_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_33_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_40_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_04_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Interior_0000_001_SM_Interior_0000_MAT_Lotus_EMEYA_2022_Base_005_lMAT_Details_EXT1_0
                     .geometry
               }
               material={materials.lMAT_Details_EXT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Interior_0000_001_SM_Interior_0000_MAT_Lotus_EMEYA_2022_Base_006_lMAT_Details_MAT1_0
                     .geometry
               }
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_00_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_05_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_01_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_06_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_02_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_07_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_34_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_41_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_08_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_42_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_09_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_03_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lRoot1_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_04_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_10_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_05_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_11_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_35_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_43_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_36_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_12_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_06_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lRoot2_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_13_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_07_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_14_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_37_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_44_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_38_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_15_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_08_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_16_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_09_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lRoot3_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_10_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_17_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_11_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_18_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_39_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_45_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_40_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_19_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_12_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_20_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_13_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_21_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_14_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_22_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_41_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_46_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_42_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_23_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_15_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_24_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_43_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_25_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_44_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_26_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_45_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_27_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_46_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_28_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_47_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_29_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_48_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_30_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_47_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_49_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_31_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_16_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_32_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_48_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_50_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_49_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_33_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_17_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_51_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_34_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_18_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_35_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_51_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_52_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_36_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_52_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_53_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_37_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_53_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_54_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_38_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_54_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_39_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_19_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_40_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_20_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_41_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_55_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_55_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_42_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Interior_0000_001_SM_Interior_0000_MAT_Lotus_EMEYA_2022_Base_007_lMAT_Details_INT1_0
                     .geometry
               }
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_21_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_43_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_22_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_44_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_56_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_56_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_45_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_57_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_46_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_58_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_57_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_47_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_23_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_48_lMAT_Details_INT1_0.geometry}
               material={materials.lMAT_Details_INT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Interior_0000_001_SM_Interior_0000_MAT_Lotus_EMEYA_2022_Base_008_lMAT_Details_Grid1_0
                     .geometry
               }
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_24_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_49_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_25_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_58_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_50_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_26_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_51_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_59_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_59_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_52_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_27_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_53_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_60_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_60_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_54_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_28_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_55_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_29_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_56_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_SteeringWheel_30_lMAT_Details_Grid1_0.geometry}
               material={materials.lMAT_Details_Grid1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_RearKit_0000_001_SM_RearKit_0000_MAT_Lotus_EMEYA_2022_Base_004_lMAT_Lotus_EMEYA_2022_Base1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_00_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_57_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_01_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_RearKit_0000_001_SM_RearKit_0000_MAT_Lotus_EMEYA_2022_Base_005_lMAT_Lotus_EMEYA_2022_Base1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_02_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_58_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_03_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_59_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_04_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_60_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_05_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_61_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_06_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_62_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_07_lMAT_Lotus_EMEYA_2022_Base1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_RearKit_0000_001_SM_RearKit_0000_MAT_Lotus_EMEYA_2022_Base_006_lMAT_Lotus_EMEYA_2023_Carbon1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_01_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_01_lMAT_Lotus_EMEYA_2023_Carbon1_0.geometry}
               material={materials.lMAT_Lotus_EMEYA_2023_Carbon1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_RearKit_0000_001_SM_RearKit_0000_MAT_Lotus_EMEYA_2022_Base_007_lMAT_Lights1_0
                     .geometry
               }
               material={materials.lMAT_Lights1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_RearKit_0000_001_SM_RearKit_0000_MAT_Lotus_EMEYA_2022_Base_008_lMAT_Glass1_0
                     .geometry
               }
               material={materials.lMAT_Glass1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_RearKit_0000_001_SM_RearKit_0000_MAT_Lotus_EMEYA_2022_Base_009_lMAT_Details_EXT1_0
                     .geometry
               }
               material={materials.lMAT_Details_EXT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes.lSM_RearKit_0000_001_SM_RearKit_0000_MAT_Lotus_EMEYA_2022_Base_010_lMAT_Details_MAT1_0
                     .geometry
               }
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_61_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_63_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_61_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_64_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_08_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_09_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_10_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_11_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_12_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_62_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_62_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_65_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_13_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_14_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_15_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_63_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_63_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_64_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_64_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_66_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_16_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_17_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_18_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_19_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_65_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_65_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_66_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_66_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_67_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_20_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_21_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_L_67_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_Door_R_67_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_68_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_22_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_69_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lANC_RearWing_23_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={nodes.lD_Body_70_lMAT_Details_MAT1_0.geometry}
               material={materials.lMAT_Details_MAT1}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_RearKit_0000_001_SM_RearKit_0000_MAT_Lotus_EMEYA_2022_Base_011_lMAT_Details_Chassis_0001_002_0
                     .geometry
               }
               material={materials.lMAT_Details_Chassis_0001_002}
               position={[0, 0.193, 0]}
            />
            <mesh
               castShadow
               receiveShadow
               geometry={
                  nodes
                     .lSM_Root_Lotus_EMEYA_R_2022_001_SM_Root_Lotus_EMEYA_R_2022_MAT_Lotus_EMEYA_2022_Base_005_lMAT_Lotus_EMEYA_2022_Base1_0
                     .geometry
               }
               material={materials.lMAT_Lotus_EMEYA_2022_Base1}
               position={[0, 0.193, 0]}
            />
         </group>
      </>
   )
}

export default LotusCar
