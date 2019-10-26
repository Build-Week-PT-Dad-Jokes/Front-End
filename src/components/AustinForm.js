import React from "react";
import Popup from "reactjs-popup";
import { Button, FormControl, FormGroup, FormText, Form } from 'react-bootstrap';

const JokeForm = () => (
    <div className="form-container">
        <Popup
            trigger={<button className="form-button"> Submit a Joke </button>}
            modal
            closeOnDocumentClick
        >
            <div className="form-content">
                <Form>
                    <Form.Group controlId="formFirst">
                        <Form.Label>Firstline: </Form.Label>
                        <Form.Control placeholder="Enter first line" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formSecond">
                        <Form.Label>Punchline: </Form.Label>
                        <Form.Control placeholder="Punchline (If any)" />
                    </Form.Group>
                    <Form.Group controlId="ControlSelect1">
                        <Form.Label>Give it a rating: </Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Make joke public" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Popup>
    </div >
);

export default JokeForm;