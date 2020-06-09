import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { imagePath } from '../Constants.js';
import { publicImagePath } from '../Constants.js';

class LongCard extends React.Component {

	render () {
		const { id, title, date, imgName, photoUrls, textFile, summaryText, expenseImage, videoId, enableComments } = this.props;


		return (
            <div id="long-card">
                {/* <img src={`${imagePath}/${imgName}`} alt={title} className="hover" /> */}
				<img src={`${publicImagePath}/${imgName}`} alt={title} className="hover" />
                <div className="text">
                    <div className="text-box">
						<h2>{title}</h2>
						<p>{summaryText}</p>
						<Link to={`/destination/${id}/${title}/${date}/${imgName}/${photoUrls}/${textFile}/${summaryText}/${expenseImage}/${videoId}/${enableComments}`}>
							<button>Read More</button>
						</Link>
					</div>
                </div>
            </div>
		);
	}
}

export default LongCard;

LongCard.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string,
	imgName: PropTypes.string.isRequired,
	photoUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
	textFile: PropTypes.string.isRequired,
	summaryText: PropTypes.string.isRequired,
	expenseImage: PropTypes.string,
	videoId: PropTypes.string
};
