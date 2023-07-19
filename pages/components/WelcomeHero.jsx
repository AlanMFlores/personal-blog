import React from 'react';
import Image from 'next/image';

const WelcomeHero = () => {
  return (
    <div className='w-full xl:row-start-1 sm:col-span-2 xl:col-span-3 relative -order-1'>
        <div className='absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]'>
            <h2 className='text-white text-center text-4xl xl:text-5xl mb-4'>Alan Flores</h2>
            <p className='text-white font-thin text-center text-xl xl:text-2xl'>Bienvenidos</p>
        </div>
        <div className="relative h-[468px] bg-zinc-900 mix-blend-screen">
            <Image
                src="/computerhero.jpg"
                fill
                alt='welcome hero'
                className='grayscale opacity-70'
                style={{objectFit: "cover"}}
            />
            
        </div>
    </div>
  )
}

export default WelcomeHero