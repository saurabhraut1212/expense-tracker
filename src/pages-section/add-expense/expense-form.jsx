import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const VALIDATION_SCHEMA = yup.object().shape({
	category: yup.string().required('Category is required'),
	amount: yup.number().required('Amount is required'),
	addedDate: yup.date().required('Date is required'),
});

const ExpenseForm = (props) => {
	const { initialValues, handleFormSubmit } = props;
	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleFormSubmit}
				validationSchema={VALIDATION_SCHEMA}
			>
				{({
					errors,
					touched,
					values,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="category">Category</label>
							<input
								type="text"
								id="category"
								name="category"
								placeholder="Enter the category"
								value={values.category}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.category && errors.category && (
								<div>{errors.category}</div>
							)}
						</div>
						<div>
							<label htmlFor="amount">Amount</label>
							<input
								type="number"
								id="amount"
								name="amount"
								placeholder="Enter the amount"
								value={values.amount}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.amount && errors.amount && <div>{errors.amount}</div>}
						</div>
						<div>
							<label htmlFor="addedDate">AddedDate</label>
							<input
								type="date"
								id="addedDate"
								name="addedDate"
								placeholder="Select the addedDate"
								value={values.addedDate}
								InputLabelProps={{
									shrink: true,
								}}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.addedDate && errors.addedDate && (
								<div>{errors.addedDate}</div>
							)}
						</div>
						<button type="submit">Add Expense</button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default ExpenseForm;

ExpenseForm.propTypes = {
	initialValues: PropTypes.shape({
		category: PropTypes.string.isRequired,
		amount: PropTypes.number.isRequired,
		addedDate: PropTypes.instanceOf(Date).isRequired,
	}).isRequired,
	handleFormSubmit: PropTypes.func.isRequired,
};
