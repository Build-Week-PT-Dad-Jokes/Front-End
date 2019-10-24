import React, { useEffect,useState } from "react"
import axiosWithAuth from "../utils/axiosWithAuth"
import Joke from "./Joke"

const FavoritesPage = ()=> {
    const userId = 2
    const [favoriteArray, setFavoriteArray] = useState([])
    
    const addToFavs = res =>{
            const favorite = res.data
            setFavoriteArray([...favoriteArray, favorite])
    }
    
    useEffect(()=> {
        axiosWithAuth()
            .get(`/users/${userId}`)
            .then(res => {
                return res.data.favorite_jokes
            })
            .then(list => {
                list.map(item=> {
                    axiosWithAuth()
                        .get(`/jokes/${item.joke_id}`)
                        .then(addToFavs)
                })
                // console.log(favorites)
                
            })
            .catch(err=> console.log(err))
    },[])
    useEffect(()=> {}, [favoriteArray])

    return (
        <div className="jokes-container">
            <h2>Favorite Jokes</h2>
            {console.log(favoriteArray)}
            {!!favoriteArray && favoriteArray.map(joke=> {
                return (
                    <div className="single-joke" key={joke.id}>
                        <Joke joke={joke} />
                    </div>
                )
            })}
        </div>
    )
}

export default FavoritesPage