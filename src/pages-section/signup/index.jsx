'use client';

import React from 'react';
import SignUpDataView from './signup-data-view';
import Header from '../../components/Header';

const SignUpPage = () => {
	return (
		<div>
			<Header />
			<h2>SignUp Form</h2>
			<SignUpDataView />
		</div>
	);
};

export default SignUpPage;
