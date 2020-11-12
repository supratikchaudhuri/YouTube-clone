import React from 'react';
import "../styles/RelatedVideos.css";
import VideoItem from "./VideoItem";
import { Redirect } from 'react-router-dom';

function RelatedVideos( {suggestedVideos, onVideoSelect} ) {

    if(!suggestedVideos){
        return <div>RelatedVideo.js Loading...</div>
    }

    const renderRelatedVideos = () => {
        return (
            suggestedVideos.map(video => {
                return (
                    <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect}/>
                )
            })
        )
    }

    return (
        <div className="related-videos">
            {renderRelatedVideos()}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default RelatedVideos
