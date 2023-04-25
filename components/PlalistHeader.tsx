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
            <Image src="/imagem02.png" width={104} height={104} alt="PlayList"/>
            <strong>Chandle Moore</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagem04.png" width={104} height={104} alt="PlayList"/>
            <strong>Anos 80</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagem05.png" width={104} height={104} alt="PlayList"/>
            <strong>Ton Molinari</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagem06.png" width={104} height={104} alt="PlayList"/>
            <strong>50 Cent</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
            <Image src="/imagem07.png" width={104} height={104} alt="PlayList"/>
            <strong>Eminem</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a> 
        </div>
  )
}