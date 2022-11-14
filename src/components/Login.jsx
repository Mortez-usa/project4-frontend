import React from 'react';
import logo from './Assets/logo.png';
import { Link } from 'react-router-dom';

function Login(props) {
	return <div></div>;
}

export default Login;

// function login({
// 	// handleFirstNameChange,
// 	// handleLastNameChange,
// 	handlePasswordChange,
// 	handleEmailChange,
// 	// firstName,
// 	// lastName,
// 	password,
// 	email,
// registerUser,
// 	loginUser,
// }) {
// 	return (
// 		<div className='login'>
// 			<Link to='/'>
// 				<img className='logo' src={logo} alt='logo' />
// 			</Link>
// 			<h1 className='txt-login'>login account</h1>
// 			<form onSubmit={loginUser} className='login-form'>
// 				<input
// 					className='email login-input-box'
// 					value={email}
// 					onChange={handleEmailChange}
// 					type='email'
// 					placeholder='Email'
// 					autoFocus
// 				/>
// 				<input
// 					className='password login-input-box'
// 					value={password}
// 					onChange={handlePasswordChange}
// 					type='password'
// 					placeholder='Password'
// 				/>

// 				<input className='login-input-btn' type='submit' value='Login' />
// 				<Link to='/signup'>Create an account </Link>
// 				<Link
// 					to='#'
// 					onClick={(e) => {
// 						window.location.href = 'mailto:example@gmail.com';
// 						e.preventDefault();
// 					}}>
// 					Forgot my password
// 				</Link>
// 				<p className='health-tip'>
// 					"Health is like money, we never have a true idea of its value until we
// 					lose it." JOSH BILLINGS
// 				</p>
// 			</form>
// 		</div>
// 	);
// }

// export default login;
