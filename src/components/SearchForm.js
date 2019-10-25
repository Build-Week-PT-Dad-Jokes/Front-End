import React from "react";

export default function SearchForm(props) {
 
  return (
    <div className="search-form">
     <form onSubmit={props.handleSubmit}>
       <input 
          className="search-box"
          type="text"
          name="search"
          value={props.search}
          onChange={props.handleChange}
          placeholder= " Search"
      />
     </form>
    </div>
  );
}