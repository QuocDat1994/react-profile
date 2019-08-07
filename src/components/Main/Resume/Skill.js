import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Resume.module.css";

export const Skill = props => {
  const { icon, type, skillData } = props;

  return (
    <article>
      <h2>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        {type}
      </h2>
      <ul>
        {skillData.map((skill, index) => (
          <li key={skill + index}>{skill}</li>
        ))}
      </ul>
    </article>
  );
};
