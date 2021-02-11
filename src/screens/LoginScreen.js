import React from "react";
import "./LoginScreen.css";
import loginScreenBackground from "../img/loginScreen_background.png";

function LoginScreen() {
	return (
		<div className="loginScreen">
			<div className="loginScreen__background">
				<img className="loginScreen__logo" src={loginScreenBackground} alt="" />
				<button className="loginScreen__button">Sign In</button>
				<div className="loginScreen__gradient" />
			</div>
		</div>
	);
}

export default LoginScreen;
