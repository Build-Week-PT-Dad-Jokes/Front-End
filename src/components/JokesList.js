import React, {useState, useEffect} from "react"
import Joke from "./Joke"
import axios from "axios"

const JokesList = props => {
    
    useEffect(()=>{
        axios 
            .get('https://dadjokesbw.herokuapp.com/api/jokes')
            .then(resp => {
                console.log(resp)
                setApiJokes(resp.data)
            })
            .catch(err=> console.log(err))
    }, [])
    //placeholder state with test joke objects
    const [apiJokes, setApiJokes] = useState([])
    const [jokeList, setJokeList] = useState(
        [
            {
                id: 1,
                author_id: 1,
                firstLine: 'I’m so good at sleeping I can do it with my eyes closed!',
                secondLine: null,
                rating: 4
            },
            {
                id: 2,
                author_id: 5,
                firstLine: 'How many apples grow on a tree?',
                secondLine: 'All of them!',
                rating: 3
            },
            {
                id: 3,
                author_id: 1,
                firstLine: 'What’s brown and sticky?',
                secondLine: 'A stick!',
                rating: 5
            }
        ])
        
    return (
        <div className="jokes-container">
            <p>Recent Jokes</p>
            {jokeList.map(joke=>{
                return (
                    <div className="single-joke">
                        <Joke joke={joke} />
                    </div>
                )
            })}
            {apiJokes.map(joke=> {
                return (
                    <div className="single-joke">
                        <p>id: {joke.id}</p>
                        <p>user_id: {joke.user_id}</p>
                        <p>joke: {joke.joke}</p>
                        <p>setup: {joke.setup}</p>
                        <p>delivery: {joke.delivery}</p>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}
export default JokesList