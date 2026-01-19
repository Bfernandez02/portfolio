import React from "react";
import Image from "next/image";

export default function TechIcon({
  tech,
  width = "w-[50px]",
  height = "h-[50px]",
  vertical = false,
  textSize = "text-[14px]! md:text-[16px]!",
}) {
  return (
    <div>
      <div
        className={`flex ${vertical ? "flex-col" : "flex-row"} items-center gap-2`}
      >
        <Image
          src={`/TechLogos/${tech}.png`}
          width={100}
          height={100}
          alt="Tech Icon"
          className={`object-contain ${`${width} ${height}`}`}
        />
      </div>
      <p className={`${textSize} text-center`}>
        {tech}
      </p>
    </div>
  );
}
