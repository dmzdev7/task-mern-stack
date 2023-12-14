import { createContext, useState, useContext } from 'react';
import { registerRequest } from '../api/auth';

const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('useAuth must be used within a AuthProvider');
	return context;
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [errors, setErrors] = useState([]);

	const signup = async (user) => {
		try {
			const res = await registerRequest(user);
			if (res.status === 200) {
				setUser(res.data);
				setIsAuthenticated(true);
			}
		} catch (error) {
			console.log(error.response.data);
			setErrors(error.response.data.message);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				signup,
				isAuthenticated,
				errors,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
