import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function HeroText() {
  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };
  return (
    <div>
      {" "}
      <div className="flex flex-col gap-3">
        <h5>Hi, I am </h5>
        <h1 className="max-md:text-[24px]! text-primary font-bold text-start">
          Brandon Fernandez
        </h1>
        <h5>
          Web Development Specialist and Software Developer based in Ontario
        </h5>
        <p className="text-start mt-2 text-[14px]! md:text-[16px]! text-gray-600">
          Explore my collection of professional work, AI experiments, and
          personal projects that showcase my passion for computer science and
          software development.
        </p>

        <button className="btn w-fit mt-2" onClick={openResume}>
          {" "}
          <FontAwesomeIcon icon={faDownload} /> Download Resume
        </button>
      </div>
    </div>
  );
}
