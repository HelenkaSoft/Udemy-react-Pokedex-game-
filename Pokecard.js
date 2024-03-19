import React, { Component } from "react";
import "./Pokecard.css";
// const Poke_api =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const Poke_api = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let imagesrc = `${Poke_api}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokedcard-image">
          <img src={imagesrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type:{this.props.type}</div>
        <div className="Pokecard-data">EXP:{this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
