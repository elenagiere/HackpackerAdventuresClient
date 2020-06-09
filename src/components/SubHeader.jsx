import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home.jsx';

class SubHeader extends React.Component {

	render () {
		const fill = (this.props.children !== null) ? this.props.children : <Home />;
		return (
			<div id="app">
				<div id="header">
					<h2 className="title">Hackpacker Adventures</h2>
					<Link className="header-link" to="/home">Home</Link>
					<Link className="header-link" to="/about">About</Link>
					<Link className="header-link" to="/trips">Trips</Link>
					<Link className="header-link" to="/Contact">Contact</Link>
					<Link className="header-link" to="/AddTripForm">Add a Trip</Link>

					<a href="http://www.instagram.com"><img src="../client/app/images/icons/instagram-icon-white.png" alt="Instagram" /></a>
					<a href="http://www.youtube.com"><img src="../client/app/images/icons/youtube-icon-white.png" alt="Youtube" /></a>
				</div>
				{fill}
			</div>
		);
	}
}

export default SubHeader;

SubHeader.propTypes = {
	children: PropTypes.node
};
