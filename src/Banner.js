import React from "react";
import "./Banner.css";
import netflixBanner from "./img/banner_black.png";

function Banner() {
	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(${netflixBanner})`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">Movie Name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">
					{truncate(
						`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
					nihil mollitia veniam eius est quod eos, cum repellendus recusandae,
					non totam quas officia iusto eveniet nemo quam fuga cumque ea!Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nihil
					mollitia veniam eius est quod eos, cum repellendus recusandae, non
					totam quas officia iusto eveniet nemo quam fuga cumque ea!Lorem ipsum
					dolor sit amet consectetur adipisicing elit. Dolorum, nihil mollitia
					veniam eius est quod eos, cum repellendus recusandae, non totam quas
					officia iusto eveniet nemo quam fuga cumque ea!Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Dolorum, nihil mollitia veniam eius
					est quod eos, cum repellendus recusandae, non totam quas officia iusto
					eveniet nemo quam fuga cumque ea!`,
						150
					)}
				</h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
