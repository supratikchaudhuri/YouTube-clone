import React from 'react';
import "../styles/VideoPlayer.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function VideoPlayer({selectedVideo}) {

    if(!selectedVideo){
        return <div>VideoPlayer.js Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return (
        <div  className="video-player">
            <iframe width="940" height="500" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h3>{selectedVideo.snippet.title}</h3>
            <div className="extra">
                <p>Views • {selectedVideo.snippet.publishedAt.substring(0, 10)}</p>

                <div className="widgets">
                    <ThumbUpIcon className="icon"/>
                    <ThumbDownIcon className="icon"/>
                    <div className="alignment"><ShareIcon className="icon"/>SHARE</div>
                    <div className="alignment"><PlaylistAddIcon className="icon"/>SAVE</div>
                    <MoreHorizIcon className="icon"/>
                </div>

            </div>
        </div>
    )
}

export default VideoPlayer
