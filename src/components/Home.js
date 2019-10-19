import React from "react"
import JokesList from "./JokesList"

const Home = props => {
    return (
        <div className="home-container">
            <h2>Dad Jokes</h2>
            <JokesList />
        </div>
    )
}

export default Home