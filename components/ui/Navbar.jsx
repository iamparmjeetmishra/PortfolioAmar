'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HomeIcon, ResumeIcon, WorksIcon, ContactIcon } from '@/public'


const Navbar = () => {
  const router = useRouter();

  return (
    <nav className=''>
      <ul className='flex flex-col md:flex-row gap-2'>
        <Link className={router.pathname == '#hero' ? 'active' : 'Link'} href='#hero'>
          <span className='lg:hidden block w-6'>
            <HomeIcon />
          </span>
          <span>Home</span>
        </Link>
        <Link className='Link' href='#about'>
          <span className='lg:hidden block w-6'>
            <ResumeIcon />
          </span>
          <span>About</span>
        </Link>
        <Link className='Link' href='#portfolio'>
          <span className='lg:hidden block w-6'>
            <WorksIcon />
          </span>
          <span>Portfolio</span>
        </Link>
        <Link className='Link' href='#contact'>
          <span className='lg:hidden block w-6'>
            <ContactIcon />
          </span>
          <span>Contact</span>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar