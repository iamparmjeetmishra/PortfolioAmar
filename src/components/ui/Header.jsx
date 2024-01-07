'use client'
import Image from 'next/image'
import { useState } from 'react'

import Logo from '../../../public/Img/Logo.png'
import Nav from './Nav'
import Button from './Button'

import { IoMdClose } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";


const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  function openSideMenu() {
    setToggleMenu(true)
  }
  function closeSideMenu() {
    setToggleMenu(false)
  }

  return (
    <header className='container mx-auto w-full flex items-center text-base justify-between mt-4 py-2 px-4 border-y-2'>
      <Image src={Logo} alt='Amar Logo' width={100} priority={true} />
      {/* Desktop nav */}
      <div className='hidden md:block'>
        <Nav className='flex items-center' />
      </div>
      <Button className='hidden md:block font-bold' href="#contact" text='Let&apos;s Connect' />
      {/* toggle Icon */}

      <FaBarsStaggered onClick={openSideMenu} className='md:hidden text-3xl' />

      {/* Mobile Nav  */}

      {toggleMenu && (
        <MobileNav closeSideMenu={closeSideMenu} />
      )}

    </header>
  )
}

export default Header;

function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-cream p-4">
        <div className="flex justify-end"   >
          <IoMdClose className='text-3xl' onClick={closeSideMenu} />
        </div>
        <div className=''>
          <Nav />
        </div>
      </div>
    </div>
  )
}