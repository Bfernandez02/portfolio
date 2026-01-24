import React from "react";
import projectCategories from "@/utils/ProjectUtils";
import { useState } from "react";
import TechStackMultiSelect from "./TechStackMultiSelect";

export default function Projects() {
  const [filters, setFilters] = useState({
    category: "All",
    techStack: null,
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-5 mb-10 max-w-[80%] text-center">
        <h2 className="w-fit">Projects</h2>
        <p>
          These are some of the projects I have worked on, categorized by their
          type and technologies used.
        </p>

        <div className="w-full flex flex-wrap items-center justify-center gap-4 mt-5">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full border btn-alternate ${
                filters.category === category ? "bg-primary text-white!" : ""
              }`}
              onClick={() => {
                setFilters({
                  ...filters,
                  category: filters.category === category ? "All" : category,
                });
              }}
            >
              {category}
            </button>
          ))}

          <div className="w-full md:w-1/2 lg:w-1/3">
            <TechStackMultiSelect value={filters.techStack} onChange={(selected) => setFilters({...filters, techStack: selected})} />
          </div>
        </div>
      </div>
    </div>
  );
}
