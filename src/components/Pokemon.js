import React from "react";

class Pokemon extends React.Component {
  render() {
    const types = this.props.pokemon.types.map((type, index) => {
      return (
        <li key={index} className="card-type">
          {type}
        </li>
      );
    });

    return (
      <article className="app__list--card">
        <img
          src={this.props.pokemon.url}
          alt={`Imagen de ${this.props.pokemon.name}`}
          title={`Imagen de ${this.props.pokemon.name}`}
          className="card-img"
        />
        <h3 className="card-title">{this.props.pokemon.name}</h3>
        <ul className="card-list">{types}</ul>
      </article>
    );
  }
}

export default Pokemon;
