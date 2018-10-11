import React, { Component } from "react";
import "./styleChatApp.css";

export default class MessageContainer extends Component {
  render() {
    return (
      <div id={this.props.idProps} className="message-content">
        <div className="message-text-holder"><p className="message-text">{this.props.inputValueText.text}</p></div>
        <div className="message-time-holder"><p className="message-time">{this.props.inputValueText.dateTime}</p></div>
      </div>
    );
  }
}
