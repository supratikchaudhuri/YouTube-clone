import React from 'react'
import "../styles/VideoItem.css"
import { Redirect } from 'react-router-dom';

function VideoItem({video, onVideoSelect}) {
  if(!video){
    return <div>VideoItem.js Loading...</div>
  }
  else{
    return (
      <div className="video-item" onClick={() => onVideoSelect(video)}>
        <div className="thumbnail">
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        </div>
        <div className="details">
            <h4>{video.snippet.title.substring(0, 50)}</h4>
            <p>{video.snippet.channelTitle}</p>        
            <p>views  •  {video.snippet.publishedAt.substring(0, 10)}</p>        
        </div>
      </div>
    )
  }
}
  

export default VideoItem

