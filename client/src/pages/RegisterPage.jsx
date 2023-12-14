import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Label } from '../components/ui/Label';

const RegisterPage = () => {
	const { signup, errors: registerErrors, isAuthenticated } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async (value) => {
		await signup(value);
	};

	useEffect(() => {
		if (isAuthenticated) navigate('/tasks');
	}, [isAuthenticated]);

	return (
		<div className="h-[calc(100vh-100px)] flex items-center justify-center">
			<Card>
				{registerErrors.map((error, i) => (
					<p
						className="text-slate-200 bg-red-500 py-2 px-3 text-sm rounded-sm mb-1"
						key={i}
					>
						{error}
					</p>
				))}
				<h1 className="text-3xl font-bold">Register</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Label htmlFor="username">Username:</Label>
					<input
						type="text"
						name="username"
						placeholder="Write your name"
						{...register('username')}
						autoFocus
					/>
					{errors.username && (
						<p className="text-red-500">Username is required</p>
					)}

					<Label htmlFor="email">Email:</Label>
					<input
						name="email"
						placeholder="youremail@domain.tld"
						{...register('email')}
					/>
					{errors.email && <p className="text-red-500">Email is required</p>}

					<input
						type="password"
						name="password"
						placeholder="********"
						{...register('password')}
					/>
					{errors.password && (
						<p className="text-red-500">Password is required</p>
					)}

					<button type="submit">Register</button>
					
					<p>
						Already Have an Account?
						<Link className="text-sky-500" to="/login">
							Login
						</Link>
					</p>
				</form>
			</Card>
		</div>
	);
};

export default RegisterPage;
