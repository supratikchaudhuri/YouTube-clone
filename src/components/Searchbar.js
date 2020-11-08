import React, { useState } from 'react';
import '../styles/Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';

function Searchbar({handleSearch}) {

	const [input, setInput] = useState("");

	return (
		<form onSubmit={() => handleSearch(input)}>
			<div className="searchbar">
				
				<input className="search-input" placeholder="Search" onChange={e => setInput(e.target.value)} value={input}/>
				<SearchIcon className="icon" onClick={() => handleSearch(input)}/>
				
			</div>
		</form>
	);
}

export default Searchbar;
