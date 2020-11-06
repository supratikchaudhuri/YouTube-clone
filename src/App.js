import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';

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
