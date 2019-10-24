import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function AustinJokeCard(props) {
    return (
        <div className="joke-card">
            <Card>
                <Card.Body>
                    <Card.Text>
                        <p>{props.first_line}</p>
                        <p>{props.punchline}</p>
                    </Card.Text>
                    <Button variant="primary">Rate Joke!</Button>
                </Card.Body>
            </Card>
        </div>
    );
}