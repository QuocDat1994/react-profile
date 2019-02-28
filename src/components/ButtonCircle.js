import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styles from './Home.module.css';

class ButtonCircle extends Component {

	constructor(props) {
	    super(props);
	    this.handleClick = this.handleClick.bind(this);
 	}

	handleClick() {
	    alert("Haven't handled yet, sorry! : (");
  	}

	render() {
	    return (
			<div onClick={this.handleClick}>{this.props.text}</div>
	    );
	}
}

export default ButtonCircle;