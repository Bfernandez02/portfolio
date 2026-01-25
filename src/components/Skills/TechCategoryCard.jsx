"use client";
import React, { useEffect, useState } from "react";
import TechIcon from "../TechIcon";
import { useTheme } from "../ThemeProvider";

const levelMap = {
  expert: "100%",
  advanced: "75%",
  intermediate: "50%",
  beginner: "25%",
};

const levelTagColors = {
  expert: "bg-green-500 ",
  advanced: "bg-blue-500",
  intermediate: "bg-yellow-500",
  beginner: "bg-red-500",
};

export default function TechCategoryCard({ category, techs }) {
  const { theme } = useTheme();

  return (
    <div className={`flex-1 rounded-[10px] p-6 text-white! ${theme === "dark" ? "bg-popup" : "bg-primary"}`}>
      {/* Category Title */}
      <h5 className="capitalize mb-2 border-l-2 border-accent pl-2 flex items-center h-fit">
        {category === "tools" ? "Tools & Others" : category + " Development"}
      </h5>

      <div className="flex flex-col gap-5 border-t-2 border-white/10 pt-4 mt-3">
        {techs.map((tech) => (
          <TechRow key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );
}

function TechRow({ tech }) {
  const [width, setWidth] = useState("0%");
  const rowRef = React.useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setWidth(levelMap[tech.level]);
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (rowRef.current) observer.observe(rowRef.current);

    return () => {
      if (rowRef.current) observer.unobserve(rowRef.current);
    };
  }, [tech.level, hasAnimated]);

  return (
    <div ref={rowRef} className="flex items-start gap-4 flex-col w-full">
      <div className="flex flex-row justify-between w-full items-center">
        <TechIcon
          tech={tech.name}
          experience={tech.experience}
          vertical={false}
          width={"2xl:w-[40px] w-[25px]"}
          height={"2xl:h-[40px] h-[25px]"}
          textSize="text-[12px]! 2xl:text-[14px]!"
          textColor="text-white!"
        />

        <p
          className={`text-[12px]! 2xl:text-[14px]! w-fit h-fit px-2 py-1 rounded-full font-semibold text-white! ${levelTagColors[tech.level]}`}
        >
          {tech.level.charAt(0).toUpperCase() + tech.level.slice(1)}
        </p>
      </div>

      <div className="flex w-full">
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-1000 ease-out"
            style={{ width }}
          />
        </div>
      </div>
    </div>
  );
}
