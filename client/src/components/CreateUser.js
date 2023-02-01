import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateUser = ({ refreshUs }) => {
    const [users, setUsers] = useState([]);
    const [userForm, setUse] = useState({});
    const navigate = useNavigate();

    //change handler to receive new user information and put it in the form state object
    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUse({
            ...userForm,
            [name]: value,
        })
    }

    //Submit function handling a POST request to add a new user then navigate you to the starter selection
    let handleSubmit = async (e) => {
        e.preventDefault();
        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userForm),
        };
        const resp = await fetch("http://localhost:9292/users", settings);
        const data = await resp.json();
        refreshUs();
        setUsers(...users, data);
        navigate("/choosestarter")
    };

    return (
        <Fragment>
            <div className='header'>
                <h1>Create a Username</h1>
            </div>
            <div className='home' >
                <Form onSubmit={handleSubmit}>
                    <Form.Label><i>Enter Username</i></Form.Label>
                    <Form.Control type="text" name="name" placeholder="Name" onChange={handleChange} />
                    <Button style={{ backgroundColor: '#00ABB3' }} type="submit">
                        Create User
                    </Button>
                </Form>
            </div>
        </Fragment>
    );
}

export default CreateUser;