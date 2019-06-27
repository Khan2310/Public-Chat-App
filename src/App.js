import React, { Component } from "react";
import ChatAppComponent from "./component/ChatApp";
import PersonName from "./component/personName";
import "./css/styleChatApp.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonName />
      </div>
    );
  }
}

export default App;
