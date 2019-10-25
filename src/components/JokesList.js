import React, {useState, useEffect} from "react"
import Joke from "./Joke"
import axios from "axios"
import JokeOfDay from "./JokeOfDay"
import AddJokeModal from "./AddJokeModal"
import { connect } from 'react-redux';
import { setJokes } from '../actions';

const JokesList = props => {
    const [sortBy, setSortBy] = useState('default')
    const { apiJokes, isSearching, setJokes, searchResponse } = props;
    useEffect(()=>{
        axios 
            .get('https://dadjokesbw.herokuapp.com/api/jokes')
            .then(resp => {
                const filteredPublic = resp.data.filter(ele=> !ele.private)
                setJokes(filteredPublic)
            })
            .catch(err=> console.log(err))
            
    }, [])

    const getPageTitle = ()=> {
        if(sortBy==='mostPopular'){
            return(
                !isSearching ? <h2>Most Popular</h2> : <h2>Search Results</h2>
            )
        }
        if(sortBy==='mostRecent' || sortBy==='default'){
            return(
                !isSearching ? <h2>Most Recent</h2> : <h2>Search Results</h2>
            )
        }
        if(sortBy==='topRated'){
            return(
                !isSearching ? <h2>Top Rated</h2> : <h2>Search Results</h2>
            )
        }
    }
    const returnJoke = (joke, ind)=> {
        return ind<10 &&
            <div className="single-joke" key={joke.id}>
                <Joke joke={joke} />
            </div>
    }
    const getJokeContent = () => {
        
        if(sortBy==='mostPopular'){
            return !!apiJokes && apiJokes.map((joke,ind)=>{
                return returnJoke(joke, ind)
            })
        }
        if(sortBy==='mostRecent' || sortBy==='default'){
            return !!apiJokes && apiJokes.map((joke,ind)=>{
                return returnJoke(joke, ind)
            })
        }
        if(sortBy==='topRated'){
            return !!apiJokes && apiJokes.map((joke,ind)=>{
                return returnJoke(joke, ind)
            })
        }
    }

    const handleSort = e=> {
        e.preventDefault()
        const {value} = e.target
        setSortBy(value)
    }
    
    return (
        <div className="jokes-container">
            {!isSearching && <h2>Random Joke</h2>}
            {!!apiJokes && !isSearching && <JokeOfDay jokes={apiJokes}/>}
            <AddJokeModal />
            <div className="recent-sort-container">
                {getPageTitle()}
                <select 
                    className="select-input" 
                    name="sortBy" 
                    value={sortBy} 
                    onChange={handleSort}
                >
                    <option value="default">Sort By</option>
                    <option value="mostPopular">Most Popular</option>
                    <option value="mostRecent">Most Recent</option>
                    <option value="topRated">Top Rated</option>
                </select> 
            </div>
            
            {!isSearching && getJokeContent()}
            {!!apiJokes && isSearching && searchResponse.map((joke,ind) => (
                returnJoke(joke, ind)
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