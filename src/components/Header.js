import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import user from '../img/user.png';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { setSearchResponse, endSearch } from '../actions';

function Header(props) {
  const { apiJokes, endSearch, setSearchResponse } = props;
  const [search, setSearch] = useState('')

  const handleChange = event=> {
    const {value} = event.target;
    setSearch(value);
    
    if (search.length < 2) {
      endSearch();
    } else {
      const filteredJokes = apiJokes.filter(ele => 
        !!ele.first_line &&
        ele.first_line.toLowerCase().includes(search.toLowerCase()))
      const filteredJokes2 = apiJokes.filter(ele => 
        !!ele.punchline &&
        ele.punchline.toLowerCase().includes(search.toLowerCase()))
      const newArray = new Set(filteredJokes.concat(filteredJokes2))
      // console.log(newArray)
      setSearchResponse(newArray)
    }

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

const mapStateToProps = ({ jokesReducer: { jokes } }) => ({
  apiJokes: jokes
})

export default connect(mapStateToProps, { setSearchResponse, endSearch })(Header);