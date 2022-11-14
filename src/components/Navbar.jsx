import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import About from './About.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';

function Navbar(props) {

	const current = new Date();
	const date = `${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;

	return (
		<div>
			<nav>
				<div className='date'>
					<h4>{date}</h4>
				</div>
				<div className='nav-items'>
					<Link to='/' className='nav-item'>
						Home
					</Link>
					<Link to='/about' className='nav-item'>
						About
					</Link>
					<Link to='/signup' className='nav-item'>
						Create an account
					</Link>
					<Link to='/login' className='nav-item'>
						Sign in
					</Link>
				</div>
			</nav>
			<main>
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</main>
		</div>
	);
}

export default Navbar;
