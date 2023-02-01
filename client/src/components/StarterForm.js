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

    //Change handler that receives the pokemon id and user id 
    //from dropdown child components for the starters join table
    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [name]: value,
        })
    }

    //Submit handler that takes the data from the change handler
    //uses a POST request to update thes starters table on the backend
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
        setStarters([...starters, data]);
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
                            <option>Please select your user...</option>
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
                            <option>Please select your Starter...</option>
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