import React, { useState, useEffect } from "react"
import Joke from "./Joke"

const JokeOfDay = props => {
    const[randomJoke, setRandomJoke] = useState();
    const { jokes } = props;

    useEffect(() =>{
        setRandomJoke(jokes[Math.floor(Math.random()*jokes.length)]);
    }, [jokes])

    return(
        <div className="single-joke">
            {randomJoke && <Joke {...props} joke={randomJoke} />}
        </div>
    )
}

export default JokeOfDay