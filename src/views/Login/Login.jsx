import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/NavbarContainer";
import {
	title,
	loginForm,
	loginLabel,
	loginInput,
	loginButton,
	signupLink
} from "./styles.module.scss";

const Login = () => {
	return (
		<div>
			<Navbar />

			<h1 id={title}>Login</h1>

			<form id={loginForm}>
				<Link to="/signup" id={signupLink}>
					Don't have an account? Sign up here!
				</Link>

				<label className={loginLabel}>Username:</label>
				<input type="text" className={loginInput}></input>
				<label className={loginLabel}>Email:</label>
				<input type="email" className={loginInput}></input>
				<label className={loginLabel}>Password:</label>
				<input type="password" className={loginInput}></input>
				<button id={loginButton}>Login</button>
			</form>
		</div>
	);
};

export default Login;
