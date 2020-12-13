import React, { Component } from "react";
import Header from "./Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header" dark={true}>
          React Interview Helper
        </Header>
      </div>
    );
  }
}
