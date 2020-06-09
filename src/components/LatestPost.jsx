// import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { imagePath, textPath } from '../Constants.js';
// import { readTextFile } from '../utils';

// class LatestPost extends React.Component {

// 	constructor (props) {
// 		super(props);

// 		this.state = {
// 			text: ''
// 		};
// 	}


// componentDidMount () {
//     readTextFile(this.props.textFile, (resp) => {
//         this.setState({
//                 text: resp
//         });
//     });
// }

// 	render () {
// 		const { title, date, imgName, photoUrls, textFile } = this.props;

// 		return (
// 			<Link to={`/destination/${title}/${date}/${imgName}/${photoUrls}/${textFile}`}>
// 				<div id="panel" className="sub-section">
// 					<img src={`${imagePath}/${imgName}`} alt={title} />
// 				</div>
// 			</Link>
// 		);
// 	}
// }

// export default LatestPost;


// LatestPost.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	date: PropTypes.string.isRequired,
// 	imgName: PropTypes.string.isRequired,
// 	photoUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
// 	textFile: PropTypes.string.isRequired
// };
