import React from 'react';
import './Widgets.css';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

function Widgets() {
	return (
		<div className="widgets">
			<VideoCallIcon className="icons" />
			<AppsIcon className="icons" />
			<NotificationsIcon className="icons" />

			<Avatar className="profile" avatar={''} />
		</div>
	);
}

export default Widgets;
