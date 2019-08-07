import React from "react";
import styles from "./NavItem.module.css";
import { Link } from "react-router-dom";

const isActive = (thisPage, currentPage) => {
  return thisPage === currentPage ? true : false;
};

export const NavItem = props => {
  const { id, target, value, onClick, currentPage } = props;

  return (
    <li className={styles.navItem}>
      <Link
        id={id}
        to={target}
        value={value}
        onClick={onClick}
        className={isActive(value, currentPage) ? styles.active : ""}
      >
        {value}
      </Link>
    </li>
  );
};
