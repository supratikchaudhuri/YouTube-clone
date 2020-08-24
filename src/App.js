import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Hero from './Hero';

function App() {
	return (
		<div className="app">
			{/* SIDEBAR */}
			<Sidebar />
			{/* HERO */}
			<Hero />
		</div>
	);
}

export default App;
