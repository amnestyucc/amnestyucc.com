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

const Login = ({ login }) => {
	return (
		<div>
			<Navbar />

			<h1 id={title}>Login</h1>

			<form id={loginForm}>
				<Link to="/signup" id={signupLink}>
					Don't have an account? Sign up here!
				</Link>

				<label className={loginLabel}>Email:</label>
				<input type="email" className={loginInput} id="emailInput"></input>
				<label className={loginLabel}>Password:</label>
				<input
					type="password"
					className={loginInput}
					id="passwordInput"
				></input>
				<button
					id={loginButton}
					onClick={() => {
						login(
							document.getElementById("emailInput").value,
							document.getElementById("passwordInput").value
						);
						document.getElementById("emailInput").value = "";
						document.getElementById("passwordInput").value = "";
					}}
					type="button"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
