import React, { Fragment, useState } from "react";

import PokeDrop from "./PokeDrop";
import UserDrop from "./UserDrop";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const StarterForm = ({ pokemon, users }) => {
    const [starters, setStarters] = useState([]);

    const [form, setForm] = useState({});

    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [name]:value,
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9292/starters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then((res) => res.json())
            .then((data) => setStarters(data, ...starters));
    };

    return (
        <Fragment>
            <Card.Header className="fs-2 pokemonContainer"><b>Create Pokemon Team</b></Card.Header>
            <Form onSubmit={handleSubmit} className="addPokemon" style={{ backgroundColor: '#3C4048' }}>
                <Form.Group className="mb-3">
                    <Form.Label><i>Enter Nickname</i></Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select User</Form.Label>
                    <Form.Select type="text" name="user_id" placeholder="User" onChange={handleChange}>
                        {users.length > 0 ? users.map(user => (
                            <UserDrop
                                key={user.id}
                                userid={user.id}
                                name={user.name}
                            />
                        ))
                            : "No Users to List!"
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Pokemon</Form.Label>
                    <Form.Select type="text" name="pokemon_id" placeholder="Pokemon" onChange={handleChange}>
                        {pokemon.length > 0 ? pokemon.map(poke => (
                            <PokeDrop
                                key={poke.id}
                                pokeid={poke.id}
                                name={poke.name}
                            />
                        ))
                            : "No Pokemon to List!"
                        }
                    </Form.Select>
                </Form.Group>
                <Button style={{ backgroundColor: '#00ABB3' }} type="submit">
                    Starter Chosen!
                </Button>
            </Form>
        </Fragment>
    );

}

export default StarterForm;