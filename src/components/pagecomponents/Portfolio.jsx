
import Link from 'next/link'
import VideoPlayer from '../ui/VideoPlayer'
// import PortfolioCard from '../ui/PortfolioCard'

let ytSrc = 'youtube/_cMxraX_5RE'
let title = 'Sprite Fight'
let thumb = 'https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'



const Portfolio = ({id, className}) => {
  return (
    <>
      <section id={id} className={` ${className} py-8`}>
        <div className="container mx-auto h-full flex flex-col gap-8  px-4">
          <h2 className=" text-center text-7xl font-extrabold py-6 ">portfolio </h2>
          <p className='text-center font-medium text-xl text-zinc-600' >This is my some published projects.</p>
          {/* work */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className=''>
            <VideoPlayer ytSrc={ytSrc} title={title} thumb={thumb} />
            </div>
            <div className=''>
            <VideoPlayer ytSrc={ytSrc} title={title} thumb={thumb} />
            </div>
            <div className=''>
            <VideoPlayer ytSrc={ytSrc} title={title} thumb={thumb} />
            </div>
            <div className=''>
            <VideoPlayer ytSrc={ytSrc} title={title} thumb={thumb} />
            </div>
            <div className=''>
            <VideoPlayer ytSrc={ytSrc} title={title} thumb={thumb} />
            </div>
            <div className=''>
            <VideoPlayer ytSrc={ytSrc} title={title} thumb={thumb} />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio