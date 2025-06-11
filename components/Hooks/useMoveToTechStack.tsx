import { useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

/**
 * https://www.youtube.com/watch?v=_qzuECf1h2w&ab_channel=ThabishKader
 * https://github.com/Thabish-Kader/r3f-scroll/blob/main/scroll-based-animaiton/src/components/CanvasContainer.tsx
 */

export default function useMoveToTechStack() {
   const { camera, scene, invalidate } = useThree()
   const gsapTimeline = gsap.timeline()

   function moveCameraToTechStack() {
      // gsapTimeline.from('.second-scroll', {
      //    translateX: '50%',
      //    transformOrigin: 'center center',
      //    duration: 1.5,
      //    ease: 'power1.inOut',
      // })

      gsapTimeline
         .to(camera.position, {
            x: 3,
            y: 1,
            z: 0,
            scrollTrigger: {
               trigger: '.second-scroll',
               start: 'top bottom',
               end: 'top top',
               scrub: true,
            },
            onUpdate: () => {
               camera.lookAt(0, 0, 0)
               invalidate()
            },
         })
         .to(scene.position, {
            x: 3.4,
            y: -1.6,
            z: 0.4,
            scrollTrigger: {
               trigger: '.second-scroll',
               start: 'top bottom',
               end: 'top top',
               scrub: true,
            },
            onUpdate: () => {
               camera.lookAt(0, 0, 0)
               invalidate()
            },
         })
         // .fromTo('.second-scroll', { translateX: '100%', opacity: 0 }, { translateX: '0%', opacity: 1 }, 1.5)
         .to('.second-scroll', {
            // translateX: '100%',
            xPercent: 99,
            transformOrigin: 'center center',
            opacity: 1,
            duration: 3,
            // ease: 'power1.inOut',
            scrollTrigger: {
               trigger: '.second-scroll',
               toggleActions: 'play none none reverse',
               start: 'top center',
               end: 'top top',
               pin: true,
               scrub: true,
            },
         })
   }

   useGSAP(() => {
      moveCameraToTechStack()
   }, [camera.position])
   return moveCameraToTechStack
}
