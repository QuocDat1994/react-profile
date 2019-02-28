import React from "react";
import styles from "./Resume.module.css";

export function Education(props) {
  const educationList = props.education;

  return (
    <section id="education" className={styles.experience}>
      <h1>Education</h1>
      <div className={styles.information}>
        {educationList.map(education => (
          <div>
            <p className={styles.university}>{education.university}</p>
            <p className={styles.time}>{education.time}</p>
            <p>{education.bachelor}</p>
            <p>{education.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
