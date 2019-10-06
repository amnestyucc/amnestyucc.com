import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../utils/firebase";
import Navbar from "../../components/Navbar/NavbarContainer";
import {
	title,
	loginForm,
	loginLabel,
	loginInput,
	loginButton,
	signupLink,
	loggedInMessageContainer,
	logoutButton
} from "./styles.module.scss";

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null
		};
	}

	render() {
		return (
			<div>
				<Navbar />

				{this.props.user ? (
					<div>
						<h1 id={title}>Login</h1>
						<div id={loggedInMessageContainer}>
							<h1>You are logged in</h1>
							<p id={logoutButton} onClick={this.props.logout}>
								Log out
							</p>
						</div>
					</div>
				) : (
					<div>
						<h1 id={title}>Login</h1>
						<form id={loginForm}>
							<Link to="/signup" id={signupLink}>
								Don't have an account? Sign up here!
							</Link>

							<label className={loginLabel}>Email:</label>
							<input
								type="email"
								className={loginInput}
								id="emailInput"
							></input>
							<label className={loginLabel}>Password:</label>
							<input
								type="password"
								className={loginInput}
								id="passwordInput"
							></input>
							<button
								id={loginButton}
								onClick={() => {
									this.props.login(
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
				)}
			</div>
		);
	}
}

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// import { auth } from "../../utils/firebase";
// import Navbar from "../../components/Navbar/NavbarContainer";
// import {
// 	title,
// 	loginForm,
// 	loginLabel,
// 	loginInput,
// 	loginButton,
// 	signupLink
// } from "./styles.module.scss";

// const Login = ({ login }) => {

// 	return (
// 		<div>
// 			<Navbar />

// 			{user != null ? (
// 				<div>
// 					<h1 id={title}>Login</h1>
// 					<form id={loginForm}>
// 						<Link to="/signup" id={signupLink}>
// 							Don't have an account? Sign up here!
// 						</Link>

// 						<label className={loginLabel}>Email:</label>
// 						<input type="email" className={loginInput} id="emailInput"></input>
// 						<label className={loginLabel}>Password:</label>
// 						<input
// 							type="password"
// 							className={loginInput}
// 							id="passwordInput"
// 						></input>
// 						<button
// 							id={loginButton}
// 							onClick={() => {
// 								login(
// 									document.getElementById("emailInput").value,
// 									document.getElementById("passwordInput").value
// 								);
// 								document.getElementById("emailInput").value = "";
// 								document.getElementById("passwordInput").value = "";
// 							}}
// 							type="button"
// 						>
// 							Login
// 						</button>
// 					</form>
// 				</div>
// 			) : (
// 				<div>
// 					<h1 id={title}>Login</h1>
// 					<h1>You are logged in</h1>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default Login;
