import React from 'react';

// import social data
import {social} from '../data';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12 md:py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>

            {/* social icons */}
            <div className='flex space-x-6 items-center justify-center'>
                {social.map((item,index) => {
                    const {href, icon} = item;
                    return (
                        <a 
                            className='text-accent text-base'
                            href={href} 
                            key={index}
                        >
                            {icon}
                        </a>
                    )
                })}
            </div>

            {/* copyright */}
            <p>&copy; 2024 Ruggero. All right reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
