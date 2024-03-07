import React from 'react';
import SignInForm from './signin-form';
import { useRouter } from 'next/navigation';
import { signIn } from '../../firebase/auth/signin';
import toast from 'react-hot-toast';

const SignInDataView = () => {
	const router = useRouter();

	const initialValues = {
		email: '',
		password: '',
	};

	const handleFormSubmit = async (values) => {
		try {
			const response = await signIn(values);
			if (response.status === 200) {
				toast.success('SignIn successful');
				router.push('/');
				window.location.reload();
			} else {
				toast.error('Error in signIn');
			}
		} catch (error) {
			toast.error(error.message);
		}
	};
	return (
		<div>
			<SignInForm
				initialValues={initialValues}
				handleFormSubmit={handleFormSubmit}
			/>
		</div>
	);
};

export default SignInDataView;
