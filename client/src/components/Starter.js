import React, { Fragment, useEffect, useState } from "react";
import StarterList from "./StarterList";

// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

const Starters = ({ userId }) => {

    const [user, setUsers] = useState();

    useEffect(() => {
            fetch(`http://localhost:9292/users/${userId}`)
            .then (res => res.json())
            .then (user => setUsers(user));
    }, [userId]);

    return (
        <Fragment>
            <h4>Starter</h4>
            <div>
                <ul className="pokemonList">
                    {user.starters.length > 0 ? user.starters.map((starter) => (
                        <StarterList
                            key={starter.id}
                            sprite={starter.pokemon.sprite}
                            name={starter.pokemon.name}
                        />
                    )) : "No Starters"}

                </ul>
            </div>
        </Fragment>
    )

}

export default Starters;






//   <Button id="teamBtn" onClick={deleteClick} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '75px 50px 0 50px' }}>
//                     Delete your Starter!
//                 </Button>
//                 <Button id="pokedexBtn" onClick={updateClick} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '25px 50px 75px 50px' }}>
//                     Update
//                 </Button> 