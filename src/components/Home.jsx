// import React from 'react';
// // import Favicon from 'react-favicon';
// import SinglePost from './SinglePost.jsx';
// import Banner from './Banner.jsx';
// import { imagePath } from '../Constants.js';
// import tripData from '../tripData.js';

// export default function Home () {

// 	const latestPosts = () =>
// 		tripData.map((aPost, i) => {
// 			console.log(aPost);
// 			return (<SinglePost key={i} title={aPost.title} date={aPost.date} imgName={aPost.imgName} photoUrls={aPost.photoUrls} textFile={aPost.textFile} summaryText={aPost.summaryText} videoId={aPost.videoId} />);
// 		});

// 	return (
// 		<div id="home-page" className="sub-page">
// 			{/* <Favicon url={`${imagePath}/favicon.ico`} /> */}
// 			<div className="content">
// 				<div className="card-section destination main-bar">
// 					<h2 className="cards-header">Most Recent Blog Posts</h2>
// 					<div className="card-list">
// 						{latestPosts()}
// 					</div>
// 				</div>
// 				{/* <div className="nav-bar home sub-section">
// 					<div className="social-media-header">
// 						<a href="https://www.instagram.com/hack_packers/" target="_blank" rel="noopener noreferrer"><img src={`${imagePath}/icons/instagram-icon-white.png`} alt="Instagram" /></a>
// 						<a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={`${imagePath}/icons/youtube-icon-white.png`} alt="Youtube" /></a>
// 					</div>
// 					<h3>About Us</h3>
// 					<div className="location">
// 						<img className="red-pin-icon" src={`${imagePath}/icons/red_pin.png`} alt="location pin" />
// 						<p className="location-text">San Jose, CA</p>
// 					</div>
// 					<p>We are Luke and Elena and love to travel. We are currently based out of San Jose, CA.</p>
// 					<img className="nav-bar-img" src={`${imagePath}/caboHammock.jpg`} alt="Luke & Elena" />
// 				</div> */}
// 			</div>
// 		</div>
// 	);
// }
