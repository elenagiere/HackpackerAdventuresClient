import React from 'react';
import tripData from '../tripData.js';
// import Banner from './Banner.jsx';
import { publicImagePath } from '../Constants.js';
import photoBanner from '../static/images/MtFuji_opt.jpg';

export default function Photography() {

	const allPhotos = () =>
		tripData.map(aPost => {
			console.log(aPost.title);
			return (
				<div key={aPost.id} className="single-photo">
					<img src={`${publicImagePath}/${aPost.imgName}`} alt={aPost.title} />
				</div>
			);
		});

	return (
		<div id="photography-page" className="sub-page">
			{/* <Banner imgUrl={`${imagePath}/MtFuji.jpg`} altTag="Mt Fuji" /> */}
			<div id="banner">
				<img className='img-banner' src={photoBanner} alt='Hiking in Lake Tahoe' />
			</div>
			<div className="card-section">
				<h2 className="cards-header">Photography</h2>
				<div className="card-list">
					{allPhotos()}
				</div>
			</div>
		</div >
	);
}
