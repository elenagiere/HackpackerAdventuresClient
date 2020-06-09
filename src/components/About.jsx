import React from 'react';
// import Banner from './Banner.jsx';
// import { imagePath, textPath } from '../Constants.js';
import aboutBanner from '../static/images/caboHammock_opt.jpg';
import ReactMarkdown from 'react-markdown';

class About extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			text: '',
			markdown: null,
		}
	}

	componentDidMount() {
		fetch(require(`../static/markdown/aboutus.md`))
			.then(response => {
				console.log('markdown fetch response');
				console.log(response);
				return response.text();
			})
			.then(text => {
				this.setState({
					markdown: text,
				})
			}).catch((err) => {
				console.log('markdown fetch error');
				console.log(err);
			});
	}

	render() {
		return (
			<div id="about-page" className="sub-page">
				{/* <Banner imgUrl={`${imagePath}/caboHammock.jpg`} altTag="explore Lake Tahoe" /> */}
				<div id="banner">
					<img className='img-banner' src={aboutBanner} alt='Hiking in Lake Tahoe' />
				</div>
				<div className="text-content">
					<h2 className="cards-header">Our Story</h2>
					<div className="summary-section">
						<div className="text">
							<ReactMarkdown source={this.state.markdown} escapeHtml={false} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
