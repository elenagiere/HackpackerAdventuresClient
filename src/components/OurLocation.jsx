import React from 'react';
import { FaMapPin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class OurLocation extends React.Component {

	render() {
		return (
            <div id="our-location">
                <Link to="/map">
                    <span>Current Location</span>
                    <FaMapPin />
                    <span>Indiana, USA</span>
                </Link>
            </div>
		);
	}
}

export default OurLocation;
