import React, { Component } from "react";
import ChatAppComponent from "./component/ChatApp";
import PersonName from "./component/personName";
import "./css/styleChatApp.css";

class App extends Component {
  state = {
    userName: "",
    isUserName: false
  };

  setUserName = async (userName, isUserName) => {
    // console.log(userName, isUserName, " --> from Parent ");
    await this.setState({ userName });
    await this.setState({ isUserName });
    // console.log(this.state.userName, " --> from parent state");
  };

  render() {
    return (
      <div className="App">
        {this.state.isUserName ? (
          <ChatAppComponent userName={this.state.userName} />
        ) : (
          <PersonName placeUserName={this.setUserName} />
        )}
      </div>
    );
  }
}

export default App;
