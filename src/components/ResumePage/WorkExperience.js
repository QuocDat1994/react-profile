import React from "react";
import styles from "./Resume.module.css";

export function WorkExperience(props) {
  const workExperienceList = props.workExperience;

  return (
    <section id="work" className={styles.experience}>
      <h1>Work experince</h1>
      <div className={styles.information}>
        {workExperienceList.map(workExperience => (
          <div>
            <p className={styles.company}>{workExperience.company}</p>
            <p className={styles.time}>{workExperience.time}</p>
            <p>{workExperience.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
