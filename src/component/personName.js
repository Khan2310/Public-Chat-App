import React, { Component } from "react";

export default class PersonName extends Component {
  state = {
    personName: ""
  };

  personNameEventHandler() {
    if (this.state.personName !== "") {
      //console.log(this.state.personName, " --> from Child");
      this.props.placeUserName(this.state.personName, true);
    }
  }

  personNameInputHandler(event) {
    this.setState({ personName: event.target.value });

    if (event.keyCode === 13 && this.state.personName !== "") {
      this.personNameEventHandler();
    }
  }

  render() {
    return (
      <div className="person-name-compo">
        <div className="persone-name-background">
          <div className="persone-name-input-area">
            <h4 className="person-name-title">Your Name</h4>
            <input
              type="text"
              onKeyUp={this.personNameInputHandler.bind(this)}
              className="person-name-input-text-area"
              placeholder="write your name here..."
            />
          </div>

          <button
            className="person-name-button"
            onClick={this.personNameEventHandler.bind(this)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
