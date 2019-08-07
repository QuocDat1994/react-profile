import React from "react";
import styles from "./Projects.module.css";
import { ProjectDetail } from "./ProjectDetail";
import { projects as projectData } from "../../../assets/data/projects";

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1>PROJECTS</h1>
      {projectData.map((project, index) => (
        <ProjectDetail project={project} no={index + 1} />
      ))}
    </section>
  );
};
