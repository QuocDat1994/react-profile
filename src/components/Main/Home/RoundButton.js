import React from "react";
import styles from "./RoundButton.module.css";

function handleClick(e) {
  const navId = e.currentTarget.getAttribute("target");
  document.getElementById(navId).click();
}

export const RoundButton = props => {
  return (
    <div className={styles.button} onClick={handleClick} target={props.target}>
      {props.text}
    </div>
  );
};
