import React from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/HomePage"
import VideoPage from './pages/VideoPage';
function App() {
	return (
		<BrowserRouter>
			
			<Route exact path="/" component={HomePage}/>
			<Route exact path="/vid" component={VideoPage}/>

		</BrowserRouter>
	);
}

export default App;
