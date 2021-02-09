import React from "react";
import "./Banner.css";
import netflixBanner from "./img/banner_logo.png";

function Banner() {
	return (
		<div
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(${netflixBanner})`,
				backgroundPosition: "center center",
			}}
		></div>
	);
}

export default Banner;
