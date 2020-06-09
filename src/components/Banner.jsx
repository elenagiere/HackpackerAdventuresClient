import React from 'react';
import PropTypes from 'prop-types';
import { publicImagePath } from '../Constants';

export default function Banner ({ imgName, altTag, size }) {

	return (
		<div id="banner">
			{/* <img className={`img-banner banner_${size}`} src={imgUrl} alt={altTag} /> */}
			<img src={`${publicImagePath}/${imgName}`} alt={altTag} className={`img-banner banner_${size}`} />

		</div>
	);
}

Banner.propTypes = {
	imgName: PropTypes.string.isRequired,
	altTag: PropTypes.string.isRequired,
	size: PropTypes.number
};

Banner.defaultTypes = {
	size: 16
}
