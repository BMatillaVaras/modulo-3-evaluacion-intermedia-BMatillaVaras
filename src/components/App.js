import React from "react";
import data from "../data.json";
import "../stylesheets/App.scss";
import PokeList from "./Pokelist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    return (
      <div className="app">
        <h1>Mi lista de Pokemon</h1>
        <PokeList pokeList={this.state.data}></PokeList>
      </div>
    );
  }
}

export default App;
