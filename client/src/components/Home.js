import { Fragment } from 'react';
import { useNavigate } from "react-router-dom";
//import LogoImg from "../assets/logo.png";

import Button from 'react-bootstrap/Button';

const Home = () => {

  const navigate = useNavigate();

  let teamClick = () => {
    navigate("/createuser")
  }

  let pokedexClick = () => {
    navigate("/pokedex")
  }

  return (
    <Fragment>
      <div className='header'>
        <h1>Welcome to the Pokemon Starter Selector!</h1>
        <h3>Select an Option from Below...</h3>
      </div>
      <div className='home' >
        {/* <img src={LogoImg} alt="App Logo" className="logo" /> */}
        <Button id="teamBtn" onClick={teamClick} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '75px 50px 0 50px' }}>
          Choose your Starter!
        </Button>
        <Button id="pokedexBtn" onClick={pokedexClick} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '25px 50px 75px 50px' }}>
          Pokedex
        </Button>
      </div>
    </Fragment>
  );

}

export default Home;