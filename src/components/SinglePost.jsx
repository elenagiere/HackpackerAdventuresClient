import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { publicImagePath } from '../Constants.js';

class SinglePost extends React.Component {

	render () {
		const { id, title, date, imgName, photoUrls, textFile, summaryText, expenseImage, videoId, enableComments } = this.props;

		return (
			<Link id="single-post" to={`/destination/${id}/${title}/${date}/${imgName}/${photoUrls}/${textFile}/${summaryText}/${expenseImage}/${videoId}/${enableComments}`}>
				{/* <img src={publicImagePath/${imgName}`} alt={title} className="hover" />; */}
				<img src={`${publicImagePath}/${imgName}`} alt={title} className="hover" />
				<div className="text">
					<h2>{title}</h2>
					<p>{summaryText}</p>
				</div>
			</Link>
		);
	}
}

export default SinglePost;


SinglePost.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	imgName: PropTypes.string.isRequired,
	photoUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
	textFile: PropTypes.string.isRequired,
	summaryText: PropTypes.string.isRequired,
	expenseImage: PropTypes.string,
	videoId: PropTypes.string
};
