import React, { Component } from "react";
import ChatAppComponent from "./component/ChatApp";
import "./css/styleChatApp.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatAppComponent />
      </div>
    );
  }
}

export default App;
