import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";

export default function AboutMe() {
    const { theme } = useTheme();
  return (
    <div className="w-fit flex flex-col md:flex-row justify-between lg:py-10 py-5 max-md:items-center gap-10 md:gap-20 lg:gap-30 items-center">
      <div className="w-fit">
        <Image
          src={`/Brandon_${theme}.png`}
          alt="About Me Image"
          width={600}
          height={600}
          className="w-full h-auto rounded-[10px] md:max-w-[450px] max-w-[200px]"
        />
      </div>

      <div className="flex flex-col gap-8 w-full">
        <div className="flex gap-4 xl:gap-12 sm:flex-row flex-col w-full justify-center">
          <div className="w-full border-border rounded-[10px] flex flex-col items-center  p-4 border-2">
            <FontAwesomeIcon
              icon={faAward}
              className="text-2xl md:text-4xl text-primary mb-4"
            />
            <h6 className="text-center max-lg:text-[16px]!">3+ Years of fullstack experience</h6>
            <h6 className="text-center max-lg:text-[16px]!">1+ Year of AI research</h6>
          </div>

          <div className="w-full border-border rounded-[10px] flex flex-col items-center  p-4 border-2">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-2xl md:text-4xl text-primary mb-4"
            />
            <h6 className="text-center max-lg:text-[16px]!">BSc (Honours) in Computer Science Co-op</h6>
            <h6 className="text-center max-lg:text-[16px]!">MSc in Computer Science (in progress)</h6>
          </div>
        </div>

        <p className="max-xl:text-[14px]!">
          Hello! I&apos;m Brandon, a passionate software developer with a knack for
          creating dynamic and user-friendly web applications. With a strong
          foundation in both front-end and back-end technologies, I thrive on
          transforming ideas into functional digital experiences.
        </p>
      </div>
    </div>
  );
}
