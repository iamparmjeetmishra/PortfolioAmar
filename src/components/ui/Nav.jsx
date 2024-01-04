'use client'
import Link from 'next/link'

import HomeIcon from '../../../public/icons/HomeIcon'
// import ResumeIcon from '../../public/icons/ResumeIcon'
// import WorksIcon from '../../public/icons/WorksIcon'
// import ContactIcon from '../../public/icons/ContactIcon'

const Nav = () => {
  return (
    <nav className='flex items-center'>
      <ul className='flex items-center'>
        <li className=''>
          <Link href='#hero' className='flex items-center'>
            <span className='w-4'>
              <HomeIcon />
            </span>
            <span>Home</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav