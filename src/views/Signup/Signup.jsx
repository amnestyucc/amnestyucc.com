import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/NavbarContainer";

import {
	title,
	signupForm,
	loginLink,
	signupLabel,
	signupInput,
	signupButton
} from "./styles.module.scss";

const Signup = () => {
	return (
		<div>
			<Navbar />

			<h1 id={title}>Signup</h1>

			<form id={signupForm}>
				<Link to="/login" id={loginLink}>
					Already have an account? Login here!
				</Link>

				<label className={signupLabel}>Email:</label>
				<input type="email" className={signupInput}></input>
				<label className={signupLabel}>Password:</label>
				<input type="password" className={signupInput}></input>
				<button id={signupButton}>Signup</button>
			</form>
		</div>
	);
};

export default Signup;
