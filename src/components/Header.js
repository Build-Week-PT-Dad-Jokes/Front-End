import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import user from '../img/user.png';

function Header() {
  return (
    <header className="home-header">
      <Link to="/">
      <div className="logo">
        <img src={logo}/> 
      </div>
      </Link>
      <section className="search-form">
      <form>
       <input 
          className="search-box"
          type="text"
          name="search"
          placeholder="     Search"
        />
      </form>
    </section>
    <div className="profile-logo">
        <img src={user}/>
      </div>
    </header>
  );
}

export default Header;