import React, {Fragment} from "react";

import PokeDrop from "../Dropdowns/PokeDrop";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UpdateStarter = () => {

    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        //setForm({
        //    ...form,
        //    [name]: value,
        //})
    }

    //Submit handler that takes the data from the change handler
    //uses a POST request to update thes starters table on the backend
    let handleSubmit = async (e) => {
        e.preventDefault();
        const settings = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               body: UNKNOWN  
            }),
        };
        const resp = await fetch(`http://localhost:9http://localhost:9292/starters/${id}`, settings);
        const data = await resp.json();
        //setStarters([...starters, data]);
        navigate("/selectuser")
    };

    <Fragment>
            <div className='header'>
                <h1>Choose your New Starter!</h1>
            </div>
            <div className='home' >
                <Form onSubmit={handleSubmit}>
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
                        Update
                    </Button>
                </Form>
            </div>
        </Fragment>

}

export default UpdateStarter;