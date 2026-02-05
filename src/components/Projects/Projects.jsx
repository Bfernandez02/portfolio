import { useState, useRef, useEffect, useMemo } from "react";
import projectCategories from "@/utils/ProjectUtils";
import TechStackMultiSelect from "./TechStackMultiSelect";
import ProjectCard from "./ProjectCard";
import { toast } from "react-hot-toast";
import ProjectModal from "./ProjectModal";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Projects({ projects }) {
  const [filters, setFilters] = useState({
    category: "All",
    techStack: [],
    techMode: "OR", // "OR" | "AND"
  });
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    // Category filter
    if (filters.category !== "All") {
      filtered = filtered.filter((project) =>
        project.categories.includes(filters.category),
      );
    }

    // Tech stack filter
    if (filters.techStack?.length) {
      const selectedTechs = filters.techStack.map((t) => t.value);

      filtered = filtered.filter((project) => {
        if (filters.techMode === "AND") {
          return selectedTechs.every((tech) => project.tech.includes(tech));
        }
        return selectedTechs.some((tech) => project.tech.includes(tech));
      });
    }

    return filtered;
  }, [projects, filters]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <motion.div
        ref={ref}
        className="w-full flex flex-col items-center justify-center gap-5 mb-8 max-w-[80%] text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        variants={{ visible: { opacity: 1, y: 0 } }}
      >
        <h2 className="w-fit">Projects</h2>
        <p>
          These are some of the projects I have worked on, categorized by their
          type and technologies used.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        variants={{ visible: { opacity: 1, y: 0 } }}
        className="w-full flex flex-wrap items-center justify-center gap-4"
      >
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
              selected.length < 6
                ? setFilters({ ...filters, techStack: selected })
                : toast.error("You can select up to 5 technologies only!", {
                    duration: 4000,
                    id: "techStackLimit",
                  })
            }
          />
        </div>
      </motion.div>

      <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        variants={{ visible: { opacity: 1, y: 0 } }}
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center md:gap-6 gap-4 mt-8">
          {filteredProjects.length === 0 ? (
            <h3 className="text-center col-span-full min-h-[400px]">
              More projects coming soon!
            </h3>
          ) : (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onClick={() => setActiveProject(project)}
              />
            ))
          )}
        </motion.div>

        {/* {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )} */}
      </>
    </div>
  );
}
