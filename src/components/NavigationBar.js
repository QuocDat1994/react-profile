import React from 'react';
import styles from './NavigationBar.module.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Home } from './Home';
import { Header } from './Header';
import { Resume } from './ResumePage/Resume';
import { Project} from './ProjectPage/Project';
import { Contact } from './ContactPage/Contact';

export function NavigationBar (props) {
    return (
        <Router>
            <div className={styles.container}>
                <Header commonInfo={props.commonInfo}/>
                <nav>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/resume">RESUME</NavLink>
                    <NavLink to="/projects">PROJECTS</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </nav>
                <Route exact path="/" 
                    render={(routeProps) => <Home {...routeProps} commonInfo={props.commonInfo} />} />
                <Route path="/resume"
                    render={(routeProps) => <Resume {...routeProps} 
                                                        workExperience={props.workExperience}
                                                        education={props.education}
                                                        skills={props.skills} />} />                    
                <Route path="/projects"
                    render={(routeProps) => <Project {...routeProps} projects={props.projects} />} />
                <Route path="/contact" 
                    render={(routeProps) => <Contact {...routeProps} commonInfo={props.commonInfo} />} />
            </div>
        </Router>
    );
}

