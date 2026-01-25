import React from "react";
import { fullTechList } from "@/utils/techList";
import TechCategoryCard from "./TechCategoryCard";

export default function SkillsAndTech() {
  const categories = {};

  fullTechList.forEach((tech) => {
    if (!categories[tech.category]) {
      categories[tech.category] = [];
    }
    categories[tech.category].push(tech);
  });

  // Sort technologies within each category by experience (high to low)
  Object.keys(categories).forEach((category) => {
    categories[category].sort(
      (a, b) => (b.experience || 0) - (a.experience || 0),
    );
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-5 mb-10 max-w-[80%] text-center">
        <h2 className="w-fit">Skills & Technologies</h2>
      </div>

      <div className="w-full flex-row xl:gap-6 gap-4 flex mb-6">
        {Object.keys(categories).map((category) => (
          <TechCategoryCard
            key={category}
            category={category}
            techs={categories[category]}
          />
        ))}
      </div>
    </div>
  );
}
