import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [mdxSource, setMdxSource] = useState(null);

  useEffect(() => {
    serialize(project.content).then(setMdxSource);
  }, [project]);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-6">
      <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6">
          {project.title}
        </h2>

        {mdxSource && (
          <article className="prose max-w-none">
            <MDXRemote {...mdxSource} />
          </article>
        )}
      </div>
    </div>
  );
}
