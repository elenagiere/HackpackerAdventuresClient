import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home.jsx';
import { FaHome, FaCamera, FaDollarSign, FaBookReader, FaRunning, FaMapMarkedAlt } from 'react-icons/fa';

class Header extends React.Component {

	render () {
		const options = [
  			'About', 'Trips', 'Photography'
		];

		const fill = (this.props.children !== null) ? this.props.children : <Home />;
		return (
			<div id="app">
				<div className="header">
					<Link id="subject-link" to="/trips">
						<div className="icon-row">
							<FaBookReader />
						</div>
						<div className="text">
							<h3>Trips</h3>
							<p>Read about our travels</p>
						</div>
					</Link>
					<Link id="subject-link" to="/photos">
						<div className="icon-row">
							<FaCamera />
						</div>
						<div className="text">
							<h3>Photos</h3>
							<p>View our captured shots</p>
						</div>
					</Link>
					{/* <Link id="subject-link" to="/expenses">
						<div className="icon-row">
							<FaDollarSign />
						</div>
						<div className="text">
							<h3>Expenses</h3>
							<p>Travel finances</p>
						</div>
					</Link> */}
					<Link id="subject-link" to="/map">
						<div className="icon-row">
							<FaMapMarkedAlt />
						</div>
						<div className="text">
							<h3>Map</h3>
							<p>See our travel path</p>
						</div>
					</Link>
					<Link id="subject-link" to="/health">
						<div className="icon-row">
							<FaRunning />
						</div>
						<div className="text">
							<h3>Health & Fintess</h3>
							<p>Healthy travel habits </p>
						</div>
					</Link>
				</div>
				{fill}
			</div>
		);
	}
}

export default Header;

Header.propTypes = {
	children: PropTypes.node
};
