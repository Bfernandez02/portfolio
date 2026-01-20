import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function ExperienceCard({ experienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <div className="w-full justify-between flex flex-row items-start gap-2">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <h4>
              {experienceItem.role} | {experienceItem.company}
            </h4>
            <p>
              {experienceItem.duration} | {experienceItem.location}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap my-4">
            {experienceItem.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-border text-white px-3 py-px md:py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-accent py-px md:py-2 hover:text-primary transition-colors duration-300"
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`transition-transform duration-300 ${isExpanded ? "transform rotate-180" : ""} text-2xl`}
          />
        </button>
      </div>

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
    </div>
  );
}
