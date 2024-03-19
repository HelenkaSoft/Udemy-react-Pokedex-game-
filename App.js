import React, { Component } from "react";
import "./App.css";
import Pokedgame from "./Pokedgame";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Pokedgame />
      </div>
    );
  }
}

export default App;
