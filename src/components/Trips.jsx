import React from 'react';
import Posts from './Posts.jsx';
import Banner from './Banner.jsx';
// import { imagePath } from '../Constants.js';
import tripsBanner from '../static/images/NZQueens_opt.jpg';
// import MainHeader from './MainHeader.jsx';

export default function Trips () {
	return (
		<div id="trips-page" className="sub-page">
			{/* <MainHeader /> */}
			{/* <Banner imgUrl={`${imagePath}/NZQueens.jpg`} altTag="explore Queenstown" /> */}
			<div id="banner">
			    <img className='img-banner' src={tripsBanner} alt='health banner' />
		    </div>
			<div className="trip-type-icons" />
			<Posts />
		</div>
	);
}
