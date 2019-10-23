import React from "react"
import JokesList from "./JokesList"
import Header from "./Header"

const Home = props => {
    return (
        <div className="home-container">
            <Header />
            <h2>Dad Jokes</h2>
            <JokesList />
        </div>
    )
}

export default Home