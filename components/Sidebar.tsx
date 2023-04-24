import { Home as HomeIcon, Search, Library } from 'lucide-react'

export function Sidebar(){
  return (
    <aside className='w-72 bg-zinc-950 p-6'>
    <div className='flex items-center gap-2'>
       <div className='w-3 h-3 bg-red-500 rounded-full'/>
       <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
       <div className='w-3 h-3 bg-green-500 rounded-full'/>
    </div>

    <nav className='space-y-5 mt-10'>

      <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <HomeIcon />
      </a>

      <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <Search />
      </a>

      <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
        <Library />
      </a>

    </nav>

    <nav className='mt-6 pt10 border-zinc-800 flex flex-col gap-3'>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Maverikcity</a>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Rap Niga</a>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hitis</a>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Treino Pesado</a>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>This is Ton</a>
      <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>This is Class</a>
    </nav>
  </aside>
  )
}