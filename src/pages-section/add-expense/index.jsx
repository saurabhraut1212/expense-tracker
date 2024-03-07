'use client';

import React, { useContext } from 'react';
import Header from '../../components/Header';
import ExpenseDataView from './expense-data-view';
import { UserAuthContext } from '../../context/userContext';
import { useRouter } from 'next/navigation';

const AddExpensePage = () => {
	const router = useRouter();
	const { currentLoginUser } = useContext(UserAuthContext);
	if (!currentLoginUser) {
		router.push('/signin');
		return null;
	}
	return (
		<div>
			<Header />
			<h2>Add Expenses</h2>
			<ExpenseDataView />
		</div>
	);
};

export default AddExpensePage;
