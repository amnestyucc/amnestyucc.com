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

export default class Signup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: null,
			email: null,
			password: null
		};
	}

	signup = () => {
		const username = document.getElementById("usernameInput").value;
		const email = document.getElementById("emailInput").value;
		const password = document.getElementById("passwordInput").value;
		this.setState(
			{
				username: username,
				email: email,
				password: password
			},
			() => {
				this.props.signup(
					this.state.email,
					this.state.password,
					this.state.username
				);
			}
		);

		document.getElementById("usernameInput").value = "";
		document.getElementById("emailInput").value = "";
		document.getElementById("passwordInput").value = "";
	};

	render() {
		return (
			<div>
				<Navbar />

				<h1 id={title}>Signup</h1>

				<form id={signupForm}>
					<Link to="/login" id={loginLink}>
						Already have an account? Login here!
					</Link>

					<label className={signupLabel}>Username:</label>
					<input type="text" className={signupInput} id="usernameInput"></input>
					<label className={signupLabel}>Email:</label>
					<input type="email" className={signupInput} id="emailInput"></input>
					<label className={signupLabel}>Password:</label>
					<input
						type="password"
						className={signupInput}
						id="passwordInput"
					></input>
					<button
						id={signupButton}
						onClick={() => {
							this.signup();
						}}
						type="button"
					>
						Signup
					</button>
				</form>
			</div>
		);
	}
}
