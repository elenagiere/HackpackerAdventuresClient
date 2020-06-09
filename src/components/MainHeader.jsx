import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home.jsx';
import { publicImagePath } from '../Constants.js';
import { FaBars } from 'react-icons/fa';

class MainHeader extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showMenu: false,
		};
	}

	onClick() {
		this.setState({ 'showMenu': !this.state.showMenu });
	}

	handleBlur = (e) => {
		// firefox onBlur issue workaround
		console.log('handleBlur');
		if (e.nativeEvent.explicitOriginalTarget &&
			e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
			return;
		}

		if (this.state.showMenu) {
			setTimeout(() => {
				this.setState({ showMenu: false });
			}, 200);
		}
	}


	render() {
		const subjects = [
			'About',
			'Trips',
			'Photos',
			'Map',
			'Health'
		];

		const { options } = this.props;

		const optionList = () =>
			subjects.map((subject, i) => (
				<Link className="single-option" key={`mainTab-${i}`} to={`/${subject}`}>
					<span className="option-link">
						{subject}
					</span>
				</Link>
			));

		const mainTabs = () =>
			subjects.map((subject, i) => {
				return (<Link className="header-link" key={`mainTab-${i}`} to={`/${subject}`}>{subject}</Link>);
			});

		const fill = (this.props.children !== null) ? this.props.children : <Home />;
		return (
			<div id="mainHeader">
				<div className="main-header">
					<div className="left-section">
						<button id="dropdown" onClick={this.onClick.bind(this)} onBlur={this.handleBlur}>
							<FaBars />
						</button>
					</div>
					<img className="logo" src={`${publicImagePath}backpack_icon.png`} alt="logo" />
					<Link className="title" key="0" to="/home">Hackpacker Adventures</Link>
					{mainTabs()}
				</div>
				<div id="mobileMenu" className="mobile-menu-options" tabIndex="0" >
					{(this.state.showMenu) ? optionList() : null}
				</div>
				{fill}
			</div>
		);
	}
}

export default MainHeader;

MainHeader.propTypes = {
	children: PropTypes.node
};