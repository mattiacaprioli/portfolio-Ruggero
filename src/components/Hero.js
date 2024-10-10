import React from 'react'
import { Link } from 'react-scroll'

//import man image
import MenImg from '../assets/img/header-foto-personale.png';

const Hero = () => {
  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full lg:mt-10'>
        <div className='flex items-center h-full pt-8'>
          {/* left side */}
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={MenImg} className='opacity-75' alt='' />
          </div>
          {/* right side DA DOVER SISTEMARE LA FOTO CON UNA PERSONALE!*/}
          
          <div className='flex-1 flex flex-col items-center text-center'>
            <p className='text-lg text-accent mb-[22px]'>Hi, I'm Ruggero</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>Sommelier & Wine<br />Selection Expert</h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center'>
            I specialize in wine consultancy and selection for restaurants, events, and private cellars.
            </p>
            <Link to="contact" spy={true} smooth={true} duration={500} className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>
              Work with me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
