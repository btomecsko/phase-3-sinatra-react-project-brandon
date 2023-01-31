import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const StarterList = ({sprite, name }) => {
  return (
    <li className="pokeCard">
      <Card style={{ width: '18rem', backgroundColor: '#3C4048' }}>
        <Card.Img className="pokeImage" variant="top" src={sprite} alt={name} />
        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ backgroundColor: '#3C4048' }}><b>{name}</b></ListGroup.Item>
        </ListGroup>
      </Card>
    </li>

  );
}

export default StarterList;