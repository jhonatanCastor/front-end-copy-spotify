import Image from 'next/image';

export function PlayListBack() {
  return (
    <div className='grid grid-cols-8 gap-4 mt-4'>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bgwhite/10'>
            <Image src="/imagesalbum01.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>Play List</strong>
            <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bgwhite/10'>
            <Image src="/imagesalbum01.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>Play List</strong>
            <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bgwhite/10'>
            <Image src="/imagesalbum01.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>Play List</strong>
            <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bgwhite/10'>
            <Image src="/imagesalbum01.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>Play List</strong>
            <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a>

          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bgwhite/10'>
            <Image src="/imagesalbum01.png" className='w-full' width={104} height={104} alt="PlayList"/>
            <strong className='font-semibold'>Play List</strong>
            <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
          </a>

        </div>
  )
}