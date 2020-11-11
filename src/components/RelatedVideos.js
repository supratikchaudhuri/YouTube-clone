import React, { useContext } from 'react';
import { SearchContext } from '../context/searchContext';
import "../styles/RelatedVideos.css";
import VideoItem from "./VideoItem";

function RelatedVideos() {

    const {suggestedVideos} = useContext(SearchContext);
    console.log(suggestedVideos);

    const renderRelatedVideos = () => {
        return (
            suggestedVideos.map(video => {
                return (
                    <VideoItem key={video.etag} video={video}/>
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
