import React, {useState, useEffect} from "react"
import Joke from "./Joke"
import axios from "axios"
import JokeOfDay from "./JokeOfDay"
import AddJokeModal from "./AddJokeModal"
import { connect } from 'react-redux';
import { setJokes } from '../actions';

const JokesList = props => {
    const { apiJokes, isSearching, setJokes, searchResponse } = props;
    useEffect(()=>{
        axios 
            .get('https://dadjokesbw.herokuapp.com/api/jokes')
            .then(resp => {
                setJokes(resp.data)
            })
            .catch(err=> console.log(err))
    }, [])
    
    return (
        <div className="jokes-container">
            {!isSearching && <h2>Random Joke</h2>}
            {!!apiJokes && !isSearching && <JokeOfDay jokes={apiJokes}/>}
            <AddJokeModal />
            {!isSearching ? <h2>Recent Jokes</h2> : <h2>Search Results</h2>}
            {!!apiJokes && !isSearching && apiJokes.map(joke=>{
                return (
                    <div className="single-joke">
                        <Joke joke={joke} />
                    </div>
                )
            })}
            {!!apiJokes && isSearching && searchResponse.map(joke => (
                    <div className="single-joke">
                        <Joke joke={joke} />
                    </div>
            ))}
        </div>
    )
}

const mapStateToProps = ({ jokesReducer: {jokes, isSearching, searchResponse }}) => ({
    apiJokes: jokes,
    isSearching,
    searchResponse
})

export default connect(mapStateToProps, { setJokes })(JokesList)