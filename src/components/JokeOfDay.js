import React from "react"
import Joke from "./Joke"

const JokeOfDay = props => {
    const { jokes } = props;
    const randomJoke = jokes[Math.floor(Math.random()*jokes.length)];
    return(
        <div className="single-joke">
            <Joke {...props} joke={randomJoke} />
        </div>
    )
}

export default JokeOfDay