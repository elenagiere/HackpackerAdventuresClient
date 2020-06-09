import React from 'react';
import expenseBanner from '../static/images/expenseBanner2_opt.jpg';
import ReactMarkdown from 'react-markdown';

class Expenses extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			text: '',
			markdown: null,
		}
	}

	componentDidMount() {
		fetch(require(`../static/markdown/comingsoon.md`))
			.then(response => {
				console.log('markdown fetch response');
				console.log(response);
				return response.text();
			})
			.then(text => {
				this.setState({
					markdown: text,
				})
			}).catch((err) => {
				console.log('markdown fetch error');
				console.log(err);
			});
	}

	render () {
		return (
			<div id="about-page" className="sub-page">
				<div id="banner">
			    	<img className='img-banner' src={expenseBanner} alt='expense banner' />
		   		</div>
				<div className="text-content">
					<h2 className="cards-header">Expenses</h2>
					<div className="summary-section">
						<div className="text">
							<ReactMarkdown source={this.state.markdown} escapeHtml={false} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Expenses;
