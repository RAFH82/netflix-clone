import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixLogo from "./img/netflix-logo.png";
import avatarLogo from "./img/avatar_logo.png";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectSub } from "./features/userSlice";

function Nav() {
	const [show, handleShow] = useState(false);
	const active_sub = useSelector(selectSub);
	const history = useHistory();

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
				<img
					className="nav__logo"
					src={netflixLogo}
					alt="netflix logo"
					onClick={() => {
						active_sub && history.push("/");
					}}
				/>
				<img
					className="nav__avatar"
					src={avatarLogo}
					alt="avatar logo"
					onClick={() => history.push("/profile")}
				/>
			</div>
		</div>
	);
}

export default Nav;
