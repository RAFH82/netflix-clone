import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixLogo from "./img/netflix-logo.png";
import avatarLogo from "./img/avatar_logo.png";

function Nav() {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener("scroll", transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img className="nav__logo" src={netflixLogo} alt="" />
				<img className="nav__avatar" src={avatarLogo} alt="" />
			</div>
		</div>
	);
}

export default Nav;
