"use client"
import Image from 'next/image'
import React from 'react'

const HeroBanner = () => {
  return (
    <div>
         <div className='flex justify-between items-center gap-6'>
             {/* content */}
            <aside className='w-1/2 mx-auto'>
                <h5 className='text-xl'>Your Vision, My Design Expertise</h5>
                <h1 className='text-6xl'><span className=' bg-linear-to-r/oklch from-[#6bfdd9] to-[#f0ff6c]'>I'm Mehedi Hasan,</span> Mern Stack Developer based in bangladesh</h1>
                <p>Hi, I’m James, a passionate Product Designer based in the USA. I specialize in crafting intuitive, user-centered designs that merge functionality with aesthetics, With a focus on creating seamless digital experiences.</p>
            </aside>
            {/* image  */}
            <figure  className='w-1/2 mx-auto'>
                  <Image src={""} alt='hero image'></Image>
            </figure>
         </div>
         {/* call to action*/}
         <div>
            <a className='cursor-pointer bg-linear-to-r/oklch from-[#6bfdd9] to-[#f0ff6c] px-8 py-4 rounded-full text-black font-semibold '>Download Cv</a>
            <a className='cursor-pointer bg-linear-to-r/oklch from-[#6bfdd9] to-[#f0ff6c] px-8 py-4 rounded-full text-black font-semibold '>Download Cv</a>
         </div>
    </div>
  )
}

export default HeroBanner