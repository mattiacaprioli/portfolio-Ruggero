import React from "react";

import { timelineData } from "../data";

const TimelineSectionMobile = () => {
  return (
    <section id='experience' className='bg-primary'>
      <div className="relative max-w-7xl mx-auto px-0">
        {/* Linea centrale per lg e più */}
        <div className="border-l-4 border-accent absolute h-full left-8 transform"></div>

        {/* Elementi della timeline */}
        {timelineData.map((item, index) => (
          <div key={index} className=" mb-10 flex flex-col lg:flex-row justify-between items-center w-full relative">
            {/* Posizionamento degli elementi a destra per mobile e alternato per desktop */}
            <div className={`container pl-14 mx-auto order-1 w-full lg:w-5/12 lg:${item.align === 'right' ? 'order-2' : 'order-1'} lg:block`}>
              <div className="text-left mb-4">
                <span className="text-accent-hover font-bold text-lg">{item.year}</span>
              </div>
              <div className="bg-tertiary rounded-lg shadow-sm p-6 lg:pl-12">
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
            {/* Pallini */}
            <div className="z-10 flex items-center bg-accent-hover shadow-sm w-5 h-5 rounded-full absolute left-6 top-1/2 transform"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSectionMobile;
