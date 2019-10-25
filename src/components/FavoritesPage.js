import React, { useEffect,useState } from "react"
import axiosWithAuth from "../utils/axiosWithAuth"
import Joke from "./Joke"

const FavoritesPage = ()=> {
    const userId = 2
    const [favoriteArray, setFavoriteArray] = useState([])
    const favorites = [{}]
    const asyncTest = async () => {
        await axiosWithAuth()
            .get(`/users/${userId}`)
            .then(res => {
                return res.data.favorite_jokes
            })
            .then(list => {
                const favorites = list.map(item=> {
                    axiosWithAuth()
                        .get(`/jokes/${item.joke_id}`)
                        .then(res=>{
                            return res.data
                        })
                        .catch(err=> console.log(err))
                        })
            console.log(favorites)
                setFavoriteArray(favorites)
            })
            .catch(err=> console.log(err))
    }
    
    useEffect(()=> {
        asyncTest()
    },[])
    useEffect(()=> {}, [favoriteArray])

    return (
        <div className="jokes-container">
            <h2>Favorite Jokes</h2>
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