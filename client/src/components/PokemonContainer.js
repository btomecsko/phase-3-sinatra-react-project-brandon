import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


import Pokemon from "./Pokemon";


const PokemonContainer = () => {

  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const searchPokemon = pokemon.filter((poke) =>
    poke.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    fetch('http://localhost:9292/pokemons')
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="pokemonContainer">
      <Card.Header className="fs-2"><b>Pokedex</b></Card.Header>
      <Form className="d-flex">
        <Form.Control className="prompt" value={searchTerm} onChange={handleChange} placeholder="Search for Pokemon" />
        <i className="search icon" />
      </Form>
      <div>
        <ul className="pokemonList">
          {searchPokemon.map(poke => (
            <Pokemon
              key={poke.id}
              name={poke.name}
              type1={poke.type1}
              type2={poke.type2}
              dex={poke.dex_num}
              description={poke.dex_info}
              sprite={poke.sprite}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonContainer;