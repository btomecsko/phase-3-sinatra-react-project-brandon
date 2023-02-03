import React, { useState } from "react";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';


const StarterList = ({ sprite, pokemon, starter, refresh, starId }) => {

  const [visible, setVisible] = useState(false);
  const [name, setNewName] = useState("")

  //Delete request handles deleting the starter associated with the user
  function deleteClick(id) {
    fetch(`http://localhost:9292/starters/${id}`, {
      method: "DELETE"
    })
      .then((resp) => {
        resp.json()
          .then((resp) => {
            console.warn(resp)
            refresh()
          })
      })
  }

  //Put request updates the pokemon nickname
  function updateName() {
    let newName = { name }
    console.warn("name", newName)
    fetch(`http://localhost:9292/starters/${starId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newName)
    })
      .then((resp) => {
        resp.json()
          .then((resp) => {
            console.warn(resp)
            refresh()
          })
      })
  }

  return (
    <li className="pokeCard">
      <Card style={{ width: '18rem' }}>
        <Card.Img className="pokeImage" variant="top" src={sprite} alt={pokemon} />
        <ListGroup className="list-group-flush">
          <ListGroup.Item><b>{pokemon}</b></ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item ><b>{starter.name}</b></ListGroup.Item>
        </ListGroup>
        <Button onClick={() => deleteClick(starter.id)} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '75px 50px 0 50px' }}>
          Delete your Starter!
        </Button>
        <Button onClick={() => setVisible(!visible)} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '75px 50px 0 50px' }}>
          {visible ? 'Cancel' : 'Update Nickname'}
        </Button>
        {visible &&
          <div>
            <input type="text" value={name} onChange={(e) => setNewName(e.target.value)} /> <br />
            <Button style={{ backgroundColor: '#00ABB3' }} onClick={updateName}>
              Confirm
            </Button>
          </div>
        }
      </Card>
    </li>

  );
}

export default StarterList;