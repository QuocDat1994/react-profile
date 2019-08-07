import React from "react";
import styles from "./LinkIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LinkIcon = props => {
  const { href, icon, style } = props;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        className={
          style == "contact"
            ? styles.link_icon_contact
            : styles.link_icon_footer
        }
      />
    </a>
  );
};
