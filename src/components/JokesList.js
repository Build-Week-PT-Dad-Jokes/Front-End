import React, {useState} from "react"
import Joke from "./Joke"

const JokesList = props => {

    //placeholder state with test joke objects
    const [jokeList, setJokeList] = useState(
        [
            {
                id: 1,
                firstLine: 'I’m so good at sleeping I can do it with my eyes closed!',
                secondLine: null,
                rating: 4
            },
            {
                id: 2,
                firstLine: 'How many apples grow on a tree?',
                secondLine: 'All of them!',
                rating: 3
            },
            {
                id: 3,
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
        </div>
    )
}
export default JokesList