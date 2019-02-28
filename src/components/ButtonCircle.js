import React, { Component } from "react";
import { Redirect } from "react-router";
import styles from "./Home.module.css";

class ButtonCircle extends Component {
  constructor(props) {
    super(props);

    this.redirect = props.redirect;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    document.getElementById(this.redirect).click();
  }

  render() {
    return <div onClick={this.handleClick}>{this.props.text}</div>;
  }
}

export default ButtonCircle;
