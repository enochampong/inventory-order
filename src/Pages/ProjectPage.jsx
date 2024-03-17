import { useState, useEffect } from "react";
import projectsData from "../projects-data.json";

function ProjectPage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div>
      <h1>project page</h1>
      {projectsmap((project) => {
        return (
          <div key={project.id} className="project">
            <h2>{project.name}</h2>
            <p>{project.technologies}</p>
          </div>
        );
      })}
    </div>
  );
}
export default ProjectPage;
