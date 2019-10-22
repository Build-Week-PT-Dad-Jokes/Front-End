import React, {useEffect, useState} from "react"
import Joke from "./Joke"
import axios from "axios";
import Button from "@material-ui/core/button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize: "2.4rem"
  }
}));

const JokesList = props => {

    //placeholder state with test joke objects
    const [jokeList, setJokeList] = useState([])
    const classes = useStyles();
    const { history } = props;

    useEffect(() => {
        axios
          .get(`https://dadjokesbw.herokuapp.com/api/jokes`)
          .then(response => {
            console.log(response);
            setJokeList(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
        
    return (
        <div className="jokes-container">
          <div className="joke-of-the-day">
              <p>Joke of the Day: This is a placeholder joke</p>
          </div>
            <div className="add-joke-button">
            <Button
              className={classes.button}
              onClick={e => {
                e.preventDefault();
                history.push("/signup");
              }}
            ></Button> 
            </div>
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