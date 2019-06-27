import React, { Component } from "react";

export default class PersonName extends Component {
  render() {
    return (
      <div className="person-name-compo">
        <div className="persone-name-background">
          <div className="persone-name-input-area">
            <h4 className="person-name-title">Your Name</h4>
            <input
              type="text"
              className="person-name-input-text-area"
              placeholder="write your name here..."
            />
          </div>

          <button className="person-name-button">Next</button>
        </div>
      </div>
    );
  }
}
