import React, {useState} from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import MessageIcon from "@material-ui/icons/Message"
import ShareIcon from "@material-ui/icons/Share"
import UploadIcon from "@material-ui/icons/CloudUpload"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Upload from "./Upload"

function VideoSidebar({likes, messages, shares}) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <Router>
                <Route path="/Upload" exact component={Upload}/>
            </Router>
            <div className="videoSidebar__button">
                <form>
                    <UploadIcon fontSize="large"/>
                    <p>Upload</p>
                </form>
            </div>
            <div className="videoSidebar__button">
                {liked ? (
                <FavoriteIcon fontSize="large" className="videoSidebar__like_color"
                onClick= {(e) => setLiked(false)}/>
                ): (
                    <FavoriteBorderIcon fontSize="large"
                    onClick= {(e) => setLiked(true)}/>
                )}
                <p>{liked? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
