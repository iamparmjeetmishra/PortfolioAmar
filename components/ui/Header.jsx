'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Logo, BarIcon, CrossIcon } from '../../public'
import { Navbar, Button } from '../../components'


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

  return (
    <>
      <header className='flex items-center text-lg justify-between mt-4 py-4 border-y-2'>
        <Image src={Logo} alt='Amar Logo' width={100} priority={true} />
        <div className='hidden md:block'>
          <Navbar />
        </div>
        <Button className='hidden md:block' href="#contact" text='Let&apos;s Connect' />
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="lg:invisible visible opacity-100 bg-black p-3 w-12 h-12 rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white "
        >
          {toggleMenu
            ? <CrossIcon onClick={() => setToggleMenu(true)} />
            : <BarIcon onClick={() => setToggleMenu(false)} />
          }
        </button>
      </header>
      {
        toggleMenu && (
          <div className="relative z-10 w-full h-full">
            <div className="absolute left-0 right-0 px-2 py-4 dark:bg-[#212425] text-white rounded-xl ">
              <Navbar />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Header