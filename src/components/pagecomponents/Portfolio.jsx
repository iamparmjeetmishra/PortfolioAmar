'use client'
import { InstagramEmbed} from 'react-social-media-embed'
import VideoPlayer from '../ui/VideoPlayer'
import { FaYoutube, FaInstagram } from "react-icons/fa";

import PortfolioCard from '../ui/PortfolioCard'
import ButtonPort from '../ui/ButtonPort'


let ytSrc1 = 'youtube/BXQ5snkhNh8'
let src1 = 'https://www.youtube.com/watch?v=BXQ5snkhNh8'
let title1 = 'All Indian Prime Ministers who have tirelessly served our nation.'
let thumb1 = 'https://ik.imagekit.io/parmjeet/Amar/All%20Indian%20Prime%20Ministers%20who%20have%20tirelessly%20served%20our%20nation..jpg?updatedAt=1705672883738'

let ytSrc2 = 'https://www.instagram.com/reel/C2ALcIntkNv/?utm_source=ig_embed&amp;utm_campaign=loading'
let src2 = 'https://www.instagram.com/reel/C2ALcIntkNv/?utm_source=ig_embed&amp;utm_campaign=loading'
let title2 = 'Do you know how many weapons India has.......?'

let src3 = 'https://www.instagram.com/reel/C2KUg-xtSu6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
let title3 = '7 things you should know......?'

let src4 = 'https://www.instagram.com/reel/C2M53BdNPi-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
let title4 = 'Did you know which bank is the largest in India?'


const Portfolio = ({ id, className }) => {
  return (
    <>
      <section id={id} className={` ${className} py-8 pb-0`}>
        <div className="container mx-auto h-full flex flex-col gap-8">
          <h2 className=" text-center text-7xl font-extrabold py-6 ">portfolio </h2>
          <p className='text-center font-medium text-xl text-zinc-600' >This is my some published projects.</p>
          {/* work */}
          <div className='flex flex-col md:flex-row gap-4  w-full'>
            {/* 1st */}
            <div className='border border-gray-400 bg-white rounded-xl shadow'>
              <VideoPlayer ytSrc={ytSrc1} title={title1} thumb={thumb1} />
              <div className='p-4'>
                <div className='mb-4 border-b-2'>
                  <a href={src1} target='_blank' className='flex gap-2 items-center'>
                    <FaYoutube className='text-6xl md:text-2xl ' />
                    <h3 className='text-lg font-medium'>All Indian Prime Ministers who have tirelessly served our nation.</h3>
                  </a>
                </div>
                <div className='flex flex-wrap gap-3'>
                  <ButtonPort title='Storytelling' />
                  <ButtonPort title='Adobe Premiere Pro' />
                  <ButtonPort title='Adobe After Effects' />
                  <ButtonPort title='Elements' />
                  <ButtonPort title='Custom Audio Script' />
                  <ButtonPort title='AI Generated Voice' />
                  <ButtonPort title='Custom Colors' />
                  <ButtonPort title='Stock Images' />
                  <ButtonPort title='Animation' />
                  <ButtonPort title='Motion Graphics' />
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className='border border-gray-400 bg-white rounded-xl shadow'>
              <VideoPlayer ytSrc={ytSrc1} title={title1} thumb={thumb1} />
              <div className='p-4'>
                <div className='mb-4 border-b-2'>
                  <a href={src1} target='_blank' className='flex gap-2 items-center'>
                    <FaYoutube className='text-6xl md:text-2xl ' />
                    <h3 className='text-lg font-medium'>All Indian Prime Ministers who have tirelessly served our nation.</h3>
                  </a>
                </div>
                <div className='flex flex-wrap gap-3'>
                  <ButtonPort title='Storytelling' />
                  <ButtonPort title='Adobe Premiere Pro' />
                  <ButtonPort title='Adobe After Effects' />
                  <ButtonPort title='Elements' />
                  <ButtonPort title='Custom Audio Script' />
                  <ButtonPort title='AI Generated Voice' />
                  <ButtonPort title='Custom Colors' />
                  <ButtonPort title='Stock Images' />
                  <ButtonPort title='Animation' />
                  <ButtonPort title='Motion Graphics' />
                </div>
              </div>
            </div>
          </div>

          {/* Insta */}
          <div className='flex flex-col md:flex-row lg:flex-nowrap flex-wrap gap-4  w-full'>
            {/* 1st */}
            <div className='bg-white border border-gray-400 instaDiv w-full rounded-xl shadow overflow-hidden'>
              <InstagramEmbed
                url='https://www.instagram.com/p/C2ALcIntkNv/'
                linkText={title2}
                width={'100%'}
              />
              <div className='p-4'>
                <div className='mb-4 border-b-2'>
                  <a href={src2} target='_blank' className='flex  items-center'>
                    {/* <FaInstagram className='text-6xl md:text-2xl ' /> */}
                    <h3 className='text-lg mb-4 font-medium'>{ title2 }</h3>
                  </a>
                </div>
                <div className='flex flex-wrap gap-3'>
                  <ButtonPort title='Storytelling' />
                  <ButtonPort title='Instagram' />
                  <ButtonPort title='Adobe Premiere Pro' />
                  <ButtonPort title='Adobe After Effects' />
                  <ButtonPort title='Elements' />
                  <ButtonPort title='Custom Audio Script' />
                  <ButtonPort title='AI Generated Voice' />
                  <ButtonPort title='Custom Colors' />
                  <ButtonPort title='Stock Images' />
                  <ButtonPort title='Animation' />
                  <ButtonPort title='Motion Graphics' />
                </div>
              </div>
            </div>
            {/* 2nd */}
            <div className='bg-white border instaDiv w-full border-gray-400 rounded-xl shadow overflow-hidden'>
              <InstagramEmbed
                url='https://www.instagram.com/p/C2KUg-xtSu6'
                linkText={title3}
              />
              <div className='p-4'>
                <div className='mb-4 border-b-2'>
                  <a href={src2} target='_blank' className='flex  items-center'>
                    {/* <FaInstagram className='text-6xl md:text-2xl ' /> */}
                    <h3 className='text-lg mb-4 font-medium'>{ title3 }</h3>
                  </a>
                </div>
                <div className='flex flex-wrap gap-3'>
                  <ButtonPort title='Storytelling' />
                  <ButtonPort title='Instagram' />
                  <ButtonPort title='Adobe Premiere Pro' />
                  <ButtonPort title='Adobe After Effects' />
                  <ButtonPort title='Elements' />
                  <ButtonPort title='Custom Audio Script' />
                  <ButtonPort title='AI Generated Voice' />
                  <ButtonPort title='Custom Colors' />
                  <ButtonPort title='Stock Images' />
                  <ButtonPort title='Animation' />
                  <ButtonPort title='Motion Graphics' />
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div className='bg-white border instaDiv w-full lg:col-span-1 md:col-span-3 border-gray-400 rounded-xl shadow overflow-hidden'>
              <InstagramEmbed
                url='https://www.instagram.com/p/C2M53BdNPi-/'
                linkText={title4}
              />
              <div className='p-4'>
                <div className='mb-4 border-b-2'>
                  <a href={src2} target='_blank' className='flex  items-center'>
                    {/* <FaInstagram className='text-6xl md:text-2xl ' /> */}
                    <h3 className='text-lg mb-4 font-medium'>{ title4 }</h3>
                  </a>
                </div>
                <div className='flex flex-wrap gap-3'>
                  <ButtonPort title='Storytelling' />
                  <ButtonPort title='Instagram' />
                  <ButtonPort title='Adobe Premiere Pro' />
                  <ButtonPort title='Adobe After Effects' />
                  <ButtonPort title='Elements' />
                  <ButtonPort title='Custom Audio Script' />
                  <ButtonPort title='AI Generated Voice' />
                  <ButtonPort title='Custom Colors' />
                  <ButtonPort title='Stock Images' />
                  <ButtonPort title='Animation' />
                  <ButtonPort title='Motion Graphics' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio