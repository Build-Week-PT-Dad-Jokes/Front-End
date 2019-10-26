import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function AustinJokeCard(props) {
    return (
        <div className="joke-card">
            <Card>
                <Card.Body>
                    <p>{props.first_line}</p>
                    <p>{props.punchline}</p>
                    <p>Rating: {props.rating}</p>
                    <Button className="rate-button">Rate Joke</Button>
                </Card.Body>
            </Card>
        </div>
    );
}