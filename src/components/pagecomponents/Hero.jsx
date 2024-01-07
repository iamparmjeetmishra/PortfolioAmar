import Image from 'next/image'

import HeroImg from '../../../public/Img/HeroImg.jpg'

const Hero = ({ id, className }) => {
  return (
    <section id={id} className={`${className} my-8 container mx-auto w-full flex flex-col  gap-5`}>
      <div className='mb-8'>
        <h1 className=''>
          <span className='block text-xl font-medium md:font-bold'>Hello, I&apos;m Amar. </span>
          <span className='font-extrabold md:text-8xl text-5xl'>Designing & Transforming raw footage into <span className='text-zinc-500'>cinematic experiences</span> </span>
        </h1>
      </div>
      <div className=''>
        <Image
          src={HeroImg}
          alt='Hero Image of Editing Video'
          className='rounded-xl w-full shadow-md'
        />
      </div>
    </section>
  )
}

export default Hero