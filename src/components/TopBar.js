import React from 'react';
import '../styles/TopBar.css';
import YT from './YT';
import Searchbar from './Searchbar';
import Widgets from './Widgets';

function TopBar({handleSearch}) {
	return (
		<div className="topbar">
			<YT />
			<Searchbar handleSearch={handleSearch}/>
			<Widgets />
		</div>
	);
}

export default TopBar;
