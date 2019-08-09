import React from "react";
import styles from "./Home.module.css";
import { RoundButton } from "./RoundButton";
import { contact as contactData } from "../../../assets/data/contact";

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.avatar}>
        <img src={contactData.avatar.src} alt={contactData.avatar.alt} />
      </div>
      <section className={styles.hello}>
        <p>Hello,</p>
        <p>a bit about me:</p>
      </section>
      <section className={styles.button_group}>
        <RoundButton text="My resume" target="nav_resume" />
        <RoundButton text="My works" target="nav_projects" />
        <RoundButton text="My skills" target="nav_resume" />
      </section>
      <p className={styles.intro}>
        I love creation. I want to create something that everybody can enjoy.
        That's why I become a developer!
        <br />
        <br />I have been working for 3 years, specializing in Front-End
        development. I love Javascript, as well as its frameworks jQuery and
        React.js.
      </p>
    </section>
  );
};
