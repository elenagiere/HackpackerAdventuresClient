
import React from 'react';
import PropTypes from 'prop-types';
// import Favicon from 'react-favicon';
// import { imagePath } from '../Constants.js';
// import Header from './Header.jsx';
// import Modal from 'react-responsive-modal';
import { FaTimes } from 'react-icons/fa';
// var sendinblue = require('sendinblue-api');
import sendinblue from 'sendinblue-api';

class Modal extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
            isModalOpen: true,
            name: '',
            email: '',
        };
        
        this.handleEmailChange.bind(this);
        this.handleNameChange.bind(this);
	}

	onToggle () {
		this.setState({ 'isModalOpen': !this.state.isModalOpen });
    }

    handleNameChange (event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange (event) {
        this.setState({ email: event.target.value });
    }
    
    addEmail () {
        // console.log('addEmail');
        const key = '';
        // const parameters = { "apiKey": key, "timeout": 5000 };	//Optional parameter: Timeout in MS
        // const sendinObj = new sendinblue(parameters);
    
        // const input = {};
        // sendinObj.get_account(input, function(err, response){
        //      console.log(response);
        // });
        // var sendinblue = require('sendinblue-api');

        ////
        var parameters = { "apiKey": key, "timeout": 5000 };
        var sendinObj = new sendinblue(parameters);

        var input = {
            'email': this.state.email,
            'attributes': {
                'NAME': this.state.name,
                'SURNAME': ''
            },
            'blacklisted': 0,
            'listid': [291]
        };

        sendinObj.create_update_user(input, function(err, response){
            if(err){
                console.log(err);
            } else {
                console.log(response);
            }
        });
    }

	render () {
        const { toggle } = this.props;

        return (
            <div className="overlay">
                <div className="email-prompt-modal">
                    <div className="modal-header">
                        <button className="icon-button" onClick={() => toggle()}>
                            <FaTimes /> 
                        </button>
                    </div>
                    <div className="modal-content">
                    <h2>START HERE</h2>
                    <p>Please join us in our adventures around the world. On this site, you will discover helpful travel tips along with funny stories in all parts of the world.</p>
                    <form className="form-row">
                        <input 
                            className="form-item" 
                            name="name" 
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            placeholder="Name" />
                        <input
                            className="form-item"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            placeholder="Email Address" />
                        <button type="submit" className="form-item" onClick={() => this.addEmail()}>Subscribe</button>
                    </form>
                    </div>
                </div>
            </div>
        );
	}
}

// value={this.state.email} 
export default Modal;

Modal.propTypes = {
	toggle: PropTypes.func.isRequired
};
