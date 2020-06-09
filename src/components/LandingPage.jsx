import React from 'react';
import Header from './Header.jsx';
import LongCard from './LongCard.jsx';
import OurLocation from './OurLocation.jsx';
// import UpperEmailPrompt from './UpperEmailPrompt.jsx';
import landingPageImage from '../static/images/philippinesWithText_opt.jpg';
import tripData from '../tripData.js';
import aboutUsData from '../aboutUsData.js';
import Iframe from 'react-iframe';

class LandingPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: true,
		};
	}

	onToggle() {
		this.setState({ 'isModalOpen': !this.state.isModalOpen });
	}

	render() {
		const getLatestPost = () => {
			const latestPost = tripData[tripData.length - 1];
			return (<LongCard key={latestPost.id} id={latestPost.id} title={latestPost.title} date={latestPost.date} imgName={latestPost.imgName} photoUrls={latestPost.photoUrls} textFile={latestPost.textFile} summaryText={latestPost.summaryText} expenseImage={latestPost.expenseImage} videoId={latestPost.videoId} enableComments={latestPost.enableComments} />);
		}

		const getAboutUsPost = () => {
			const aboutPost = aboutUsData[0];
			return (<LongCard key={aboutPost.id} id={aboutPost.id} title={aboutPost.title} date={aboutPost.date} imgName={aboutPost.imgName} photoUrls={aboutPost.photoUrls} textFile={aboutPost.textFile} summaryText={aboutPost.summaryText} expenseImage={aboutPost.expenseImage} videoId={aboutPost.videoId} enableComments={aboutPost.enableComments} />);
		}

		return (
			<div id="home-page" className="sub-page">
				<OurLocation></OurLocation>
				<img className="landing-page-image" src={landingPageImage} alt="El Nido" />
				{/* <UpperEmailPrompt className="upper-email-prompt"></UpperEmailPrompt> */}
				<h2 className="latest-post-header">Our Latest Post</h2>
				{getLatestPost()}
				<Header></Header>
				{/* {this.state.isModalOpen ? <Modal toggle={this.onToggle.bind(this)}></Modal> : null } */}
				{getAboutUsPost()}
				{/* EmbedYoutubeChannel */}
				<Iframe url="https://www.youtube.com/embed?listType=playlist&list=PL0zkArPPLLPy1lbhFw2pNZzqyj8psaSde"
					id="youtube-channel"
					className="youtube-channel"
					display="initial"
					position="relative" />
			</div>
		);
	}
}

export default LandingPage;

// LandingPage.propTypes = {
// 	toggle: PropTypes.func.isRequired
// };
