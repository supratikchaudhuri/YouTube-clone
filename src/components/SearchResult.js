import React from 'react'
import "../styles/SearchResult.css";
import Avatar from '@material-ui/core/Avatar';

function SearchResult({type, video, onVideoSelect}) {

    return (
        <div className="search-item" onClick={() => onVideoSelect(video)}>
        <div className={`thumbnail${type}`}>
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        </div>
            
            <div className="details">
                <h3>{video.snippet.title}</h3>
                <p className="gray small">{"123123"} • {video.snippet.publishedAt.substring(0, 10)}</p>
                <div className="channel">
                    <Avatar className="avatar"/>
                    <p className="gray small">{video.snippet.channelTitle}</p>
                </div>
                <p className="gray">{video.snippet.description.substring(0, 100) + "..."}</p>
            </div>
        </div>
    )
}

export default SearchResult
