import React, { useContext } from 'react';
import '../styles/Video.css';
import { Avatar } from '@material-ui/core';
import { SearchContext } from "../context/searchContext"
import { Link } from 'react-router-dom';

const linkStyle = {
	textDecoration : "none",
}

function Video({ avatar, thumbnail, title, chanel, views, timeStamp }) {
	const imgUrl = { thumbnail };

	const thumbnailDiv = {
		background: 'url(' + imgUrl.thumbnail + ') center no-repeat',
		backgroundSize: 'cover', 
		width: '290px',
		height: '180px'
	};

	const {handleSearch} = useContext(SearchContext);

	return (
		<Link to="/vid" style={linkStyle}>
			<div className="video" onClick={() => handleSearch(`${title} ${chanel}`)}>
				<div className="thumbnail" style={thumbnailDiv} />
				<div className="video-description">
					<Avatar className="avatar" src={avatar} />
					<div className="description">
						<h5 className="title">{title}</h5>
						<p className="chanel-views">{chanel}</p>
						<p className="chanel-views">
							{views} • {timeStamp}
						</p>
					</div>
				</div>
			</div>
		</Link>
		
	);
}

export default Video;
