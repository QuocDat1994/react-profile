import React from "react";
import styles from "./Contact.module.css";
import styleIcon from "../../Common/LinkIcon.module.css";
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
            <section>
              <LinkIcon
                href={linkedin}
                icon={faLinkedin}
                style={styleIcon.large}
              />
              <LinkIcon href={skype} icon={faSkype} style={styleIcon.large} />
              <LinkIcon
                href={codepen}
                icon={faCodepen}
                style={styleIcon.large}
              />
              <LinkIcon href={github} icon={faGithub} style={styleIcon.large} />
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
