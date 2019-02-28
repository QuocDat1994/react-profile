import React from "react";
import ButtonCircle from "./ButtonCircle";
import styles from "./Home.module.css";

export function Home(props) {
  return (
    <main className={styles.container}>
      <section id="profile-picture">
        <img src={props.commonInfo.profileImg} />
      </section>
      <section id="information">
        <h1>Hello,</h1>
        <h2>a bit about me:</h2>
        <div className={styles.circle}>
          <ButtonCircle text={"MY RESUME"} redirect="nav_resume" />
          <ButtonCircle text={"MY WORK"} redirect="nav_projects" />
          <ButtonCircle text={"MY SKILLS"} redirect="nav_resume" />
        </div>
        <p>{props.commonInfo.introduction}</p>
      </section>
    </main>
  );
}
