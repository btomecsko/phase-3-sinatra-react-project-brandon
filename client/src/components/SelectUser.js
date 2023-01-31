import React, { Fragment, useState } from "react";

import UserDrop from "./Dropdowns/UserDrop";
import Starter from "./Starter";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SelectUser = ({ users }) => {

    const [userId, setUserId] = useState({});
    const [form, setForm] = useState([]);

    let addStarters = (e) => {
        setUserId(e.target.value);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        const formData = {userId: userId};
        const dataArray = [...form, formData];
        setForm(dataArray);
        setUserId();
    }

    const listOfStarters = form.length > 0 ? form.map((data, index) => {
            return (
            <Starter
                key={index}
                userId={data.id}
            />
         ); 
         }) : "No Starters to Display";
    


    return (
        <Fragment>
            <div className='header'>
                <h1>Select your Username from Below</h1>
            </div>
            <div className='home' >
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                    <Form.Select type="text" name="user_id" placeholder="User" onChange={addStarters}>
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
                <Button style={{ backgroundColor: '#00ABB3' }} type="submit">User Selected</Button>
                </Form>
                <div className="pokemonContainer">
                {listOfStarters}
                </div>   
            </div>
        </Fragment>
    );

}

export default SelectUser;