import React, { Fragment } from "react";

import StarterDrop from "./Dropdowns/StarterDrop";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Starter = ({ starters }) => {

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Popover right</Popover.Header>
          <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
          </Popover.Body>
        </Popover>
      );


    // let deleteClick = () => {

    // }

    // let updateClick = () => {

    // }

    return (
        <Fragment>
            <div className='header'>
                <h1>Select your Team from Below</h1>
            </div>
            <div className='home' >
                <Form.Group className="mb-3">
                    <Form.Label>Select User</Form.Label>
                    <Form.Select type="text" name="starter_id" placeholder="Starter" >
                        {starters.length > 0 ? starters.map(starter => (
                            <StarterDrop
                                key={starter.id}
                                starid={starter.id}
                                name={starter.name}
                            />
                        ))
                            : "No Starters to List!"
                        }
                    </Form.Select>
                </Form.Group>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="success">Select</Button>
                </OverlayTrigger>
                {/* <Button id="teamBtn" onClick={deleteClick} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '75px 50px 0 50px' }}>
                    Delete your Starter!
                </Button>
                <Button id="pokedexBtn" onClick={updateClick} style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '700', textAlign: 'center', backgroundColor: '#222224', border: '1px solid #1BA098', borderRadius: '50px', height: '20%', width: '65%', margin: '25px 50px 75px 50px' }}>
                    Update
                </Button> */}
            </div>
        </Fragment>
    );

}

export default Starter;