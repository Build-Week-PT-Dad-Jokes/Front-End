import React from "react"

const Joke = ({joke}) => {
    return (
        <div className="joke-card">
            <p>{joke.firstLine}</p>
            <p className="second-part">{!!joke.secondLine && joke.secondLine}</p>
            <p>Rating: {joke.rating}</p>
        </div>
    )
}

export default Joke