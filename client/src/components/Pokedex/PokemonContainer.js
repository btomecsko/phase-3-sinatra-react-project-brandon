import React from "react";

import Card from 'react-bootstrap/Card';

import Pokemon from "./Pokemon";
import Search from "./Search";


const PokemonContainer = ({ pokemon, onSearch }) => {


  return (
    <div className="pokemonContainer">
      <Card.Header className="fs-2"><b>Pokedex</b></Card.Header>
      <Search onSearch={onSearch} />
      <div>
        <ul className="pokemonList">
          {pokemon.length > 0 ? pokemon.map(poke => (
            <Pokemon
              key={poke.id}
              name={poke.name}
              type1={poke.type1}
              type2={poke.type2}
              dex={poke.dex_num}
              description={poke.dex_info}
              sprite={poke.sprite}
            />
          ))
            : "No Pokemon to Display!"
          }
        </ul>
      </div>
    </div>
  );
}

export default PokemonContainer;