"use-client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// 
const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between items-center gap-6 py-6 px-4'>
             {/* logo */}
             <figure>
                  <Image src={""} alt='Portfolio logo'></Image>
             </figure>
             {/* nav menu */}
              <aside className='bg-[#243C3D] py-4 px-8 rounded-full'>
                   <ul className='flex justify-between gap-8 text-xl'>
                    <li>
                        <Link href={'#'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'#'}>About Us</Link>
                    </li>
                    <li>
                        <Link href={'#'}>Services</Link>
                    </li>
                    <li>
                        <Link href={'#'}>Projects</Link>
                    </li>
                    <li>
                        <Link href={'#'}>Blog</Link>
                    </li>
                    <li>
                        <Link href={'#'}>Contact Us</Link>
                    </li>
                   </ul>  
              </aside>
              {/* button */}
              <div>
                   <a className='cursor-pointer bg-linear-to-r/oklch from-[#6bfdd9] to-[#f0ff6c] px-8 py-4 rounded-full text-black font-semibold '>Download Cv</a>
              </div>
        </nav>
          
    </>
  )
}

export default Navbar