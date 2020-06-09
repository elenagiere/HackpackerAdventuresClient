import React from 'react';

/* eslint-disable max-len */
export default function ExpenseForm () {

	const createNewRow = (event) => {
		console.log('createNewRow');
	};

	return (
		<div id="expense-table-form">
			<div className="row header-row">
				<div className="type column">
					<h3>Type</h3>
				</div>
				<div className="amount column">
					<h3>Cost</h3>
				</div>
			</div>

			<div className="row">
				<div className="type column">
					<select name="type-input">
						<option value="Flights">Flights</option>
						<option value="Uber">Uber</option>
						<option value="Rental Car">Rental Car</option>
						<option value="Gas">Gas</option>
						<option value="Public Trans">Public Trans</option>
						<option value="Groceries">Groceries</option>
						<option value="Breakfast">Breakfast</option>
						<option value="Lunch">Lunch</option>
						<option value="Dinner">Dinner</option>
						<option value="Snack">Snack</option>
						<option value="Bar">Bar</option>
						<option value="Alcohol">Alcohol</option>
						<option value="Coffee">Coffee</option>
						<option value="Other Drink">Other Drink</option>
						<option value="Hostel">Hostel</option>
						<option value="Motel">Motel</option>
						<option value="Camping">Camping</option>
						<option value="Tour">Tour</option>
						<option value="Sports">Sports</option>
						<option value="Entertainment">Entertainment</option>
						<option value="Equipment">Equipment</option>
						<option value="Gifts">Gifts</option>
						<option value="Souvenir">Souvenir</option>
					</select>
				</div>
				<div className="amount column">
					<input type="number" id="amount-input" onFocus={createNewRow} />
				</div>
			</div>
		</div>
	);
}
