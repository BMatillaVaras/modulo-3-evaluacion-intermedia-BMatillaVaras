import React from "react";

class Pokemon extends React.Component {
  render() {
    const types = this.props.pokemon.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });

    return (
      <article>
        <img
          src={this.props.pokemon.url}
          alt={`Imagen de ${this.props.pokemon.name}`}
        />
        <h3>{this.props.pokemon.name}</h3>
        <ul>{types}</ul>
      </article>
    );
  }
}

export default Pokemon;
