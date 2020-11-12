import React, { useContext } from "react";
import {SearchContext} from "../context/searchContext"
import VideoPlayer from "../components/VideoPlayer";
import RelatedVideos from "../components/RelatedVideos";

function VideoPage() {

    const {suggestedVideos, selectedVideo, onVideoSelect} = useContext(SearchContext);

    return (
        <div className="video-page">
            <VideoPlayer selectedVideo={selectedVideo}/>
            <RelatedVideos suggestedVideos={suggestedVideos} onVideoSelect={onVideoSelect}/>
        </div>
    )
}

export default VideoPage

