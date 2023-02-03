import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import StarterForm from "./components/Starter/StarterForm";
import PokemonContainer from "./components/Pokedex/PokemonContainer";
import CreateUser from "./components/CreateUser";
import SelectUser from "./components/Starter/SelectUser";


const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Fetch request to call on Pokemon for Pokedex and Starter Form
  useEffect(() => {

    const loadPokemon = async () => {
      const resp = await fetch('http://localhost:9292/pokemons')
      const data = await resp.json();
      setPokemon(data);
    }
    loadPokemon();
  }, []);

  //UseEffect request to get Users with a callback refresh function
  useEffect(() => {
    getUsers();
  }, []);

  //callback fetch request to be prop down to refresh data with new data
  const getUsers = () => {
    const loadUsers = async () => {
      const resp = await fetch('http://localhost:9292/users')
      const data = await resp.json();
      setUsers(data);
    }
    loadUsers();
  }

  useEffect(() => {
    const loadPokemon = async () => {
      const resp = await fetch('http://localhost:9292/pokemons')
      const data = await resp.json();
      setPokemon(data);
    }
    loadPokemon();
  })

  //Search filter to be used in the pokedex to search for pokemon
  const searchPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choosestarter" element={<StarterForm
          pokemon={searchPokemon}
          users={users}
        />} />
        <Route path="createuser" element={<CreateUser
          refreshUs={getUsers}
        />} />
        <Route path="/pokedex" element={<PokemonContainer
          pokemon={searchPokemon}
          onSearch={setSearchTerm}
        />} />
        <Route path="/selectuser" element={<SelectUser
          users={users}
        />} />
      </Routes>
    </div>
  );
}

export default App;
