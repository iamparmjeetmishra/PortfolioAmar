import Image from 'next/image'

import Logo from '../../../public/Img/Logo.png'
import Nav from './Nav'
import Button from './Button'

const Header = () => {
  return (
    <header className='flex items-center text-lg justify-between mt-4 py-4 border-y-2'>
      <Image src={Logo} alt='Amar Logo' width={100} priority={true} />
      <div className=''>
          <Nav />
      </div>
      <Button className='hidden md:block' href="#contact" text='Let&apos;s Connect' />
      {/* toggle Icon */}
      <button className="lg:invisible md:hidden visible opacity-100 bg-black p-3 w-12 h-12 rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white ">Let&apos;s Connect</button>

    </header>
  )
}

export default Header