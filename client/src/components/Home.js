import { Fragment, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
//import LogoImg from "../assets/logo.png";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home = () => {

  const [userData, setUserData] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [company, setCompany] = useState();
  const [team, setTeam] = useState();
  const [teamName, setTeamName] = useState();
  const navigate = useNavigate();


    return (
      <Fragment>
      <div className='header'>
        <h1>Welcome to the Pokemon Team Creator!</h1>
        <h3>Select an Option from Below...</h3>
      </div>
        <Form className='login' onSubmit={handleSubmit}>
        <img src={LogoImg} alt="App Logo" className="logo" />
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter username" onChange={handleChange} />
            {renderErrorMessage("username")}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
            {renderErrorMessage("password")}
          </Form.Group>
          <Button id="loginSubmit" type="submit" style={{textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: 'inherit', border: '1px solid #1BA098', borderRadius: '100px', marginBottom: '5px'}}>
            Login
          </Button>
        </Form>
        </Fragment>
      );

}

export default Home;