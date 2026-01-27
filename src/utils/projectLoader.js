import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "src/projects");

export function getAllProjects() {
  const files = fs.readdirSync(projectsDirectory);

  return files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
    };
  });
}