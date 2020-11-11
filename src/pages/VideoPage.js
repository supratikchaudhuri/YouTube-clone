import React, { useContext } from "react";
// import youtube from "../api/youtube";
// import TopBar from "../components/TopBar"
import VideoDetail from "../components/VideoDetail"
import VideoList from "../components/VideoList";
import {SearchContext} from "../context/searchContext"
import VideoPlayer from "../components/VideoPlayer";
import RelatedVideos from "../components/RelatedVideos";

function VideoPage() {
    return (
        <div className="video-page">
            <VideoPlayer/>
            <RelatedVideos/>
        </div>
    )
}

export default VideoPage


// const [suggestedVideos, setSuggestedVideos] = useState([]); 
    // const [selectedVideo, setSelectedVideo] = useState();
    // const yt_api = process.env.REACT_APP_YT_API_KEY;
    
    // const handleSearch = async (input) => {
    //     const response = await youtube.get("search", {
    //         params : {
    //             part: "snippet",
    //             maxResults : 5,
    //             key: yt_api,
    //             q : input
    //         }
    //     })
    //     setSuggestedVideos(response.data.items);
    //     setSelectedVideo(response.data.items[0]);
        
    // }

    // const onVideoSelect = (video) => {
    //     setSelectedVideo(video);
    // }

    // <Grid justify="center" container spacing={10}>
    //         <Grid item xs={12}>
    //             <Grid container spacing={10}>
    //                 {/* <Grid item xs={12}> */}
    //                     {/* search bar */}
    //                     {/* <TopBar handleSearch={handleSearch}/> */}
    //                 {/* </Grid> */}
    //                 <Grid item xs={8}>
    //                     {/* vid details */}
    //                     <VideoDetail video={selectedVideo}/>
    //                 </Grid>
    //                 <Grid item xs={4}>
    //                     {/* vid list */}
    //                     <VideoList list={suggestedVideos} onVideoSelect={onVideoSelect}/>
    //                 </Grid>
    //             </Grid>
    //         </Grid>
    //     </Grid>