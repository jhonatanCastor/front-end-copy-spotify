import { Play } from 'lucide-react'
import Image from 'next/image';


export function PlayListHeader() {
  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagesalbum01.png" width={104} height={104} alt="PlayList"/>
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagesalbum01.png" width={104} height={104} alt="PlayList"/>
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagesalbum01.png" width={104} height={104} alt="PlayList"/>
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagesalbum01.png" width={104} height={104} alt="PlayList"/>
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagesalbum01.png" width={104} height={104} alt="PlayList"/>
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagesalbum01.png" width={104} height={104} alt="PlayList"/>
            <strong>Wasting Light</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a> 
        </div>
  )
}