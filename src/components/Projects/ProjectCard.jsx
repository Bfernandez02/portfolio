export default function ProjectCard({ project, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left border rounded-xl p-5 hover:shadow-lg transition"
    >
      <img
        src={project.coverImage}
        alt={project.title}
        className="rounded-lg mb-4"
      />

      <h3 className="text-xl font-semibold">{project.title}</h3>

      <p className="text-gray-600 mt-2">{project.excerpt}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded">
            {t}
          </span>
        ))}
      </div>
    </button>
  );
}
