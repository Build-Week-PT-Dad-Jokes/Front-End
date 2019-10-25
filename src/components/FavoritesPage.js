import React, { useEffect,useState } from "react"
import Joke from "./Joke"
import { connect } from 'react-redux';


const FavoritesPage = (props)=> {
    const {favorites, allJokes} = props
    const [favoriteArray, setFavoriteArray] = useState([])
    useEffect(()=> {
        const jokeIds = !!favorites ? favorites.map(fav=> fav.joke_id) : []
        const filtered = !!allJokes ? allJokes.filter(joke=> jokeIds.includes(joke.id)) : []
        setFavoriteArray(filtered)
        console.log(favorites, allJokes)
    }, [favorites, allJokes])
    return (
        <div className="jokes-container">
            <h2>Favorite Jokes</h2>
            {!!favoriteArray && favoriteArray.map(joke=> {
                return (
                    <div className="single-joke" key={joke.id}>
                        <Joke joke={joke} inheritBookmark />
                    </div>
                )
            })}
        </div>
    )
}
const mapStateToProps = (state) => ({
    favorites: state.userReducer.user.favorites,
    allJokes: state.jokesReducer.jokes
})

export default connect(mapStateToProps, {})(FavoritesPage)