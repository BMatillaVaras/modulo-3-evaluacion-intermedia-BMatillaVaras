import React from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import "../stylesheets/_pokelist.scss";

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

PokeList.propTypes = {
  pokeList: PropTypes.array,
};
export default PokeList;
