import React, { Component } from 'react';
import {Header} from './components/Header';
import {NavigationBar} from './components/NavigationBar';
import {Footer} from './components/Footer';
import './css/common.css'

class App extends Component {
  render() {    
    return (
      <>
		<NavigationBar 
			commonInfo={this.props.commonInfo} 
			projects={this.props.projects}
			workExperience={this.props.workExperience}
			education={this.props.education}
			skills={this.props.skills}/>
        <Footer commonInfo={this.props.commonInfo}/>
      </>
    );
  }
}

export default App;
