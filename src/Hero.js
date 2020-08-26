import React from 'react';
import './Hero.css';
import TopBar from './TopBar';
import Feed from './Feed';

function Hero() {
	return (
		<div className="hero">
			<TopBar />
			<Feed />
		</div>
	);
}

export default Hero;
