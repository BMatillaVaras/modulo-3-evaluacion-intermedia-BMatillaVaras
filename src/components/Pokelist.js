import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const pokemons = this.props.pokeList.map((pokemon) => {
      return (
        <li key={pokemon.id}>
          <Pokemon pokemon={pokemon}></Pokemon>
        </li>
      );
    });

    return (
      <>
        <ul className="app__list">{pokemons}</ul>
      </>
    );
  }
}

export default PokeList;
