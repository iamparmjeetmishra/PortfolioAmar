'use client'
import Link from 'next/link'

import { IoMdHome } from "react-icons/io";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { GoProjectTemplate } from "react-icons/go";
import { IoMdContact } from "react-icons/io";



const Nav = ({className}) => {
  return (
    <nav className='flex items-center'>
      <ul className={`${className}, font-medium`}>
        <li className=''>
          <Link href='#hero' className='flex items-center py-1 px-2 border-b-2 border-transparent hover:border-black  '>
            <span className='w-5 mr-1'>
            <IoMdHome />
            </span>
            <span>Home</span>
          </Link>
        </li>
        <li className=''>
          <Link href='#about' className='flex items-center py-1 px-2 border-b-2 border-transparent hover:border-black  '>
            <span className='w-5 mr-1'>
            <MdOutlineSelfImprovement />
            </span>
            <span>About</span>
          </Link>
        </li>
        <li className=''>
          <Link href='#portfolio' className='flex items-center py-1 px-2 border-b-2 border-transparent hover:border-black  '>
            <span className='w-5 mr-1'>
            <GoProjectTemplate />
            </span>
            <span>Portfolio</span>
          </Link>
        </li>
        <li className=''>
          <Link href='#contact' className='flex items-center py-1 px-2 border-b-2 border-transparent hover:border-black  '>
            <span className='w-5 mr-1'>
            <IoMdContact />
            </span>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav