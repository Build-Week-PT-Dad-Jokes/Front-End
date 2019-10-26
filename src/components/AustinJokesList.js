import React, { useEffect, useState } from "react";
import AustinJokeCard from "./AustinJokeCard";
import axios from 'axios';
import "../App.css";

const apiLink = 'https://dadjokesbw.herokuapp.com/api/jokes';
export default function AustinJokesList() {
    const [jokes, setJokes] = useState([]);
    useEffect(() => {
        axios.get(apiLink).then(res => {
            console.log(res);
            setJokes(res.data);
        }).catch(e => console.log(e));
    }, []);

    return (
        <div className="joke-list">
            {
                jokes.map(joke =>
                    <AustinJokeCard
                        id={joke.id}
                        first_line={joke.first_line}
                        punchline={joke.punchline}
                        rating={joke.rating}
                    />)
            }
        </div>
    );
}

