import React from "react";
import "./Nav.css";
import NetflixLogo from "./img/netflix-logo.png";
import AvatarLogo from "./img/avatar_logo.png";

function Nav() {
	return (
		<div className="nav nav__black">
			<div className="nav__contents">
				<img className="nav__logo" src={NetflixLogo} alt="" />
				<img className="nav__avatar" src={AvatarLogo} alt="" />
			</div>
		</div>
	);
}

export default Nav;
