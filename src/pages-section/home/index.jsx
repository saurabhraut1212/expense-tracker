'use client';

import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header';
import { UserAuthContext } from '../../context/userContext';
import { getCurrentLoginUser } from '../../firebase/user/get-current-login-user';

const HomePage = () => {
	const { currentLoginUser, setCurrentLoginUser } = useContext(UserAuthContext);
	const [totalValue, setTotalValue] = useState('');
	const [totalExpenditure, setTotalExpenditure] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const user = await getCurrentLoginUser();
				setCurrentLoginUser(user.email);
			} catch (error) {
				console.log('Error', error);
			}
		};
		fetchData();
	}, [currentLoginUser]);

	useEffect(() => {
		const amount = parseFloat(localStorage.getItem('AmountData')) || 0;
		const expenditure =
			parseFloat(localStorage.getItem('ExpenditureData')) || 0;
		setTotalValue(amount);
		setTotalExpenditure(expenditure);
	}, []);

	return (
		<div>
			<Header />
			<h2>Welcome to Expense Tracker App</h2>
			<h3>Remaining Amount</h3>
			{totalValue === 0 ? (
				<h3>
					Your remaining amount is 0.You have to add amount for further expense
					tracking
				</h3>
			) : (
				totalValue
			)}
			<h3>Total Expenditure</h3>
			<h1>{totalExpenditure}</h1>
		</div>
	);
};

export default HomePage;
