import React from 'react';
import './TopBar.css';
import YT from './YT';
import Searchbar from './Searchbar';
import Widgets from './Widgets';

function TopBar() {
	return (
		<div className="topbar">
			<YT />
			<Searchbar />
			<Widgets />
		</div>
	);
}

export default TopBar;
