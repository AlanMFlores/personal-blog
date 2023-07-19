import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='grid place-content-center bg-flrs-400 h-48'>
        <div className='flex flex-col items-center gap-6'>
            <Image
                src="/alanmfloresdevlogo.svg"
                width="48"
                height="50"
                alt="alanmfloresdev logo"
            />
            <small>Diseñado y Desarrollado por <strong>Alan Flores 🛠️</strong></small>
        </div>
    </div>
  )
}

export default Footer