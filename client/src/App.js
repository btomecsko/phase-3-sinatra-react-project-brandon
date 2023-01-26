import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import Team from "./components/Team";
import PokemonContainer from "./components/PokemonContainer";


const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {

    const loadPokemon = async () => {
      const resp = await fetch('http://localhost:9292/pokemons')
      const data = await resp.json();
      setPokemon(data);
    }
    loadPokemon();
  }, []);

  const searchPokemon = pokemon.filter((poke) =>
     poke.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teams" element={<Team 
          pokemon={searchPokemon}
          />} />
          <Route path="/pokedex" element={<PokemonContainer 
          pokemon={searchPokemon}
          onSearch={setSearchTerm}
          />} />
      </Routes>
    </div>
  );
}

export default App;
