import React from "react";
import Nav from "../Nav";
import "./ProfileScreen.css";
import avatarLogo from "../img/avatar_logo.png";

function ProfileScreen() {
	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img src={avatarLogo} alt="avatar logo" />
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
