import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";
import { Slider } from 'react-burgers'
// import Burger from '@animated-burgers/{burger-style}';
// import '@animated-burgers/{burger-style}/dist/styles.css' 

import { active, navTitle } from "./styles.module.scss";
import { throwStatement } from "@babel/types";

const navlinkClassNames = [];

const Navbar = ({ activeLink }) => {
	const [homeIsActive, setHomeIsActive] = useState(false);
	const [articlesIsActive, setArticlesIsActive] = useState(false);
	const [contactIsActive, setContactIsActive] = useState(false);
	const [loginIsActive, setLoginIsActive] = useState(false);

	useEffect(() => {
		switch (activeLink) {
			case "Home":
				setHomeIsActive(true);
				break;
			case "Articles":
				setArticlesIsActive(true);
				break;
			case "Contact":
				setContactIsActive(true);
			case "Login":
				setLoginIsActive(true);
			default:
				setHomeIsActive(true);
		}
	}, [activeLink]);

	function burgerClicked() {
		
	}

	return (
		<div>
			<nav>
				<h1 id={navTitle}>Amnesty UCC</h1>
				<ul>
					<li>
						<Link to="/" className={homeIsActive ? active : navlinkClassNames}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/" className={articlesIsActive ? active : navlinkClassNames}>Articles</Link>
					</li>
					<li>
						<Link to="/" className={contactIsActive ? active : navlinkClassNames}>Contact</Link>
					</li>
					<li>
						<Link to="/" className={loginIsActive ? active : navlinkClassNames}>Login/Signup</Link>
					</li>
				</ul>
				{/* <Slider onClick={burgerClicked}></Slider> */}
				<Burger isOpen={false} onClick={burgerClicked} />
			</nav>
		</div>
	);
};

export default Navbar;
