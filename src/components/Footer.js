import React from "react";
import styles from "./Footer.module.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faPhone);
library.add(faEnvelope);
library.add(faPlus);
library.add(faCopyright);
library.add(faFacebook);
library.add(faLinkedin);

export function Footer(props) {
  return (
    <footer>
      <div id={styles.call} className={styles.item}>
        <FontAwesomeIcon icon="phone" className={styles.phone} />
        <div className={styles.detail}>
          <p>Call</p>
          <p>{props.commonInfo.phoneNumber}</p>
        </div>
      </div>
      <div id={styles.contact} className={styles.item}>
        <FontAwesomeIcon icon="envelope" className={styles.envelope} />
        <div className={styles.detail}>
          <p>Email</p>
          <p>{props.commonInfo.email}</p>
        </div>
      </div>
      <div id={styles.follow} className={styles.item}>
        <FontAwesomeIcon icon="plus" className={styles.plus} />
        <div className={styles.detail}>
          <p>Follow me on</p>
          <a
            href={props.commonInfo.facebook}
            title={props.commonInfo.facebook}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "facebook"]}
              className={styles.facebook}
            />
          </a>
          <a
            href={props.commonInfo.linkedin}
            title={props.commonInfo.linkedin}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className={styles.linkedin}
            />
          </a>
        </div>
      </div>
      <div
        id={styles.copyright}
        className={styles.item}
        title="I just adapted the layout. Didn't copy the original code FYI ;)"
      >
        <FontAwesomeIcon icon="copyright" className={styles.copyright} />
        <div className={styles.detail}>
          <p>Theme by Nicola Rider</p>
          <p>Recreated by Quoc Dat</p>
        </div>
      </div>
    </footer>
  );
}
