import React from 'react';
import Banner from './Banner.jsx';
import { publicImagePath } from '../Constants.js';

class Contact extends React.Component {

	render () {
		return (
			<div id="contact" className="sub-page">
				<Banner imgUrl={`${publicImagePath}/northCascades.jpg`} altTag="North Cascades" />
			</div>
		);
	}
}

export default Contact;
