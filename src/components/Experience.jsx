import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import experienceList from "@/utils/experienceList";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* Experience Header */}
      <div className="w-full flex-col md:flex-row gap-2 md:gap-0 justify-between">
        <div className="flex flex-col gap-2 ">
          <h5 className="list-item list-inside">Experience</h5>
          <h2>Explore my development journey</h2>
        </div>

        <div>
          <p className="hidden md:block max-w-3xl">
            Over the years, I&apos;ve had the privilege of working on a diverse
            range of projects that have honed my skills and expanded my
            expertise.
          </p>
          <button className="text-[16px] flex items-center gap-2 text-accent border-b-2 border-accent py-[1px] mt-4 md:mt-0 hover:text-primary hover:border-primary transition-colors duration-300">
            Book a call <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
        </div>
      </div>

      {/* Experience Items */}
      <div className="flex flex-col gap-4 md:gap-8">
        {experienceList.map((item, index) => (
          <div key={index} className={`${index !== experienceList.length - 1 ? "border-b-border border-b-2 pb-4 md:pb-8" : ""}`}>
            <ExperienceCard experienceItem={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
