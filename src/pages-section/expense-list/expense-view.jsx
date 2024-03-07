import React, { useEffect, useState } from 'react';
import { getExpenses } from '../../firebase/expenses/get-expenses';
import Table from './components/Table';

const ExpenseView = () => {
	const [expenses, setExpenses] = useState([]);

	useEffect(() => {
		const AllExpenses = async () => {
			try {
				const response = await getExpenses();
				setExpenses(response.data);
			} catch (error) {
				console.log('Error in getting expenses');
			}
		};
		AllExpenses();
	}, []);

	const totalExpense = expenses.reduce((accumulator, expense) => {
		return accumulator + expense.amount;
	}, 0);
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Category</th>
						<th>Amount</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{expenses ? (
						expenses.map((expense) => (
							<Table key={expense.id} expense={expense} />
						))
					) : (
						<p>Not getting expenses</p>
					)}
				</tbody>
				<tfoot>Total expenses:{totalExpense}</tfoot>
			</table>
		</div>
	);
};

export default ExpenseView;
