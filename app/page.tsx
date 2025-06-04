import HomePage from '@/components/HomePage/HomePage'

export default function Home() {
   return (
      <section>
         <HomePage />
         <section className='second-scroll h-screen relative'>
            <h1>Második oldal CSÁ</h1>
         </section>
         <section className='third-scroll h-screen relative'>
            <h1>Harmadik oldal</h1>
         </section>
      </section>
   )
}
