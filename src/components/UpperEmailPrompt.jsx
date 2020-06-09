import React from 'react';
import SubscriptionAlert from './SubscriptionAlert.jsx';
import ReactAnimatedEllipsis from 'react-animated-ellipsis';

class EmailPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // fname: '',
            email: '',
            alertType: '',
            isLoading: false,
            error: null,
            startTimer: false,
        };

        // this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    startAlertTimer() {
        setTimeout(function () {
            this.setState({
                alertType: ''
            });
        }.bind(this), 8000);
    }

    // handleNameChange(event) {
    //     this.setState({ fname: event.target.value });
    // }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            isLoading: true
        });

        return fetch('/api/add-subscriber', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email_address: this.state.email,
                status: 'subscribed',
                FNAME: ''
            })
        }).then((res) => {
            this.startAlertTimer.apply(this);
            return res.json();
        }).then((resJson) => {
            if (resJson.statusCode && resJson.statusCode === 200) {
                console.log('email submit success');
                this.setState({
                    alertType: 'success',
                    isLoading: false
                });
            } else {
                console.log('email submit failure');
                const err = resJson;
                this.setState({
                    alertType: 'error',
                    isLoading: false,
                    error: {
                        code: err.status,
                        type: err.title,
                        details: err.detail
                    }
                });
            }
        }).catch((err) => {
            console.log('email submit catch failure');
            this.setState({
                alertType: 'error',
                isLoading: false,
                error: {
                    code: err.status,
                    type: err.title,
                    details: err.detail
                }
            });
        })
    }

    render() {
        return (
            <div>
                <form id="upper-email-prompt" className="form-row" onSubmit={this.handleSubmit}>
                    <span className="subscribe-title">Join Our Community</span>
                    {/* <div className="field-group">
                        <input type="text" name="FNAME" className="form-item" placeholder="Name" id="FNAME" value={this.state.fname} onChange={this.handleNameChange}></input>
                    </div> */}
                    <div className="field-group email-group">
                        <input type="email" name="EMAIL" placeholder="Email address" value={this.state.email} onChange={this.handleEmailChange} className="required email form-item form-item--email" id="email_address" />
                    </div>
                    <div className="submit-group">
                        <button type="submit" value="Subscribe" name="subscribe" disabled={this.state.isLoading} className="button form-item subscribe-button">
                            {this.state.isLoading ? <div className="loading-ellipsis-wrapper"><ReactAnimatedEllipsis /></div> : <p>Subscribe</p>}
                        </button>
                    </div>
                </form>
                {this.state.alertType ? <SubscriptionAlert alertType={this.state.alertType} error={this.state.error}></SubscriptionAlert> : ''}
            </div>
        );
    }
}

export default EmailPrompt;

// EmailPrompt.propTypes = {
// 	id: PropTypes.number
// };