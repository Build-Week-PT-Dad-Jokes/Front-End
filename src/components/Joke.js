import React, {useState, useEffect} from "react"
import {BookmarkBorder, Bookmark, Share, Facebook, Twitter, ChatBubble} from '@material-ui/icons/';

const Joke = ({joke}) => {
    
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [isSharing, setIsSharing] = useState(false)

    useEffect(()=> {
        window.addEventListener('click', e=> {
            // if(setIsSharing) setIsSharing(false)
        })
    }, [])
    const bookmark = event => {
        setIsBookmarked(!isBookmarked)
    }
    const share = event => {
        setIsSharing(true)
    }
    return (
        
        <div className="joke-card">
            <div className="icon-flex-container">
                <p>{!!joke.first_line && joke.first_line}</p>
                <div onClick={bookmark} className="bookmark-button">
                    {isBookmarked ? <Bookmark fontSize="large"/> : <BookmarkBorder fontSize="large"/>}
                    </div>
            </div>
            <p className="second-part">{!!joke.punchline && joke.punchline}</p>
            <div className="icon-flex-container">
                <p>Rating: {joke.rating}</p>
                {!isSharing ? 
                    <div onClick={share} className="share-button">
                        <Share fontSize="large"/>
                    </div> :
                    <div className="share-icons">
                        <div className="twitter"><Twitter fontSize="large"/></div>
                        <div className="facebook"><Facebook fontSize="large"/></div>
                        <div className="chat"><ChatBubble fontSize="large"/></div>
                    </div> }
                
            </div>

           
        </div>
    )
}

export default Joke