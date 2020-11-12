import React, { useState, useContext, useRef } from 'react';
import '../styles/Searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
import { SearchContext } from "../context/searchContext"
import { Link } from 'react-router-dom';

function Searchbar() {

	const [input, setInput] = useState("");
	const { handleSearch } = useContext(SearchContext);

	const searchRef = useRef(null);

	const handleClick = () => {
		handleSearch(input);
		setInput("");
	}

	const handleKeyDown = e => {
		if(e.key === "Enter"){
			searchRef.current.click();
		}
	}

	return (
			<div className="searchbar">
				<input className="search-input" placeholder="Search" onChange={e => setInput(e.target.value)} value={input}  onKeyDown={handleKeyDown}/>
				<Link to={`/search/${input}`}  onClick={handleClick}  innerRef={searchRef}>
				<SearchIcon className="icon"/>
				</Link>
			</div>
	);
}

export default Searchbar;
