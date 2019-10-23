import React from "react"
import JokesList from "./JokesList"
import JokeOfDay from "./JokeOfDay"

const Home = props => {
    return (
        <div className="home-container">
            <JokesList />
        </div>
    )
}

export default Home