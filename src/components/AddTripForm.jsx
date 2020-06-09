import React from 'react';
import Banner from './Banner.jsx';
import { publicImagePath } from '../Constants.js';
// import ExpenseForm from './ExpenseForm.jsx';
// import $ from 'jquery';
// import { NOTIFICATION, UI_OPERATIONS } from '../Constants';

export default class AddTripForm extends React.Component {

	// handleSubmit (event) {
	// 	event.preventDefault();
	// 	$('#loading-spinner').show();
	// 	this.props.setOperationInProgress(UI_OPERATIONS.CREATE);

	// 	const bot = {
	// 		displayName: $('#display-name').val(),
	// 		emailAddress: `${$('#bot-username').val()}@sparkbot.io`
	// 	};

	// 	$.ajax({
	// 		type: 'POST',
	// 		url: '/onboarding/api/v1',
	// 		data: bot,
	// 		beforeSend: (xhr) => { xhr.setRequestHeader('Authorization', `Bearer ${this.props.token}`); }
	// 	})
	// 	.done((res, status, xhr) => {
	// 		this.props.triggerNotification(NOTIFICATION.STATUS.SUCCESS, NOTIFICATION.TYPE.CREATION, bot.displayName);
	// 		$('form :input').val('');
	// 		$('input:visible').first().focus();
	// 		const newBotId = xhr.getResponseHeader('location');
	// 		const newbot = Object.assign({ }, bot, { id: newBotId });
	// 		this.props.addBotHandler(newbot);
	// 	})
	// 	.fail((error) => {
	// 		const errorMsg = (error && error.responseJSON && error.responseJSON.errorMessage) ?
	// 			`${error.responseJSON.errorMessage}` : undefined;

	// 		this.props.triggerNotification(NOTIFICATION.STATUS.FAILURE, NOTIFICATION.TYPE.CREATION, bot.displayName, errorMsg);
	// 	})
	// 	.always(() => {
	// 		$('#loading-spinner').hide();
	// 		this.props.setOperationInProgress(UI_OPERATIONS.NONE);
	// 	});
	// }

	handleSubmit () {

	}

	submit () {
		return this.handleSubmit.bind(this);
	}

	logExpenses () {
		// alert('Would you like to log your expenses?');
		// return window.open('http://www.cnn.com/', 'CNN_WindowName', 'width=420,height=230,resizable,scrollbars=yes,status=1');
		return (
			<modal>
				<p>Hello</p>
			</modal>
		);
	}

	render () {
		// const { title, date, imgName, text } = params;
		// {photoList()}
		// const photoUrls = ['washington.jpg', 'lostCoast.jpg', 'philippines.jpg', 'Vail.jpg'];

		// const photoList = () =>
		// 	photoUrls.map((url, i) => (<li key={i}><img className="trip-small-img" src={`${imagePath}//${url}`} alt="img" /></li>));

		// const photoList = () =>
		// 	photoUrls.map((url, i) => (<img key={i} className="trip-small-img" src={`${imagePath}//${url}`} alt="img" />));

		return (
			<div id="destination" className="sub-page">
				<Banner imgUrl={'emptyImg'} altTag={'upload a banner image'} />
				<div id="destination-group">
					<div id="photos" className="trip-img-list sub-section">
						Upload Photos
						<input className="box_file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
					</div>
					<div id="main">
						<div className="destination-content">
							<div className="trip-header sub-section">
								<input type="text" id="trip-title-input" placeholder="Enter Trip Title" />
								<input type="text" id="trip-date-input" placeholder="Month and Year" />
							</div>
							<div className="category-icons sub-section">
								<a href="#photos"><img src={`${publicImagePath}/icons/imgIcon.svg`} alt="visuals" /></a>
								<a href="#summary"><img src={`${publicImagePath}/icons/infoicon.svg`} alt="info" /></a>
								<a href="#expenses"><img src={`${publicImagePath}/icons/dollarIcon.svg`} alt="expenses" /></a>
							</div>
							<div className="summary-section sub-section">
								<div id="summary" className="sub-header">Summary</div>
								<div className="trip-text">
									<textarea className="trip-text-input" />
								</div>
							</div>
							<div className="expenses-section sub-section">
								<div id="expenses" className="sub-header">Expenses</div>
								<div className="trip-expenses">
									<input className="box_file" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
									<p><textarea className="summary-text-input" /></p>
								</div>
							</div>
							<div className="submit-trip-section sub-section">
								<button>Save</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
