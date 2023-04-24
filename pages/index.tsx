import { ButtonTopo } from '@/components/Buttontopo';
import { Footer } from '@/components/Footer';
import { PlayListHeader } from '@/components/PlalistHeader';
import { PlayListBack } from '@/components/PlayListBack';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (

   <div className='h-screen flex flex-col bg-zinc-900 text-zinc-50'>

    <div className='flex flex-1'>

      <Sidebar />

      <main className='flex-1 p-6'>
       <ButtonTopo />
        <h1 className='font-semibold text-3xl mt-10'>Good Afeternoom</h1>
        <PlayListHeader />
        <h2 className='font-semibold text-3xl mt-10'>Made for Jhon Schell</h2>
        <PlayListBack />
      </main>

    </div>

       <Footer />

   </div>
  )
}
