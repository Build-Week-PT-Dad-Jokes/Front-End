import React from "react"
import AustinJokesList from "./AustinJokesList"

const AustinHome = props => {
    return (
        <div className="home-container">
            <h2>Dad Jokes</h2>
            <AustinJokesList />
        </div>
    )
}

export default AustinHome