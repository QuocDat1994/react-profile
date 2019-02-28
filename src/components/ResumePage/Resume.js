import React from "react";
import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import styles from "./Resume.module.css";

export function Resume(props) {
  return (
    <main className={styles.container}>
      <h1>RESUME</h1>
      <div className={styles.resume}>
        <WorkExperience workExperience={props.workExperience} />
        <Skills skills={props.skills} />
        <Education education={props.education} />
      </div>
    </main>
  );
}
