import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import { UserAuthContext } from '../context/userContext';
import { signOutUser } from '../firebase/user/signout';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Header = () => {
	const router = useRouter();
	const { currentLoginUser } = useContext(UserAuthContext);

	const handleSignOut = async () => {
		try {
			const response = await signOutUser();
			if (response.status === 200) {
				toast.success('User signOut successful');
				window.location.reload();
			} else {
				toast.error('Error in signOut');
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	useEffect(() => {
		console.log(currentLoginUser, 'currentLoginUser');
	}, [currentLoginUser]);

	return (
		<nav>
			<div>
				<Link href="/">Home</Link>
			</div>
			<div>
				{currentLoginUser ? (
					<>
						<Link href="/add-expense">Add Expense</Link>
						<Link href="/expense-list">Expense List</Link>
						<Link href="/add-new-amount">Add Amount</Link>
						<button onClick={handleSignOut}>Sign Out</button>
					</>
				) : (
					<>
						<Link href="/signup">Sign Up</Link>
						<Link href="/signin">Sign In</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Header;
