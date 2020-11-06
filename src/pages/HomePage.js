import React from "react";
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';

function HomePage() {
	return (
		
			<div className="homepage">
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

export default HomePage;
