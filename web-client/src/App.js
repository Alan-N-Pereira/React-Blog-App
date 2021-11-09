import NavBar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const user = true;
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="post/:postId" element={<Single />} />
				<Route path="write" element={user ? <Write /> : <Login />} />
				<Route path="setting" element={user ? <Settings /> : <Login />} />
				<Route path="login" element={user ? <Home /> : <Login />} />
				<Route path="register" element={user ? <Home /> : <Register />} />
			</Routes>
		</Router>
	);
}

export default App;
