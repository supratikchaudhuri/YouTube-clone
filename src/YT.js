import React from 'react';
import './YT.css';
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';

function YT() {
	return (
		<div className="YT">
			<MenuIcon className="icon" />
			<div className="yt">
				<YouTubeIcon className="icon" />
				<h2>YouTube</h2>
			</div>
		</div>
	);
}

export default YT;
