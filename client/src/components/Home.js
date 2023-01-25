import { Fragment } from 'react';
import { useNavigate } from "react-router-dom";
//import LogoImg from "../assets/logo.png";

import Button from 'react-bootstrap/Button';

const Home = () => {

  const navigate = useNavigate();


    return (
      <Fragment>
      <div className='header'>
        <h1>Welcome to the Pokemon Team Creator!</h1>
        <h3>Select an Option from Below...</h3>
      </div>
        <div className='home' >
        {/* <img src={LogoImg} alt="App Logo" className="logo" /> */}
          <Button id="teamBtn" type="submit" style={{textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '100px', marginBottom: '5px'}}>
            Create Team
          </Button>
          <Button id="pokedexBtn" type="submit" style={{textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '100px', marginBottom: '5px'}}>
            Pokedex
          </Button>
        </div>
        </Fragment>
      );

}

export default Home;