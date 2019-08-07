import React from "react";
import styles from "./Contact.module.css";
import { LinkIcon } from "../../Common/LinkIcon";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { contact as contactData } from "../../../assets/data/contact";

const handleClick = e => {
  e.preventDefault();
  alert(`Not implemented yet, sorry :(`);
};

export const Contact = () => {
  const { linkedin, skype, codepen, github, phone, email } = contactData;

  return (
    <section className={styles.contact}>
      <h1>Contact</h1>
      <section className={styles.container}>
        <section>
          <section className={styles.info}>
            <section className>
              <LinkIcon href={linkedin} icon={faLinkedin} style="contact" />
              <LinkIcon href={skype} icon={faSkype} style="contact" />
              <LinkIcon href={codepen} icon={faCodepen} style="contact" />
              <LinkIcon href={github} icon={faGithub} style="contact" />
            </section>
            <p>
              <b>Cell:</b> {phone}
            </p>
            <p>
              <b>Email:</b> {email}
            </p>
          </section>
        </section>
        <section>
          <p>Looking forward to answering your email</p>
          <form>
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="Email *" required />
            <input type="text" placeholder="Subject" />
            <textarea type="text" placeholder="Message" rows="10" />
            <input type="submit" value="Send" onClick={handleClick} />
          </form>
        </section>
      </section>
    </section>
  );
};
