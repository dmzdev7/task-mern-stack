import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';

const App = () => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<h1>Home</h1>}></Route>
					<Route path="/login" element={<LoginPage />}></Route>
					<Route path="/register" element={<RegisterPage />}></Route>
					<Route path="/tasks" element={<h1>Tasks</h1>}></Route>
					<Route path="/add-task" element={<h1>New Task</h1>}></Route>
					<Route path="/tasks/:id" element={<h1>Update Task</h1>}></Route>
					<Route path="/profile" element={<h1>Profile</h1>}></Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
};

export default App;
