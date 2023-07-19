import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <header className='lg:flex flex-col lg:flex-row justify-between items-center p-8 lg:p-12 lg:px-12 lg:py-2 bg-zinc-800 rounded mx-8 xl:mx-24 mt-24 mb-8'>
        <div className='flex justify-between lg:block'>
            <Link href="/">
                <h1 className='text-white text-left lg:text-center uppercase tracking-[0.20em] text-sm mb-0'>Alan Flores Blog</h1>
            </Link>
            <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
                <Image 
                    src={"/hamb-menu.svg"}
                    width={"17"}
                    height={"12"}
                    alt='hamburger menu'
                />
            </button>
        </div>
        <nav className={`flex flex-col items-center lg:flex-row gap-4 lg:gap-0 mb-0 lg:p-0 lg:m-0 lg:opacity-100 lg:visible transition-all ${isOpen ? 'opacity-100' : 'opacity-0 ease-in duration-100'} ${isOpen ? 'h-auto' : 'h-0 ease-in duration-100'} ${isOpen ? 'visible' : 'invisible'} ${isOpen ? 'p-8' : 'p-0'}`}>
            <Link href="/categories/html" className='text-zinc-400 ease-in duration-200 hover:text-flrs-400 font-medium text-sm px-9 lg:border-l-[1px]'>
                HTML
            </Link>
            <Link href="/categories/css" className='text-zinc-400 ease-in duration-200 hover:text-flrs-400 font-medium text-sm px-9 lg:border-l-[1px]'>
                CSS
            </Link>
            <Link href="/categories/javascript" className='text-zinc-400 ease-in duration-200 hover:text-flrs-400 font-medium text-sm px-9 lg:border-l-[1px]'>
                Javascript
            </Link>
            <Link href="/categories/reactjs" className='text-zinc-400 ease-in duration-200 hover:text-flrs-400 font-medium text-sm px-9 lg:border-l-[1px]'>
                React.js
            </Link>
            <Link href="/categories/nextjs" className='text-zinc-400 ease-in duration-200 hover:text-flrs-400 font-medium text-sm px-9 lg:border-l-[1px] lg:border-r-[1px]'>
                Next.js
            </Link>
        </nav>
        <div className={`flex justify-center gap-4 lg:h-auto lg:opacity-100 lg:visible ${isOpen ? 'opacity-100' : 'opacity-0 ease-in duration-100'} ${isOpen ? 'visible' : 'invisible'} ${isOpen ? 'h-auto' : 'h-0'}`}>
            <Link href="https://github.com/AlanMFlores" target='blank'>
                <Image src="/github.svg" alt='github logo' height="22" width="22"/>
            </Link>
            <Link href="https://www.linkedin.com/in/alanmflores/" target='blank'>
                <Image src="/linkedin.svg" alt='linkedin logo' height="22" width="22"/>
            </Link>
        </div>
    </header>
    <div>
    
    </div>
     
    </>

  )
}

export default Header