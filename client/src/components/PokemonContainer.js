import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


import Pokemon from "./Pokemon";


const PokemonContainer = () => {

  const [pokemon, setPokemon] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("")

//   const searchMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   function handleChange(e) {
//     setSearchTerm(e.target.value);
//   }

  useEffect(() => {
    fetch('http://localhost:3001/lgbtqMovies')
      .then(res => res.json())
      .then(data => setPokemon(data))
      .catch(err => console.error(err))
  }, []);

  return (
    <div className="pokemonContainer">
      <Card.Header className="fs-2"><b>Pokedex</b></Card.Header>
      {/* <Form className="d-flex">
        <Form.Control className="prompt" value={searchTerm} onChange={handleChange} placeholder="Search for Movie Title" />
        <i className="search icon" />
      </Form> */}
      <div>
        <ul className="pokemonList">
          {searchMovies.map(pokemon => (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MoviesContainer;