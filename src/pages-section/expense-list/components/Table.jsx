import React from 'react';

const Table = ({ expense }) => {
	return (
		<tr>
			<td>{expense.category}</td>
			<td>{expense.amount}</td>
			<td>{expense.addedDate}</td>
		</tr>
	);
};

export default Table;
