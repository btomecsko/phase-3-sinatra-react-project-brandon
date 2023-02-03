import React, { Fragment, useState } from "react";

import { useNavigate } from "react-router-dom";

import UserDrop from "../Dropdowns/UserDrop";
import StarterList from "./StarterList";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SelectUser = ({ users }) => {

    const [userId, setUserId] = useState(0);
    const [user, setUsers] = useState({starters: []});
    const [newName, setNewName] = useState({starters: []})

    const navigate = useNavigate();

    let returnHome = () => {
        navigate("/")
      }

    let addStarters = (e) => {
        let value = e.target.value
        setUserId(value);
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:9292/users/${userId}`);
        const data = await res.json();
        //console.log(userId)
        
        setUsers(data);
    }

    let refreshUser = async () => {
        const res = await fetch(`http://localhost:9292/users/${userId}`);
        const data = await res.json();
        //console.log(userId)
        
        setUsers(data);
        setNewName(data);
    }

    function handleUpdateStarter(updatedName) {
        const updateStarter = newName.starters.map((currentName) => {
          if (updatedName.name === currentName.name) {
            return updatedName;
          } else {
            return currentName;
          }
        });
        setNewName(updateStarter);
      }

    return (
        <Fragment>
            <div className='header'>
                <h1>Select your Username from Below</h1>
            </div>
            <div >
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                    <Form.Select type="text" name="user_id" placeholder="User" onChange={addStarters}>
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
                <Button style={{ backgroundColor: '#00ABB3' }} type="submit">User Selected</Button>
                <Button onClick={returnHome} style={{ backgroundColor: '#00ABB3' }}>
                    Home
                </Button>
                </Form>
                <h4>Starter</h4>
                <div className="pokemonContainer">
                <div>
                <ul className="pokemonList">
                    {user.starters.length > 0 ? user.starters.map((starter) => {
                        return(
                        <StarterList
                            key={starter.id}
                            starId={starter}
                            starter={refreshUser}
                            sprite={starter.pokemon.sprite}
                            pokemon={starter.pokemon.name}
                            editStarter={handleUpdateStarter}
                        />
                        )
                    }) : "No Starters to Display"}

                </ul>
            </div>
                </div>   
            </div>
        </Fragment>
    );

}

export default SelectUser;