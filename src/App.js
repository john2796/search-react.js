import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <NavBar />
        <Cards />
      </div>
    );
  }
}

export default App;
