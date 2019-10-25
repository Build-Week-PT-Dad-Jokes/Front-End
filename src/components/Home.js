import React from "react"
import JokesList from "./JokesList"
import Header from "./Header"
import {Link} from "react-router-dom"
import FavoritesPage from "./FavoritesPage"

const Home = props => {
    return (
        <div className="home-container">
            <Header />
            <JokesList />
            {/* <Link to="/favorites/7">
                Go to favorites
            </Link> */}
            <FavoritesPage/>
        </div>
    )
}

export default Home