import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeProvider";

export default function AboutMe() {
    const { theme } = useTheme();
  return (
    <div className="w-fit rounded-[10px] flex flex-col md:flex-row gap-24 border-border border-2 px-15 py-10">
      <div className="w-fit">
        <Image
          src={`/Brandon_${theme}.png`}
          alt="About Me Image"
          width={600}
          height={600}
          className="w-full h-auto rounded-[10px] max-w-[500px]"
        />
      </div>

      <div className="flex flex-col gap-8 w-full">
        <div className="flex gap-16">
          <div className="w-full border-border rounded-[10px] flex flex-col items-center  p-4 border-2">
            <FontAwesomeIcon
              icon={faAward}
              className="text-4xl text-primary mb-4"
            />
            <h6 className="text-center">3+ Years of fullstack experience</h6>
            <h6 className="text-center">1+ Year of AI research</h6>
          </div>

          <div className="w-full border-border rounded-[10px] flex flex-col items-center  p-4 border-2">
            <FontAwesomeIcon
              icon={faGraduationCap}
              className="text-4xl text-primary mb-4"
            />
            <h6 className="text-center">BSc (Honours) in Computer Science Co-op</h6>
            <h6 className="text-center">MSc in Computer Science (in progress)</h6>
          </div>
        </div>

        <p>
          Hello! I'm Brandon, a passionate software developer with a knack for
          creating dynamic and user-friendly web applications. With a strong
          foundation in both front-end and back-end technologies, I thrive on
          transforming ideas into functional digital experiences. My journey in
          coding began with a curiosity for how websites work, which quickly
          evolved into a full-fledged career dedicated to continuous learning
          and innovation. When I'm not coding, you can find me exploring the
          latest tech trends, contributing to open-source projects, or indulging
          in my love for photography. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
}
