import React from "react";
import styles from "./Resume.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

library.add(faCode);
library.add(faGlobe);

export function Skills(props) {
  const programmingSkills = props.skills.programmingSkill;
  const languageSkills = props.skills.languageSkill;

  return (
    <section id="skill" className={styles.skill}>
      <section id="programming-skill">
        <FontAwesomeIcon icon="code" className={styles.icon_code} />
        <h1 className={styles.skill_title}>Skills</h1>
        <ul>
          {programmingSkills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
      </section>
      <section id="language-skill">
        <FontAwesomeIcon icon="globe" className={styles.icon_globe} />
        <h1 className={styles.skill_title}>Languages</h1>
        <ul>
          {languageSkills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
