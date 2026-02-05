import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function ExperienceCard({ experienceItem, useBorder }) {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 0px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      variants={{ visible: { opacity: 1, y: 0 } }}
      className={`${useBorder ? "border-b-border border-b-2 pb-4 md:pb-8" : ""}`}
    >
      <button
        className="w-full justify-between flex flex-row items-start gap-2 text-start"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col md:flex-row justify-between md:gap-12 lg:gap-20 w-full">
          <div className="flex flex-col">
            <h5>
              {experienceItem.role} | {experienceItem.company}
            </h5>
            <p>
              {experienceItem.duration} | {experienceItem.location}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap my-4">
            {experienceItem.tags.map((tag, index) => (
              <span
                key={index}
                className={`${theme === "dark" ? "bg-border text-white" : "bg-primary"} px-3 py-2 h-fit text-white  rounded-full text-sm flex items-center justify-center`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 text-accent mt-px md:mt-5 hover:text-primary transition-colors duration-300 h-fit">
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`transition-transform duration-300 ${isExpanded ? "transform rotate-180" : ""} text-2xl`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-102" : "max-h-0"}`}
      >
        <ul>
          {experienceItem.details.map((detail, index) => (
            <li
              className="text-[14px] md:text-[16px] my-px md:my-2"
              key={index}
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
