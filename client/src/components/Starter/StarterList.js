import React from "react";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const StarterList = ({ sprite, name, starId, starter }) => {


  function deleteClick(id){
    fetch(`http://localhost:9292/starters/${id}`, {
      method: "DELETE"
    })
    .then((resp) => {resp.json()
    .then((resp) => {console.warn(resp)
      starter()
      })
    })
  }

  return (
    <li className="pokeCard">
      <Card style={{ width: '18rem', backgroundColor: '#3C4048' }}>
        <Card.Img className="pokeImage" variant="top" src={sprite} alt={name} />
        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ backgroundColor: '#3C4048' }}><b>{name}</b></ListGroup.Item>
        </ListGroup>
        <Button onClick={()=>deleteClick(starId.id)} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '75px 50px 0 50px' }}>
          Delete your Starter!
        </Button>
        {/* <Button id="pokedexBtn" onClick={updateClick} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '25px 50px 75px 50px' }}>
          Update
        </Button> */}
      </Card>
    </li>

  );
}

export default StarterList;