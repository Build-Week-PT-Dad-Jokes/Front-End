import React, {useState, useEffect} from "react"
import Joke from "./Joke"
import axios from "axios"
import JokeOfDay from "./JokeOfDay"
import AddJokeModal from "./AddJokeModal"

const JokesList = props => {
    //placeholder state with test joke objects
    const [apiJokes, setApiJokes] = useState()
    const [sortBy, setSortBy] = useState('default')
    useEffect(()=>{
        axios 
            .get('https://dadjokesbw.herokuapp.com/api/jokes')
            .then(resp => {
                setApiJokes(resp.data)
            })
            .catch(err=> console.log(err))
    }, [])

    const getPageTitle = ()=> {
        if(sortBy==='mostPopular'){
            return(
                <h2>Most Popular</h2>
            )
        }
        if(sortBy==='mostRecent' || sortBy==='default'){
            return(
                <h2>Most Recent</h2>
            )
        }
        if(sortBy==='topRated'){
            return(
                <h2>Top Rated</h2>
            )
        }
    }
    const returnJoke = (joke)=> {
        return (
            <div className="single-joke" key={joke.id}>
                <Joke joke={joke} />
            </div>
        )
    }
    const getJokeContent = () => {
        
        if(sortBy==='mostPopular'){
            !!apiJokes && apiJokes.map(joke=>{
                return returnJoke(joke)
            })
        }
        if(sortBy==='mostRecent' || sortBy==='default'){
            !!apiJokes && apiJokes.map(joke=>{
                return returnJoke(joke)
            })
        }
        if(sortBy==='topRated'){
            !!apiJokes && apiJokes.sortBy('rating').map(joke=>{
                return returnJoke(joke)
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
            <h2>Random Joke</h2>
            {!!apiJokes && <JokeOfDay jokes={apiJokes}/>}
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
            {/* {getJokeContent()} */}
            {!!apiJokes && apiJokes.map(joke=>{
                    return returnJoke(joke)
            })}
        </div>
    )
}
export default JokesList