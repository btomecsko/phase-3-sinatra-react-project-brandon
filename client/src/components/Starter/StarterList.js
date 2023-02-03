import React, { useState } from "react";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const StarterList = ({ sprite, pokemon, starId, starter, editStarter }) => {

  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(starId.name);
  //const [starterId, setStartId] = useState();
  //const [upForm, setUpdate] = useState([]);
  //const [upStart, setUpStar] = useState([]);

  function deleteClick(id) {
    fetch(`http://localhost:9292/starters/${id}`, {
      method: "DELETE"
    })
      .then((resp) => {
        resp.json()
        .then((resp) => {
          console.warn(resp)
          starter()
        })
      })
  }

// function handleUpdateStarter(updatedName) {
//   const updateStarter = starId.map((start) => {
//     if (start.id === updatedName.id) {
//       return updateStarter;
//     } else {
//       return start;
//     }
//   });
//   setName(updatedName);
// }

let handleSubmit = async (e) => {
  e.preventDefault();
  const settings = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: starId.name
  }),
  };
  const resp = await fetch(`http://localhost:9292/starters/${starId.id}`, settings)
  const data = await resp.json();
  //console.log(data)
  editStarter(data)
}

  return (
    <li className="pokeCard">
      <Card style={{ width: '18rem', backgroundColor: '#3C4048' }}>
        <Card.Img className="pokeImage" variant="top" src={sprite} alt={pokemon} />
        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ backgroundColor: '#3C4048' }}><b>{pokemon}</b></ListGroup.Item>
        </ListGroup>
        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ backgroundColor: '#3C4048' }}><b>{starId.name}</b></ListGroup.Item>
        </ListGroup>
        <Button onClick={() => deleteClick(starId.id)} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '75px 50px 0 50px' }}>
          Delete your Starter!
        </Button>
        <Button onClick={() => setVisible(!visible)} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '75px 50px 0 50px' }}>
          {visible ? 'Cancel' : 'Update Nickname'}
        </Button>
        {visible &&
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label><i>Enter a New Nickname...</i></Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name"/>
            </Form.Group>
            <Button style={{ backgroundColor: '#00ABB3' }} type="submit">
              Confirm
            </Button>
          </Form>
        }
      </Card>
    </li>

  );
}

export default StarterList;