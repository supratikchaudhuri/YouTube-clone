import React from 'react';
import './Video.css';
import { Avatar } from '@material-ui/core';

function Video({ avatar, thumbnail, title, chanel, views, timeStamp }) {
	const imgUrl = { thumbnail };
	//console.log(imgUrl.thumbnail);

	const thumbnailDiv = {
		background: 'url(' + imgUrl.thumbnail + ') center no-repeat',
		backgroundSize: 'cover',
		width: '290px',
		height: '180px'
	};
	console.log(thumbnailDiv);

	return (
		<div className="video">
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
	);
}

export default Video;
