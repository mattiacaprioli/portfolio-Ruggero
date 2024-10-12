import React from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';

//import man image
import MenImg from '../assets/img/esempio-vini.jpg';

const Hero = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
    <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
      <div className='container mx-auto h-full lg:mt-10'>
        <div className='flex items-center h-full pt-10'>
          {/* left side */}

          {/* Prova per traduzione!!!! */}
          <div>
            <h1>{t('hello')}</h1>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('fr')}>Français</button>
            <button onClick={() => changeLanguage('it')}>Italiano</button>
          </div>


          <div className='hidden lg:flex flex-1 justify-end items-center h-full'>
            <img src={MenImg} className='opacity-75 rounded-2xl' alt='' />
          </div>
          {/* right side DA DOVER SISTEMARE LA FOTO CON UNA PERSONALE!*/}
          
          <div className='flex-1 flex flex-col items-center text-center'>
            <p className='text-lg text-accent mb-[22px]'>Hi, I'm Ruggero</p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>Sommelier & Wine<br />Selection Expert</h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center'>
            I'm specialize in wine consultancy and selection for restaurants, events, and private cellars.
            </p>
            <Link to="contact" spy={true} smooth={true} duration={500} className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all'>
              WORK WITH ME
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
