import React from "react"
import AustinJokesList from "./AustinJokesList"
import JokeForm from "./AustinForm"

const AustinHome = props => {
    return (
        <div className="home-container1">
            <div className="home-container2">
                <div className="title-container">
                    <h1>dad jokes:</h1>
                    <h3 className="dad-text">a wholesome joke of the type said to be told by fathers with a punchline that is often an obvious or predictable pun or play on words and usually judged to be endearingly corny or unfunny </h3>
                </div>
                <JokeForm />
                <AustinJokesList />
            </div>
        </div>
    )
}

export default AustinHome