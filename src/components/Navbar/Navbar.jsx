import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
	active,
	navTitle,
	burger,
	bar1,
	bar2,
	bar3,
	change,
	ulActive,
	navListItems,
} from './styles.module.scss';
import '../../styles/styles.scss';

const navlinkClassNames = [];

const Navbar = ({ activeLink }) => {
	const [homeIsActive, setHomeIsActive] = useState(false);
	const [articlesIsActive, setArticlesIsActive] = useState(false);
	const [contactIsActive, setContactIsActive] = useState(false);
	const [loginIsActive, setLoginIsActive] = useState(false);

	useEffect(() => {
		switch (activeLink) {
			case 'Home':
				setHomeIsActive(true);
				break;
			case 'Articles':
				setArticlesIsActive(true);
				break;
			case 'Contact':
				setContactIsActive(true);
				break;
			case 'Login':
				setLoginIsActive(true);
				break;
			default:
				setHomeIsActive(true);
		}
	}, [activeLink]);

	function burgerClicked() {
		document.getElementById(burger).classList.toggle(change);
		document.getElementById('list').classList.toggle(ulActive);
	}

	return (
		<div>
			<nav>
				<h1 id={navTitle}>Amnesty UCC</h1>
				<ul id="list">
					<li className={navListItems}>
						<Link to="/" className={homeIsActive ? active : navlinkClassNames}>
							Home
						</Link>
					</li>
					<li className={navListItems}>
						<Link
							to="/summit"
							className={contactIsActive ? active : navlinkClassNames}
						>
							Summit
						</Link>
					</li>
					<li className={navListItems}>
						<Link
							to="/articles"
							className={articlesIsActive ? active : navlinkClassNames}
						>
							Articles
						</Link>
					</li>
					<li className={navListItems}>
						<Link
							to="/"
							className={contactIsActive ? active : navlinkClassNames}
						>
							Contact
						</Link>
					</li>
					<li className={navListItems}>
						<Link
							to="/login"
							className={loginIsActive ? active : navlinkClassNames}
						>
							Login/Signup
						</Link>
					</li>
				</ul>
				<div id={burger} onClick={burgerClicked}>
					<div id={bar1}></div>
					<div id={bar2}></div>
					<div id={bar3}></div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
