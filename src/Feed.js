import React from 'react';
import './Feed.css';
import Video from './Video';
import VideoDetails from './VideoDetails';

function Vid(VideoDetails) {
	return (
		<Video
			avatar={VideoDetails.avatar}
			thumbnail={VideoDetails.thumbnail}
			title={VideoDetails.title}
			chanel={VideoDetails.chanel}
			views={VideoDetails.views}
			timeStamp={VideoDetails.timeStamp}
		/>
	);
}

function Feed() {
	return <div className="feed">{VideoDetails.map(Vid)}</div>;
}

export default Feed;
