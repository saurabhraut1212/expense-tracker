import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Link from 'next/link';
import PropTypes from 'prop-types';

const VALIDATION_SCHEMA = yup.object().shape({
	email: yup.string().email().required('Email is required'),
	password: yup
		.string()
		.min(4, 'Minimum 4 characters are required')
		.required('Password is required'),
});
const SignUpForm = (props) => {
	const { initialValues, handleFormSubmit } = props;
	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={handleFormSubmit}
				validationSchema={VALIDATION_SCHEMA}
			>
				{({
					values,
					errors,
					touched,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => (
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter your email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.email && errors.email && <div>{errors.email}</div>}
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Enter your password"
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.password && errors.password && (
								<div>{errors.password}</div>
							)}
						</div>
						<button type="submit">SignUp</button>
						<p>
							Already have an account <Link href="/signin">signin</Link>
						</p>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default SignUpForm;

SignUpForm.propTypes = {
	initialValues: PropTypes.shape({
		email: PropTypes.string.isRequired,
		password: PropTypes.string.isRequired,
	}).isRequired,
	handleFormSubmit: PropTypes.func.isRequired,
};
