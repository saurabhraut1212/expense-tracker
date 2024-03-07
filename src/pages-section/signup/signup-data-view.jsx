import React from 'react';
import SignUpForm from './signup-form';
import { signUp } from '../../firebase/auth/signup';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const SignUpDataView = () => {
	const router = useRouter();
	const initialValues = {
		email: '',
		password: '',
	};

	const handleFormSubmit = async (values) => {
		try {
			const response = await signUp(values);
			if (response.status === 200) {
				toast.success('SignUp Successful');
				router.push('/signin');
			} else {
				toast.error('Error in signUp');
			}
		} catch (error) {
			toast.error(error.message);
		}
	};
	return (
		<div>
			<SignUpForm
				initialValues={initialValues}
				handleFormSubmit={handleFormSubmit}
			/>
		</div>
	);
};

export default SignUpDataView;
