import {Hero, About, Portfolio, Contact} from '../components'

export default function Home() {
  return (
    <section className=''>
      <Hero id='hero' className={'px-4'} />
      <About id='about' className={''} />
      <Portfolio id='portfolio' className={'px-4'} />
      <Contact id='contact' />
    </section>
  )
}
