import React, { useEffect, useState } from 'react';
import ExpenseForm from './expense-form';
import toast from 'react-hot-toast';
import { addExpense } from '../../firebase/expenses/add-expense';
import { useRouter } from 'next/navigation';

const ExpenseDataView = () => {
	const [value, setValue] = useState('');
	const [expenditure, setExpenditure] = useState('');

	useEffect(() => {
		const amountFromStorage = localStorage.getItem('AmountData');
		const parsedAmount = parseFloat(amountFromStorage);

		if (!isNaN(parsedAmount)) {
			setValue(parsedAmount);
		} else {
			console.error("Invalid 'AmountData' in localStorage");
		}
	}, []);

	useEffect(() => {
		const expenditureFromStorage = localStorage.getItem('ExpenditureData') || 0;
		const parsedAmount = parseFloat(expenditureFromStorage);

		if (!isNaN(parsedAmount)) {
			setExpenditure(parsedAmount);
		} else {
			console.error("Invalid 'AmountData' in localStorage");
		}
	}, []);

	const router = useRouter();

	const initialValues = {
		category: '',
		amount: 0,
		addedDate: new Date(),
	};

	const handleFormSubmit = async (values) => {
		const { amount } = values;
		if (amount > value) {
			toast.error('Amount is greater than the totalAmount');
			return;
		}
		try {
			const response = await addExpense(values);
			if (response.status === 200) {
				toast.success('Expense add successfully');
				const amountToStorage = value - amount;
				const expenditureToStorage = expenditure + amount;
				localStorage.setItem('AmountData', amountToStorage);
				localStorage.setItem('ExpenditureData', expenditureToStorage);
				router.push('/');
			} else {
				toast.error('Error in adding expenses');
			}
		} catch (error) {
			toast.error(error.message);
		}
	};
	return (
		<div>
			<ExpenseForm
				initialValues={initialValues}
				handleFormSubmit={handleFormSubmit}
			/>
		</div>
	);
};

export default ExpenseDataView;
