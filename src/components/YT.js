import React from 'react';
import '../styles/YT.css';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from 'react-router-dom';

const linkStyle = {
	textDecoration : "none",
}

function YT() {
	return (
		<Link to="/" style ={linkStyle}>
		<div className="YT">
			<MenuIcon className="icon" />
			<div className="yt">
				<YouTubeIcon className="icon" />
				<h2>YouTube</h2>
			</div>
		</div>
		</Link>
	);
}

export default YT;
