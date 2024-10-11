import React from "react";
import TimelineSectionMoblie from "./TimelineSectionMoblie";
import { timelineData } from "../data";

const TimelineSection = () => {
  return (
    <section id='experience' className='section bg-primary'>
      <div className='container flex flex-col items-center text-center'>
        <h2 className='section-title before:content-experience relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
          My Journey
        </h2>
        <p className='subtitle'>
          Here is a glimpse of my experience and milestones as a sommelier.
        </p>
      </div>

      <div className="lg:hidden">
        <TimelineSectionMoblie />
      </div>

      <div className="hidden lg:block relative max-w-7xl mx-auto px-0 lg:px-8">
        {/* Linea centrale */}
        <div className="border-l-4 border-accent absolute h-full left-1/2 transform -translate-x-1/2"></div>

        {/* Elementi della timeline */}
        {timelineData.map((item, index) => (
          <div key={index} className="mb-10 flex justify-between items-center w-full">
            {item.align === "right" ? (
              <>
                <div className="order-1 w-5/12">
                  <div className="text-right mb-4">
                    <span className="text-accent-hover font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="bg-tertiary rounded-lg shadow-sm p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="z-10 flex items-center order-1 bg-accent-hover shadow-sm w-5 h-5 rounded-full"></div>
                <div className="order-1 w-5/12"></div>
              </>
            ) : (
              <>
                <div className="order-1 w-5/12"></div>
                <div className="z-10 flex items-center order-1 bg-accent-hover shadow-sm w-5 h-5 rounded-full"></div>
                <div className="order-1 w-5/12">
                  <div className="text-left mb-4">
                    <span className="text-accent-hover font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="bg-tertiary rounded-lg shadow-sm p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
