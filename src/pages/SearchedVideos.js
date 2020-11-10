import React, { useContext } from 'react'
import Sidebar from "../components/Sidebar"
import SearchResult from "../components/SearchResult";
import {SearchContext} from "../context/searchContext";

function SearchedVideos() {
    
    const {suggestedVideos} = useContext(SearchContext);

    const renderSuggestedVideos = () => {
        return (
            // if(snippet.id.kind === "youtube#channel")    show small circular thumbnail
            suggestedVideos.map(video => {
                return (
                    <SearchResult
                        key = {video.etag} 
                        type = {video.id.kind === "youtube#channel" ? "channel" : ""}
                        thumbnail = {video.snippet.thumbnails.medium.url}
                        videoTitle = {video.snippet.title}
                        views = {"1mil"}
                        timeStamp = {video.snippet.publishedAt.substring(0, 10)}
                        channel = {video.snippet.channelTitle}
                        description = {video.snippet.description.substring(0, 100) + "..."}
                    />
                )
            })
        )
    }

    return (
        <div className="homepage">
			<div className="container">
				{/* SIDEBAR */}
				<Sidebar />
				{/* Searched item */}
                <div className="searched-result">
                    {renderSuggestedVideos()}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
			</div>
		</div>
    )
}

export default SearchedVideos
