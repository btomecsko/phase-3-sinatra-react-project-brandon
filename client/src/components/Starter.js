import React, { Fragment, useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';

const Starter = () => {

    const [starter, setStarter] = useState([]);

    useEffect(() => {

        const loadStarter = async () => {
          const resp = await fetch('http://localhost:9292/starters')
          const data = await resp.json();
          setStarter(data);
        }
        loadStarter();
      }, []);

    let deleteClick = () => {
        
      }
    
      let updateClick = () => {
        
      }

    return (
        <Fragment>
        <div className='header'>
          <h1>Select your Team from Below</h1>
        </div>
          <div className='home' >
          {/* <img src={LogoImg} alt="App Logo" className="logo" /> */}
            <Button id="teamBtn" onClick={deleteClick} style={{textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '75px 50px 0 50px'}}>
              Delete your Starter!
            </Button>
            <Button id="pokedexBtn" onClick={updateClick} style={{textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '25px 50px 75px 50px'}}>
              Update
            </Button>
          </div>
          </Fragment>
        );

}

export default Starter;