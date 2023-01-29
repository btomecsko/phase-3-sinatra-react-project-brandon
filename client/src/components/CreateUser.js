import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateUser = () => {
    const [users, setUsers] = useState([]);
    const [userForm, setForm] = useState({});
    const navigate = useNavigate();

    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setForm({
            ...userForm,
            [name]:value,
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userForm),
        })
            .then((res) => res.json())
            .then((data) => setUsers(data, ...users));
            navigate("/choosestarter")
    };

    return (
        <Form onSubmit={handleSubmit} className="addPokemon" style={{ backgroundColor: '#3C4048' }}>
            <Form.Label><i>Enter Username</i></Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" onChange={handleChange} />
            <Button style={{ backgroundColor: '#00ABB3' }} type="submit">
                Create User
            </Button>
        </Form>
    );
}

export default CreateUser;