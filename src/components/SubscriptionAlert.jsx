import React from 'react';

class SubscriptionAlert extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			text: ''
		};
	}

	generateErrorMsg = (error) => {
		switch (error.type) {
			case 'Member Exists':
				return 'You\'re already subscribed.';
			default:
				return 'We could not process your subscription request.';
		}
	}

	render() {
		const { alertType, error } = this.props;
		const alertContent = (alertType === 'success') ? (
			<h3 className="success-text">Thank you for subscribing!</h3>
		) : (
			<h3 className="error-text">{this.generateErrorMsg(error)}</h3>
		);

		return (
			<div id="subscription-alert" className={`alert-${alertType}`}>
				{alertContent}
			</div>
		);
	}
}

export default SubscriptionAlert;
