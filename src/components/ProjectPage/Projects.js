import React from 'react';
import styles from './Project.module.css';

export function Projects (props) {

	const listProjects = props.projects;

    return (
    	<>
		{listProjects.map((project, index) =>
    		<section className={styles.project}>
				<img src={project.projectImg}/>
				<div>
					<h1>Project | {"0" + (index+1)}</h1>
					<h2>{project.projectName}</h2>
					<p>{project.summary}</p>
					<a href={project.link} title={project.link} target="_blank">Link to the project</a>					
				</div>
			</section>
  		)}
  		</>
    );
}