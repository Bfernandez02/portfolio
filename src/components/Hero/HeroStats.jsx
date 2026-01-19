import React from "react";
import { useState, useEffect } from "react";
import FlipNumbers from "react-flip-numbers";

const stats = [
  { number: 3, description: "Years of Experience" },
  { number: 20, description: "Projects Completed" },
  { number: 15, description: "Technologies" },
  { number: 20, description: "Happy Clients" },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-6 w-ful sm:gap-6">
      {stats.map((stat, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className={`flex flex-col flex-1  w-fit ${index !== stats.length - 1 ? "sm:border-r-[1px] sm:pr-4 border-primary" : ""}`}
            >
              <p className="font-medium flex items-center w-full">
                <AnimatedNumberIncrementor
                  initialValue={0}
                  targetValue={stat.number}
                  duration={900}
                />
                {<span className="text-[1.25rem] ml-2 flex-shrink-0">+</span>}
              </p>
              <p className="xl:text-[16px]! md:text-[14px]! text-secondary">
                {stat.description}
              </p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

const AnimatedNumberIncrementor = ({ initialValue, targetValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  let framesPerSecond = 60;

  useEffect(() => {
    const incrementPerFrame =
      (targetValue - initialValue) / ((duration / 1000) * framesPerSecond);
    let currentValue = initialValue;
    const interval = setInterval(() => {
      currentValue += incrementPerFrame;
      if (currentValue >= targetValue) {
        setCurrentValue(targetValue);
        clearInterval(interval);
      } else {
        setCurrentValue(currentValue);
      }
    }, 1000 / framesPerSecond);

    return () => clearInterval(interval);
  }, [initialValue, targetValue, duration]);

  return (
    <FlipNumbers
      height={30}
      width={20}
      color="var(--color-primary)"
      play
      perspective="100cm"
      numberStyle={{
        fontFamily: "Poppins",
      }}
      numbers={String(Math.floor(currentValue))}
    />
  );
};