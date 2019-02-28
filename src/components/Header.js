import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import styles from "./Header.module.css";

export function Header(props) {
  return (
    <header className={styles.header}>
      <section id="introduction" className={styles.introduction}>
        <h1 className={styles.name}>{props.commonInfo.name}</h1>
        <h2 className={styles.job}>{props.commonInfo.currentJob}</h2>
      </section>
    </header>
  );
}
