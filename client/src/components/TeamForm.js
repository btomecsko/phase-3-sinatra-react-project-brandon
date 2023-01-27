import React, { Fragment, useState } from "react";

import Dropdown from "./Dropdown";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Teams = ({ pokemon }) => {
    const [teams, setTeams] = useState([]);

    const [form, setForm] = useState({});

    let handleChange = (e) => {
        let pokemon_id = e.target.pokeid
        let name = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [pokemon_id]: value,
            [name]:value,
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9292/teams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
            .then((res) => res.json())
            .then((data) => setTeams(data, ...teams));
    };

    return (
        <Fragment>
            <Card.Header className="fs-2 pokemonContainer"><b>Create Pokemon Team</b></Card.Header>
            <Form onSubmit={handleSubmit} className="addPokemon" style={{ backgroundColor: '#3C4048' }}>
                <Form.Group className="mb-3">
                    <Form.Label><i>Enter Team Name</i></Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select Pokemon</Form.Label>
                    <Form.Select type="text" name="pokemon_id" placeholder="Pokemon" onChange={handleChange}>
                        {pokemon.length > 0 ? pokemon.map(poke => (
                            <Dropdown
                                key={poke.id}
                                pokeid={poke.dex_num}
                                name={poke.name}
                            />
                        ))
                            : "No Pokemon to List!"
                        }
                    </Form.Select>
                </Form.Group>
                <Button style={{ backgroundColor: '#00ABB3' }} type="submit">
                    Create Team
                </Button>
            </Form>
        </Fragment>
    );

}

export default Teams;