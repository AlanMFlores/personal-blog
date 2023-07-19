import React from 'react';
import Image from 'next/image';

const WebCard = () => {
  return (
    <div className='flex flex-col justify-center bg-flrs-400 w-full sm:w-[272px] h-[468px] md p-6 shadow-lg shadow-zinc-950/70 rounded-[4px] row-start-4 sm:row-start-3 sm:col-start-2 xl:row-start-2 xl:col-start-3'>
        <div className='flex flex-col items-center'>
            <Image src="alanmfloresdevlogo.svg"
            width={75}
            height={78} 
            className='mb-6'
            />
            <h2 className='text-xl font-bold text-zinc-900'>alanmfloresdev.com</h2>
        </div>
        <h3 className='text-center text-base mt-8 font-medium text-zinc-900'>Próximamente</h3>
    </div>
  )
}


export default WebCard