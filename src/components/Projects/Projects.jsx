import React from "react";
import projectCategories from "@/utils/ProjectUtils";
import { useState } from "react";
import TechStackMultiSelect from "./TechStackMultiSelect";
import ProjectCard from "./ProjectCard";
import { toast } from "react-hot-toast";
import ProjectModal from "./ProjectModal";

export default function Projects({ projects }) {
  const [filters, setFilters] = useState({
    category: "All",
    techStack: null,
  });

  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-5 mb-10 max-w-[80%] text-center">
        <h2 className="w-fit">Projects</h2>
        <p>
          These are some of the projects I have worked on, categorized by their
          type and technologies used.
        </p>
      </div>

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

        <div className="w-fit z-70">
          <TechStackMultiSelect
            value={filters.techStack}
            onChange={(selected) =>
              selected.length < 6 ?
              setFilters({ ...filters, techStack: selected }) : toast.error("You can select up to 5 technologies only!", { duration: 4000 , id: "techStackLimit"})
            }
          />
        </div>
      </div>

      <>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center md:gap-6 gap-4 mt-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>

        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </>
    </div>
  );
}
