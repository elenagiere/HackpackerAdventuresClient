import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner.jsx';
import { imagePath, textPath } from '../Constants.js';
import { readTextFile } from '../utils';

class Destination extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			text: ''
		};
	}

	componentDidMount () {
		readTextFile(this.props.match.params.textFile, (resp) => {
			this.setState({
					text: resp
			});
		});
	}

	render () {
		const { title, date, imgName, photoUrls } = this.props.params;

		const photoList = () =>
			photoUrls.split(',').map((url, i) => (<img key={i} className="sub-section" src={`${imagePath}/${url}`} alt="img" />));


		return (
			<div id="destination" className="sub-page">
				<Banner imgUrl={`${imagePath}/${imgName}`} altTag={title} />
				<div className="content">
					<div className="card-section destination main-bar">
						<div className="trip-header sub-section dest-section">
							<h1>{title}</h1>
							<p>{date}</p>
						</div>
						<div className="category-icons sub-section">
							<a href="#photos"><img src={`${imagePath}/icons/imgIcon.svg`} alt="visuals" /></a>
							<a href="#summary"><img src={`${imagePath}/icons/infoicon.svg`} alt="info" /></a>
							<a href="#expenses"><img src={`${imagePath}/icons/dollarIcon.svg`} alt="expenses" /></a>
						</div>
						<div className="summary-section sub-section dest-section">
							<h2 id="summary">Summary</h2>
							<div className="trip-text">{this.state.text}</div>
						</div>
						<div className="expenses-section sub-section dest-section">
							<h2 id="expenses">Expenses</h2>
							<div className="trip-expenses">
								<div className="expense-image">
									<img src={`${imagePath}/nzExpenses.png`} alt="breakdown of expenses" />
								</div>
								<p>{this.state.text}</p>
							</div>
						</div>
					</div>
					<div id="photos" className="nav-bar destination sub-section">
						{photoList()}
					</div>
				</div>
			</div>
		);
	}
}

export default Destination;


Destination.propTypes = {
	params: PropTypes.node.isRequired
};
