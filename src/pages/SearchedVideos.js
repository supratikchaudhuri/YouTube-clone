import React, { useContext } from 'react'
import Sidebar from "../components/Sidebar"
import SearchResult from "../components/SearchResult";
import {SearchContext} from "../context/searchContext";
import { Link } from 'react-router-dom';

const linkStyle = {
	textDecoration : "none",
}

function SearchedVideos() {
    
    const {suggestedVideos, onVideoSelect} = useContext(SearchContext);

    const renderSuggestedVideos = () => {
        return (
            // if(snippet.id.kind === "youtube#channel")    show small circular thumbnail
            suggestedVideos.map(video => {
                return (
                    <Link to="/vid" key = {video.etag} style={linkStyle}>
                    <SearchResult
                        type = {video.id.kind === "youtube#channel" ? "channel" : ""}
                        video={video}
                        onVideoSelect={onVideoSelect}
                    />
                    </Link>
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
