import React from "react";
import { Projects } from "./Projects";
import styles from "./Project.module.css";

export function Project(props) {
  return (
    <main className={styles.container}>
      <h1 className={styles.large}>LATEST PROJECTS</h1>
      <Projects projects={props.projects} />
    </main>
  );
}
