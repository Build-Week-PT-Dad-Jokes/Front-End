import React, {useEffect, useState} from "react"
import axios from "axios";

const Joke = ({joke}) => {

    const [jokes, setJokes] = useState([])

    useEffect(() => {
        axios
          .get(`https://icanhazdadjoke.com`)
          .then(response => {
            console.log(response);
            setJokes(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);

    return (
        <div className="joke-card">
            <p>{joke.joke}</p>
            <p className="second-part">{!!joke.secondLine && joke.secondLine}</p>
            <p>Rating: {joke.rating}</p>
        </div>
    )
}

export default Joke