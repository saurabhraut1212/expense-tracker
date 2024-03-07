'use client';

import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import { UserAuthContext } from '../../context/userContext';

const AddNewAmountPage = () => {
	const router = useRouter();

	const [prevValue, setPrevValue] = useState('');
	const [amountToBeAdded, setAmountToBeAdded] = useState('');

	useEffect(() => {
		const amount = localStorage.getItem('AmountData') || 0;
		setPrevValue(parseFloat(amount));
	}, []);

	const handleSubmit = async () => {
		try {
			const totalAmount = prevValue + parseFloat(amountToBeAdded);
			localStorage.setItem('AmountData', totalAmount.toString());
			toast.success('Amount added successfully!');
			setAmountToBeAdded('');
			router.push('/');
		} catch (error) {
			toast.error(error.message);
		}
	};

	const { currentLoginUser } = useContext(UserAuthContext);
	if (!currentLoginUser) {
		router.push('/signin');
		return null;
	}

	return (
		<div>
			<Header />
			<h2>Add Amount</h2>
			<input
				type="number"
				placeholder="Add amount"
				value={amountToBeAdded}
				onChange={(e) => setAmountToBeAdded(e.target.value)}
			/>
			<button onClick={handleSubmit}>Add Amount</button>
		</div>
	);
};

export default AddNewAmountPage;
