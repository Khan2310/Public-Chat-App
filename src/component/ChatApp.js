import React, { Component } from "react";
import io from "socket.io-client";
import MessageContainer from "./messageContainer";

export default class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.clearInputField = this.clearInputField.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
    this.state = {
      inputArray: [],
      inputText: "",
      currenTime: "",
      isLogin: false
    };

    this.socket = io("https://public-chat-app123.herokuapp.com/");
    this.socket.on("chat-message", data => {
      this.setState({ inputArray: data });
      // console.log(data, "in socket data");
    });
  }

  inputHandler(event) {
    this.setState({ inputText: event.target.value });
    this.setState({ currenTime: new Date().toLocaleTimeString() });

    if (event.keyCode === 13 && this.state.inputText !== "") {
      // this.setState({ inputText: event.target.value });
      this.eventHandler();
      this.clearInputField();
    }
  }

  async eventHandler() {
    let person = {
      name: this.props.userName,
      text: this.state.inputText,
      dateTime: this.state.currenTime
    };
    if (this.state.inputText !== "") {
      await this.setState({
        inputArray: [...this.state.inputArray, person]
      });
      this.socket.emit("chat-message", this.state.inputArray);
      this.clearInputField();
      let grabbableId = this.state.inputArray.length - 1;
      let grabbedElement = document.getElementById(grabbableId);

      grabbedElement.scrollIntoView({
        behavior: "instant",
        block: "end",
        inline: "nearest"
      });
    }
  }

  clearInputField() {
    let inputBox = this.refs.inputBox;
    inputBox.value = "";
    this.setState({ inputText: "" });
  }

  render() {
    const showMessage = this.state.inputArray.map((item, idx) => {
      return <MessageContainer inputValueText={item} idProps={idx} key={idx} />;
    });
    return (
      <div className="chatbox-head-container">
        <div className="chat-container">
          <div className="menu-content">
            <div className="menu-content-title">
              <h4>
                <span className="red-dot" /> Public Chat
              </h4>
            </div>
          </div>
          <div className="message-container">{showMessage}</div>
          <div className="input-area">
            <div className="input-box-chat">
              <input
                ref="inputBox"
                className="input-text-area"
                type="text"
                onKeyUp={this.inputHandler}
                placeholder="Type your message here ..."
              />
            </div>
            <div className="send-button-box">
              <button className="style-button-chat" onClick={this.eventHandler}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
