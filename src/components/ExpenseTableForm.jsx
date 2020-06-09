import React from 'react';

/* eslint-disable max-len */
export default function ExpenseTableForm () {

	return (
		<div id="expense-table-form">
			<div className="row header-row">
				<div className="title column">
					<h3>title</h3>
				</div>
				<div className="dollars column">
					<h3>Dollars</h3>
				</div>
				<div className="percentage column">
					<h3>Percent</h3>
				</div>
			</div>

			<div className="row">
				<div className="title column">
					<h3>Transportation</h3>
				</div>
				<div className="dollars column">
					<input type="text" id="dollars-input" />
				</div>
				<div className="percentage column">
					<input type="text" id="percent-input" />
				</div>
			</div>
		</div>
	);
}
