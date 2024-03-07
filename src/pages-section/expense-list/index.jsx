'use client';

import React, { useContext } from 'react';
import Header from '../../components/Header';
import ExpenseView from './expense-view';
import { useRouter } from 'next/navigation';
import { UserAuthContext } from '../../context/userContext';

const ExpenseListPage = () => {
	const router = useRouter();
	const { currentLoginUser } = useContext(UserAuthContext);
	if (!currentLoginUser) {
		router.push('/signin');
		return null;
	}
	return (
		<div>
			<Header />
			<h2>Expense List</h2>
			<ExpenseView />
		</div>
	);
};

export default ExpenseListPage;
