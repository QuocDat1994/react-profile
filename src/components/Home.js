import React from 'react';
import ButtonCircle from './ButtonCircle';
import styles from './Home.module.css';

export function Home (props) {
    return (
        <main className={styles.container}>
			<section id="profile-picture">
				<img src={props.commonInfo.profileImg}/>
			</section>
			<section id="information">
				<h1>Hello,</h1>
				<h2>a bit about me:</h2>
				<div className={styles.circle}>
					<ButtonCircle text={"MY RESUME"}/>
					<ButtonCircle text={"MY WORK"} />
					<ButtonCircle text={"MY SKILLS"}/>
				</div>
				<p>{props.commonInfo.introduction}</p>
			</section>
		</main>
    );
}