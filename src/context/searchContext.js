import React, { useState, createContext } from 'react';
import youtube from "../api/youtube"

export const SearchContext = createContext();

export const SearchContextProvider = (props) => {
    const [suggestedVideos, setSuggestedVideos] = useState([]); 
    const [selectedVideo, setSelectedVideo] = useState();
    const yt_api = process.env.REACT_APP_YT_API_KEY;

    const handleSearch = async (input) => {
        const response = await youtube.get("search", {
            params : {
                part: "snippet",
                maxResults : 5,
                key: yt_api,
                q : input
            }
        })
        setSuggestedVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }
    
    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <SearchContext.Provider value = {{suggestedVideos, selectedVideo, handleSearch, onVideoSelect}}>
            {props.children}
        </SearchContext.Provider>
    )
}

