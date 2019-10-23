import React from "react"
import Joke from "./Joke"

const JokeOfDay = ({jokes}) => {
    const randomJoke = jokes[Math.floor(Math.random()*jokes.length)];
    return(
        <div className="single-joke">
            <Joke joke={randomJoke} />
        </div>
    )
}

export default JokeOfDay