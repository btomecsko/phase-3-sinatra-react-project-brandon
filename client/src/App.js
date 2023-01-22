import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Team from "./components/Team";
import PokemonContainer from "./components/PokemonContainer";


const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teams" element={<Team />} />
          <Route path="/pokedex" element={<PokemonContainer />} />
      </Routes>
    </div>
  );
}

export default App;
