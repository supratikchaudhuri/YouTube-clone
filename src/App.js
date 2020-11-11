// eslint-disable-next-line
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage"
import VideoPage from './pages/VideoPage';
import SearchedVideos from "./pages/SearchedVideos";
import {SearchContextProvider} from "./context/searchContext"
import TopBar from "./components/TopBar";

function App() {

	return (
		<SearchContextProvider>
		<BrowserRouter>

			<TopBar/>
			
			<Route exact path="/" component={HomePage}/>
			<Route exact path="/vid" component={VideoPage}/>
			<Route exact path="/search/:input" component={SearchedVideos}/>

		</BrowserRouter>
		</SearchContextProvider>
	);
}

export default App;
