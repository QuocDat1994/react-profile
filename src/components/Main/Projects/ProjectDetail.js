import React from "react";
import styles from "./ProjectDetail.module.css";

export const ProjectDetail = props => {
  const { name, thumbnail, description } = props.project;
  const projectNo = props.no.toString().padStart(2, "0");

  return (
    <section className={styles.item}>
      <div className={styles.thumbnail}>
        <img src={thumbnail.src} alt={thumbnail.alt} />
      </div>
      <section className={styles.detail}>
        <p>Project | {projectNo}</p>
        <p>{name}</p>
        <p>{description}</p>
      </section>
    </section>
  );
};
