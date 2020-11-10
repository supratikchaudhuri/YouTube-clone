import React, { useState, useContext } from 'react';
import '../styles/Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { SearchContext } from "../context/searchContext"

function Searchbar() {

	const [input, setInput] = useState("");
	const { handleSearch } = useContext(SearchContext);
	
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
