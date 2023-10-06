import { useState } from "react";
import "./Projects.css";
import projectData from "./projectData";
import ProjectCard from "./projectCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const filteredProjects = projectData.filter((project) => {
    if (filter === "all") {
      return true;
    } else {
      return project.category === filter;
    }
  });

  return (
    <section className="project container section" id="project">
      <h2 className="section__title">Recent Projects</h2>

      <div className="project__filters">
        <span
          className={`project__item ${
            filter === "all" ? "active-project-filter" : ""
          }`}
          data-filter="all"
          onClick={() => handleFilterClick("all")}
        >
          All
        </span>

        <span
          className={`project__item ${
            filter === "Design" ? "active-project-filter" : ""
          }`}
          data-filter="Design"
          onClick={() => handleFilterClick("Design")}
        >
          Design
        </span>

        <span
          className={`project__item ${
            filter === "Client Projects" ? "active-project-filter" : ""
          }`}
          data-filter="Client Projects"
          onClick={() => handleFilterClick("Client Projects")}
        >
          Client Projects
        </span>

        <span
          className={`project__item ${
            filter === "Website" ? "active-project-filter" : ""
          }`}
          data-filter="Website"
          onClick={() => handleFilterClick("Website")}
        >
          Website
        </span>

        <span
          className={`project__item ${
            filter === "App" ? "active-project-filter" : ""
          }`}
          data-filter="App"
          onClick={() => handleFilterClick("App")}
        >
          App
        </span>
      </div>

      <div className="project__container grid">
        {filteredProjects.map((project) => {
          // Add console.log statements here
          console.log("Filter Value:", filter);
          console.log("Project Type:", project.type);

          return (
            <ProjectCard
              key={project.key}
              image={project.image}
              title={project.title}
              category={project.category}
              link={project.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
