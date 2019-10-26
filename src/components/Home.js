import React from "react"
import JokesList from "./JokesList"
import Header from "./Header"

const Home = props => {
    return (
        <div className="home-container">
            <Header />
            <JokesList {...props} />
            {/* <Link to="/favorites/7">
                Go to favorites
            </Link> */}
            {/* <FavoritesPage/> */}
        </div>
    )
}

export default Home