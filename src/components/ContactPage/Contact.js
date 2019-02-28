import React from 'react';
import ButtonSend from './ButtonSend';
import styles from './Contact.module.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook);
library.add(faLinkedin);

export function Contact (props) {
    return (
        <main className={styles.container}>
			<section className={styles.information}>
				<h1>CONTACT</h1>
				<div>
					<a href={props.commonInfo.facebook} title={props.commonInfo.facebook} target="_blank">
                        <FontAwesomeIcon icon={["fab", "facebook"]} className={styles.facebook}/>
                    </a>
                    <a href={props.commonInfo.linkedin} title={props.commonInfo.linkedin} target="_blank">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.linkedin}/>
                    </a>       
					<p><strong>Mobile: </strong>{props.commonInfo.phoneNumber}</p>
					<p><strong>Email: </strong>{props.commonInfo.email}</p>
				</div>				
			</section>
			<section className={styles.form}>
				<p>Looking forward to answering your email!</p>
				<input type="text" name="name" placeholder="Name *" required={true}/>
				<input type="text" name="email" placeholder="Email *" required={true}/>
				<input type="text" name="subject" placeholder="Subject"/>
				<textarea name="message" rows="10" placeholder="Message"></textarea>
				<ButtonSend />
			</section>
		</main>
    );
}