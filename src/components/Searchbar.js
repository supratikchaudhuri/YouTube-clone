import React, { useState, useContext } from 'react';
import '../styles/Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { SearchContext } from "../context/searchContext"
import { Link } from 'react-router-dom';

function Searchbar() {

	const [input, setInput] = useState("");
	const { handleSearch } = useContext(SearchContext);

	return (
			<div className="searchbar">
				<input className="search-input" placeholder="Search" onChange={e => setInput(e.target.value)} value={input}/>
				<Link to={`/search/${input}`}  onClick={() => handleSearch(input)}>
				<SearchIcon className="icon"/>
				</Link>
			</div>
	);
}

export default Searchbar;
