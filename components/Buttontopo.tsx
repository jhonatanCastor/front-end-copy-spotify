import { ChevronLeft, ChevronRight} from 'lucide-react'

export function ButtonTopo(){
  return (
    <div className='flex items-center gap-3'>
    <button className='rounded-full bg-black/40 p-1 hover:bg-white/10 transition-colors'>
      <ChevronLeft/>
    </button>
    <button className='rounded-full bg-black/40 p-1 hover:bg-white/10 transition-colors'>
      <ChevronRight/>
    </button>
</div>
  )
}