import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
	const user = null;

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// logged in
			} else {
				// logged out
			}
		});

		return unsubscribe;
	}, []);

	return (
		<div className="app">
			<Router>
				{/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route path="/">
							<HomeScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
