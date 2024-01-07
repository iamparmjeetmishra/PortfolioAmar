import Link from 'next/link'
import Image from 'next/image'

import VideoPlayer from '../ui/VideoPlayer'
import ProfilePic from '/public/Img/MyProfile.jpg'

import Socials from '../ui/Socials'

let ytSrc = 'youtube/_cMxraX_5RE'
let title = 'Sprite Fight'
let thumb = 'https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'




const About = ({id, className}) => {
  return (
    <section id={id} className={`${className} rounded-lg bg-black py-10 overflow-hidden text-white h-full  `}>
        <div className='relative'>
          <h2 className='text-8xl font-extrabold text-center w-full pb-10 shadow-md scroll-left-to-right ' >about . about . about .</h2>
        </div>
      <div className='container mx-auto'>
        <div className='mt-8 flex flex-col items-center gap-6'>
          <Image src={ProfilePic} alt='Profile Pic of Amar' width={400} height={400} className='rounded-md' />
          <Socials className={'flex items-center gap-2'} />
            <h2 className='text-2xl font-bold text-center'>I am Amarjeet Mishra. A Passionate Video Editor.</h2>
            <h2 className='md:w-9/12 text-xl text-balance text-center text-zinc-400 '>I&apos;m a video editor with a knack for translating complex ideas into clear, compelling visuals. I&apos;ve helped businesses of all sizes create engaging videos that educate, inform, and inspire their target audiences. From corporate overviews to product demos to social media campaigns, I&apos;m passionate about crafting videos that drive results. If you&apos;re looking to elevate your brand&apos;s storytelling, let&apos;s connect and discuss how I can help you achieve your communication goals.</h2>
          <button className='font-bold px-3.5 rounded-full py-2 border-2 border-white transition-all hover:bg-white hover:text-black hover:border-white  '><Link href="#portfolio">Check Out My Work</Link></button>
        </div>
        <div className='w-5/6 mt-16 mx-auto'>
          <VideoPlayer ytSrc={ytSrc} title={title} thumb={thumb} />
        </div>
      </div>
    </section>
  )
}

export default About