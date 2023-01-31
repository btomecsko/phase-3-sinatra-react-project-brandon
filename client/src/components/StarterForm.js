import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import PokeDrop from "./Dropdowns/PokeDrop";
import UserDrop from "./Dropdowns/UserDrop";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const StarterForm = ({ pokemon, users }) => {

    const [starters, setStarters] = useState([]);
    const [form, setForm] = useState({});

    const navigate = useNavigate();

    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [name]: value,
        })
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        };
        const resp = await fetch("http://localhost:9292/starters", settings);
        const data = await resp.json();
        setStarters(data, ...starters);
        navigate("/selectuser")
    };

    return (
        <Fragment>
            <div className='header'>
                <h1>Choose your Starter!</h1>
            </div>
            <div className='home' >
            <Form onSubmit={handleSubmit}>
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
            </div>
        </Fragment>
    );

}

export default StarterForm;