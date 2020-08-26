import React from 'react';
import './Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';

function Searchbar() {
	return (
		<div className="searchbar">
			<input className="search-input" placeholder="Search" />
			<SearchIcon className="icon" />
		</div>
	);
}

export default Searchbar;
