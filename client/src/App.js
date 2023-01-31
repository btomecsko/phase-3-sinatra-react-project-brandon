import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import StarterForm from "./components/StarterForm";
import PokemonContainer from "./components/Pokedex/PokemonContainer";
import CreateUser from "./components/CreateUser";
import SelectUser from "./components/SelectUser";


const App = () => {

  const [pokemon, setPokemon] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {

    const loadPokemon = async () => {
      const resp = await fetch('http://localhost:9292/pokemons')
      const data = await resp.json();
      setPokemon(data);
    }
    loadPokemon();
  }, []);

  useEffect(() => {

    const loadUsers = async () => {
      const resp = await fetch('http://localhost:9292/users')
      const data = await resp.json();
      setUsers(data);
    }
    loadUsers();
  }, []);

  const searchPokemon = pokemon.filter((poke) =>
     poke.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

  const searchUsers = users.filter((user) => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/choosestarter" element={<StarterForm 
          pokemon={searchPokemon}
          users={searchUsers}
          />} />
          <Route path="createuser" element={<CreateUser/>}/>
          <Route path="/pokedex" element={<PokemonContainer 
          pokemon={searchPokemon}
          onSearch={setSearchTerm}
          />} />
          <Route path="/selectuser" element={<SelectUser
          users={searchUsers}
          />}/>
      </Routes>
    </div>
  );
}

export default App;
