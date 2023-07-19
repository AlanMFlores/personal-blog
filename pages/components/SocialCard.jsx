import React from 'react';
import Image from 'next/image';

const WebCard = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-neutral-300 w-full sm:w-[272px] h-[468px] md p-6 shadow-lg shadow-zinc-950/70 rounded-[4px] row-start-7 sm:row-start-6 lg:row-start-5 xl:row-start-3 xl:col-start-2'>
        <div className='flex flex-col items-center mb-8'>
            <Image src="/profile.png"
            width={97}
            height={97} 
            className='mb-6'
            />
            <h2 className='text-xl font-bold text-zinc-900 mb-2'>Alan Flores</h2>
            <h3 className='font-light text-sm'>Frontend Developer</h3>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
                <Image 
                    src="/github2.svg"
                    height="16"
                    width="16"
                />
                <p className='font-medium text-zinc-900 text-sm'>@alanmflores</p>
            </div>
            <div className='flex gap-2'>
                <Image 
                    src="/linkedin2.svg"
                    height="16"
                    width="16"
                />
                <p className='font-medium text-zinc-900 text-sm'>@alanmflores</p>
            </div>
            <div className='flex gap-2'>
                <Image 
                    src="/twitter.svg"
                    height="19"
                    width="16"
                />
                <p className='font-medium text-zinc-900 text-sm'>@alanmfloresdev</p>
            </div>
            <div className='flex gap-2'>
                <Image 
                    src="/instagram.svg"
                    height="16"
                    width="16"
                />
                <p className='font-medium text-zinc-900 text-sm'>@alanmfloresdev</p>
            </div>
            <div className='flex gap-2'>
                <Image 
                    src="/email.svg"
                    height="16"
                    width="13"
                />
                <p className='font-medium text-zinc-900 text-sm'>alanmfloresdev@gmail.com</p>
            </div>
        </div>
    </div>
  )
}


export default WebCard