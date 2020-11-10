import React from "react";
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';

function HomePage() {
	return (
		
			<div className="homepage">
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
