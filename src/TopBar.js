import React from 'react';
import './TopBar.css';
import Searchbar from './Searchbar';
import Widgets from './Widgets';

function TopBar() {
	return (
		<div className="topbar">
			<Searchbar />
			<Widgets />
		</div>
	);
}

export default TopBar;
