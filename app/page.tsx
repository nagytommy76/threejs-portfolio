import HomePage from '@/components/HomePage/HomePage'
import TechStackPage from '@/components/TechStackPage'

export default function Home() {
   return (
      <>
         <HomePage />
         <TechStackPage />
         <section className='third-scroll h-screen relative'>
            <h1>Harmadik oldal</h1>
         </section>
      </>
   )
}
