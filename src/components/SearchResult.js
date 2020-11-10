import React from 'react'
import "../styles/SearchResult.css";
import Avatar from '@material-ui/core/Avatar';

function SearchResult({type, thumbnail, videoTitle, views, timeStamp, channel, description}) {

    return (
        <div className="search-item">
        <div className={`thumbnail${type}`}>
            <img src={thumbnail} alt="thumbnail"/>
        </div>
            
            <div className="details">
                <h3>{videoTitle}</h3>
                <p className="gray small">{views} • {timeStamp}</p>
                <div className="channel">
                    <Avatar className="avatar"/>
                    <p className="gray small">{channel}</p>
                </div>
                <p className="gray">{description}</p>
            </div>
        </div>
    )
}

export default SearchResult
