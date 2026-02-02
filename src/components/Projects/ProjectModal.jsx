import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import DisplayImageCarousel from "./DisplayImageCarousel";

export default function ProjectModal({ project, onClose }) {
  const [mdxSource, setMdxSource] = useState(null);

  const { title, content, images, github, url, id } = project;

  useEffect(() => {
    serialize(content).then(setMdxSource);
  }, [content]);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[1200] bg-black/60 flex justify-center items-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-popup max-w-[80vw] w-full h-[80vh] overflow-y-auto rounded-xl p-12 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-accent font-bold"
        >
          <FontAwesomeIcon icon={faTimes} size="xl" />
        </button>

        {images && images.length > 0 && (
          <DisplayImageCarousel images={images} id={id} />
        )}

        <h3 className="text-3xl font-bold mb-6">{title}</h3>

        {mdxSource && (
          <article className="prose max-w-none">
            <MDXRemote {...mdxSource} />
          </article>
        )}
      </div>
    </div>
  );
}
