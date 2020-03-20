import React from "react"
import JokesList from "./JokesList"
import Header from "./Header"

const Home = props => {
    return (
        <div className="home-container">
            <Header />
            <JokesList {...props} />
        </div>
    )
}

export default Home