import HomePage from '@/components/HomePage/HomePage'
import TechStackPage from '@/components/TechStackPage'

export default function Home() {
   return (
      <>
         <HomePage />
         {/* Dummy placeholder section */}
         <section className='-z-1 h-screen relative'></section>
         <TechStackPage />
         <section className='third-scroll h-screen relative'>
            <h1>Harmadik oldal</h1>
         </section>
      </>
   )
}
