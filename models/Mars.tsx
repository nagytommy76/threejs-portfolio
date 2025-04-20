import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Mars(props: any) {
   const group = useRef(null)
   const { nodes, materials, animations } = useGLTF('/3d/mars.glb')
   const { actions } = useAnimations(animations, group)

   useEffect(() => {
      console.log(actions)
      console.log(animations)
      actions['Rotation']?.play()
      actions['Rotation']?.setDuration(100)
   }, [actions])

   //    useFrame((state) => {
   //       const { current } = group
   //       if (current) {
   //          current.rotation.y += 0.0001
   //       }
   //    })

   return (
      <group ref={group} {...props} dispose={null}>
         <group name='Sketchfab_Scene'>
            <group name='Sketchfab_model' /*rotation={[-1.413, 0, 0]}*/>
               <group name='root'>
                  <group name='GLTF_SceneRootNode' /*rotation={[Math.PI / 2, 0, 0]}*/>
                     <group name='mars_1' /*rotation={[Math.PI, Math.PI / 2, 0]} scale={8}*/>
                        <mesh
                           name='Object_4'
                           castShadow
                           receiveShadow
                           geometry={nodes.Object_4.geometry}
                           material={materials.mars}
                        />
                     </group>
                  </group>
               </group>
            </group>
         </group>
      </group>
   )
}

useGLTF.preload('/3d/mars.glb')
