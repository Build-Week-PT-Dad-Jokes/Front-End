import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import user from '../img/user.png';
import SearchForm from './SearchForm';
import axios from 'axios';

function Header(props) {

  const [apiJokes, setApiJokes] = useState()
  const [search, setSearch] = useState('')

  useEffect(()=>{
    axios 
        .get('https://dadjokesbw.herokuapp.com/api/jokes')
        .then(resp => {
            setApiJokes(resp.data)
        })
        .catch(err=> console.log(err))
}, [])

  const handleChange = event=> {
    const {value} = event.target
    setSearch(value)
    const filteredJokes = apiJokes.filter(ele => 
      !!ele.first_line &&
      ele.first_line.toLowerCase().includes(search.toLowerCase()))
    const filteredJokes2 = apiJokes.filter(ele => 
      !!ele.punchline &&
      ele.punchline.toLowerCase().includes(search.toLowerCase()))
    const newArray = new Set(filteredJokes.concat(filteredJokes2))
    console.log(newArray)
    
  }
  const handleSubmit = event=>{
    event.preventDefault()
  }
  

  return (
    <header className="home-header">
      <Link to="/">
      <div className="logo">
        <img src={logo}/> 
      </div>
      </Link>
      <SearchForm 
        search={search} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit}
      />
      {!!apiJokes &&
        apiJokes.map(joke=> {
        return (
          <Link key={joke.id} to={`/home/${joke.id}`}>
                {joke.name}
          </Link>
        )
      })}
    <div className="profile-logo">
        <img src={user}/>
      </div>
    </header>
  );
}

export default Header;