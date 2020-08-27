import React from 'react';
import './App.css';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import Hero from './Hero';

function App() {
	return (
		<div className="app">
			<TopBar />

			<div className="container">
				{/* SIDEBAR */}
				<Sidebar />
				{/* HERO */}
				<Hero />
			</div>
		</div>
	);
}

export default App;
