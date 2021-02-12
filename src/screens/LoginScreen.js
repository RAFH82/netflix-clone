import React, { useState } from "react";
import "./LoginScreen.css";
import loginScreenBackground from "../img/loginScreen_background.png";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className="loginScreen">
			<div className="loginScreen__background">
				<img className="loginScreen__logo" src={loginScreenBackground} alt="" />
				<button className="loginScreen__button" onClick={() => setSignIn(true)}>
					Sign In
				</button>
				<div className="loginScreen__gradient" />
			</div>
			<div className="loginScreen__body">
				{signIn ? (
					<SignupScreen />
				) : (
					<>
						<h1>Unlimited films, TV programs and more!</h1>
						<h2>Watch anywhere. Cancel at anytime.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership
						</h3>
						<div className="loginScreen__input">
							<form>
								<input type="email" placeholder="Email Address" />
								<button
									className="loginScreen__getStarted"
									onClick={() => setSignIn(true)}
								>
									Get started!
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default LoginScreen;
