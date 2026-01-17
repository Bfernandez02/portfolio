import React from "react";
import Image from "next/image";

export default function TechIcon({
  tech,
  width = 50,
  height = 50,
  vertical = false,
  textSize = "text-[14px] md:text-[16px]",
}) {
  return (
    <div>
      <div
        className={`flex ${vertical ? "flex-col" : "flex-row"} items-center gap-2`}
      >
        <Image
          src={`/TechLogos/${tech}.png`}
          width={width}
          height={height}
          alt="Tech Icon"
        />
      </div>
      <p className={`${textSize} text-center`}>
        {tech}
      </p>
    </div>
  );
}
