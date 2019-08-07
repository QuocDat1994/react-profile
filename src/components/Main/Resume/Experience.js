import React from "react";
import styles from "./Experience.module.css";

export const Experience = props => {
  return (
    <section className={styles.detail}>
      <p>
        {props.job} - {props.company}
      </p>
      <p>{props.time}</p>
      <p>​{props.description}</p>
    </section>
  );
};
