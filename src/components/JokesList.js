import React, {useState, useEffect} from "react"
import Joke from "./Joke"
import axios from "axios"
import JokeOfDay from "./JokeOfDay"
import AddJokeModal from "./AddJokeModal"
import { connect } from 'react-redux';
import { setJokes, toggleSearching } from '../actions';

const JokesList = props => {
    //placeholder state with test joke objects
    const [apiJokes, setApiJokes] = useState()
    useEffect(()=>{
        axios 
            .get('https://dadjokesbw.herokuapp.com/api/jokes')
            .then(resp => {
                setApiJokes(resp.data)
            })
            .catch(err=> console.log(err))
    }, [])
    
    return (
        <div className="jokes-container">
            <h2>Random Joke</h2>
            {!!apiJokes && <JokeOfDay jokes={apiJokes}/>}
            <AddJokeModal />
            <h2>Recent Jokes</h2>
            {!!apiJokes && apiJokes.map(joke=>{
                return (
                    <div className="single-joke">
                        <Joke joke={joke} />
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = ({ jokesReducer: {jokes, isSearching}}) => ({
    apiJokes: jokes,
    isSearching: isSearching
})

export default connect(mapStateToProps, { setJokes, toggleSearching })(JokesList)