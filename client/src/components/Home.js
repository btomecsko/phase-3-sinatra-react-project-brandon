import { Fragment, useState } from 'react';
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
        <Form className='login' >
        {/* <img src={LogoImg} alt="App Logo" className="logo" /> */}
          <Button id="loginSubmit" type="submit" style={{textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: 'inherit', border: '1px solid #1BA098', borderRadius: '100px', marginBottom: '5px'}}>
            Create Team
          </Button>
          <Button id="loginSubmit" type="submit" style={{textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: 'inherit', border: '1px solid #1BA098', borderRadius: '100px', marginBottom: '5px'}}>
            Pokedex
          </Button>
        </Form>
        </Fragment>
      );

}

export default Home;