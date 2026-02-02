import Image from "next/image";
import TechCarousel from "./TechCarousel";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({ project, onClick }) {
  const { title, coverImage, excerpt, tech, github, url } = project;
  return (
    <button
      onClick={onClick}
      className="text-left rounded-[10px] hover:scale-103 transition-all duration-300 bg-popup flex flex-col not-even:shadow-md w-full h-full"
    >
      <div className="w-full h-[200px] overflow-hidden rounded-t-[10px] relative">
        <Image
          src={coverImage}
          alt={title}
          className="rounded-t-[10px] object-cover w-full h-full"
          width={800}
          height={800}
        />

        <div className="absolute top-2 right-2 flex gap-2 z-50">
          {url && (
            <Link
              href={url}
              target="_blank"
              className="btn-accent"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open(url, "_blank");
              }}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          )}

          {github && (
            <Link
              href={github}
              target="_blank"
              className="btn-accent"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open(github, "_blank");
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col p-4 w-full h-fit gap-2 justify-between">
        <h6 className="font-semibold">{title}</h6>
        <p className="">
          {excerpt.length > 200 ? excerpt.substring(0, 200) + "..." : excerpt}
        </p>
      </div>

      <div className="w-full mt-auto px-4 pb-4">
        <TechCarousel tech={tech} />
      </div>
    </button>
  );
}
