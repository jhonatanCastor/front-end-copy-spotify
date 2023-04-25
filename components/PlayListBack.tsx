import Image from 'next/image';
import { Play } from 'lucide-react'

export function PlayListBack() {
  return (
    <div className='grid grid-cols-8 gap-4 mt-4'>

          <a href='#' className='bg-white/5 group p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/imagem10.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>Onze20</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <a href='https://www.youtube.com/results?search_query=onze20' target="_blank">
                <Play />
              </a>
            </button>
            <span className='text-sm text-zinc-500'>
              Gênero: Reggae
              atividade desde: 2006
              Gravadoras:Maynard
            </span>
          </a>

          <a href='#' className='bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/imagem11.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>3030</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <a href='https://www.youtube.com/results?search_query=3030' target="_blank">
                <Play />
              </a>
            </button>
            <span className='text-sm text-zinc-500'>
              Gênero: Hip-Hop/rap
              atividade desde: 2010
              Gravadoras: Austro Music, 30/30 ...
            </span>
          </a>

          <a href='#' className='bg-white/5 group p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/imagem12.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>Poesia Acustica11</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <a href='https://www.youtube.com/results?search_query=poesia+11' target="_blank">
                <Play />
              </a>
            </button>
            <span className='text-sm text-zinc-500'>
              criador foi o carioca Paulo Alvarez, 
              Aos 25 anos, em 2015. 
              Comecei a cursar Direito.
            </span>
          </a>

          <a href='#' className='bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/imagem08.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>Bruno Mars</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <a href='https://www.youtube.com/results?search_query=bruno+mars' target="_blank">
                <Play />
              </a>
            </button>
            <span className='text-sm text-zinc-500'>
              Pais: Bernadette, Peter 
              Irmãos: Presley Hernandez
              Gênero: Pop
            </span>
          </a>

          <a href='#' className='bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
            <Image src="/imagem09.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>John Legend</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <a href='https://www.youtube.com/results?search_query=john+legend' target="_blank">
                <Play />
              </a>
            </button>
            <span className='text-sm text-zinc-500'>
              Cônjuge: Chrissy Teigen (desde 2013)
              Pais: Ronald Stephens, Phyllis Stephens
              Irmãos: Ronald Stephens II,
            </span>
          </a>

        </div>
  )
}