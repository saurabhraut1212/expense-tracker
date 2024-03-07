'use client';

import React, { useContext } from 'react';
import SignInDataView from './signin-data-view';
import Header from '../../components/Header';
import { UserAuthContext } from '../../context/userContext';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
	const router = useRouter();
	const { currentLoginUser } = useContext(UserAuthContext);
	if (currentLoginUser) {
		router.push('/');
		return null;
	}
	return (
		<div>
			<Header />
			<h2>SignIn Form</h2>
			<SignInDataView />
		</div>
	);
};

export default SignInPage;
