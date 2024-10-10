import React from "react";
import CountUp from "react-countup";

const achievementsList = [
  {
    metric: "Wines Selected",
    value: "500",
    postfix: "+",
  },
  {
    metric: "Events Curated",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Awards Won",
    value: "10",
  },
  {
    metric: "Years of Experience",
    value: "8",
  },
];

const AchievementsSection = () => {
  return (
    <div className="bg-tertiary py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className=" sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <CountUp
                  end={parseInt(achievement.value)}
                  duration={2.5}
                  separator=","
                  className="text-white text-4xl font-bold"
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
