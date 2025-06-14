import { useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

/**
 * https://www.youtube.com/watch?v=_qzuECf1h2w&ab_channel=ThabishKader
 * https://github.com/Thabish-Kader/r3f-scroll/blob/main/scroll-based-animaiton/src/components/CanvasContainer.tsx
 */

export default function useMoveToTechStack() {
   const observer = ScrollTrigger.normalizeScroll(true)

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
            // xPercent: 99,
            // transformOrigin: 'center center',
            opacity: 1,
            scrollTo: {
               y: '.second-scroll',
               autoKill: true,
            },
            // duration: 3,
            // ease: 'power1.inOut',
            scrollTrigger: {
               onToggle: (self) => {
                  console.log(self)
                  gsap.to(window, {
                     scrollTo: { y: 1 * innerHeight, autoKill: false },
                     onStart: () => {
                        if (!observer) return
                        observer.disable() // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
                        observer.enable()
                     },
                     duration: 1,
                     // onComplete: () => (scrollTween = null),
                     overwrite: true,
                  })
               },
               trigger: '.second-scroll',
               toggleActions: 'play none none reverse',
               start: '0% center',
               end: '+=100%',
               pin: true,
               scrub: true,
               // markers: true,
               snap: {
                  snapTo: 'labels', // snap to the closest label in the timeline
                  duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                  delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                  ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
               },
            },
         })
   }

   useGSAP(() => {
      moveCameraToTechStack()
   }, [camera.position])
   return moveCameraToTechStack
}
