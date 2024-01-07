
import Form from '../ui/Form'

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaGoogleDrive } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { TbBrandFiverr } from "react-icons/tb";


// import Socials from '../ui/Socials'

const Contact = ({ id }) => {
  return (
    <section id={id}>
      <h2 className='text-center text-8xl font-extrabold mb-12'>contact .</h2>
      <main className='border-2 container mx-auto rounded-lg shadow-md mb-8 p-10 flex flex-col gap-8 md:gap-0 md:flex-row justify-center '>
        {/* Card */}
        <div className='flex flex-col items-start'>
          <h4 className='font-extrabold text-7xl'>Say Hi</h4>
          <p className='text-xl text-balance font-medium my-4 text-gray-600 '>Feel free to drop your message. I will glad to talk to you about the project/projects.</p>
          {/* Socials */}
          <h2 className='text-2xl mb-4 font-medium'>Follow Me</h2>
          <div className={'flex gap-5 '}>
            <a
              href="https://www.instagram.com/amarjeetmishra001/"
              target="_blank"
              className="p-3 flex items-cente w-fit  rounded-md cursor-pointer bg-black text-white hover:bg-cyan-100 hover:text-black transition-all gap-2"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 flex items-cente w-fit  rounded-md cursor-pointer bg-black text-white hover:bg-cyan-100 hover:text-black transition-all gap-2"
            >
              <FaYoutube className="w-7 h-7" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 flex items-cente w-fit  rounded-md cursor-pointer bg-black text-white hover:bg-cyan-100 hover:text-black transition-all gap-2"
            >
              <FaGoogleDrive className="w-7 h-7" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 flex items-cente w-fit  rounded-md cursor-pointer bg-black text-white hover:bg-cyan-100 hover:text-black transition-all gap-2"
            >
              <IoDocumentTextSharp className="w-7 h-7" />
            </a>
            <a
              href="#"
              target="_blank"
              className="p-3 flex items-cente w-fit  rounded-md cursor-pointer bg-black text-white hover:bg-cyan-100 hover:text-black transition-all gap-2"
            >
              <TbBrandFiverr className="w-7 h-7" />
            </a>
          </div>
        </div>
        {/* Form */}
        <div className="md:w-1/2 relative ">
          <Form />
        </div>
      </main>
    </section>
  )
}

export default Contact