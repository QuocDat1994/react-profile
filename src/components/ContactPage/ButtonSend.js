import React, { Component } from "react";
import styles from "./Contact.module.css";

class ButtonSend extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert("Haven't handled yet, sorry! : (");
  }

  render() {
    return (
      <button className={styles.btnSend} onClick={this.handleClick}>
        Send
      </button>
    );
  }
}

export default ButtonSend;
