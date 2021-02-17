import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subscribed, selectUser } from "../features/userSlice";
import db from "../firebase";
import "./PlansScreen.css";
import { loadStripe } from "@stripe/stripe-js";

function PlansScreen() {
	const [products, setProducts] = useState([]);
	const [subscription, setSubscription] = useState(null);
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(() => {
		db.collection("customers")
			.doc(user.uid)
			.collection("subscriptions")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach(async (subscription) => {
					setSubscription({
						role: subscription.data().role,
						current_period_end: subscription.data().current_period_end.seconds,
						current_period_start: subscription.data().current_period_start
							.seconds,
					});
					dispatch(
						subscribed({
							active_sub: true,
						})
					);
				});
			});
	}, [user.id]);

	useEffect(() => {
		db.collection("products")
			.where("active", "==", true)
			.get()
			.then((querySnapshot) => {
				const products = {};
				querySnapshot.forEach(async (productDoc) => {
					products[productDoc.id] = productDoc.data();
					const priceSnap = await productDoc.ref.collection("prices").get();
					priceSnap.docs.forEach((price) => {
						products[productDoc.id].prices = {
							priceId: price.id,
							priceData: price.data(),
						};
					});
				});
				setProducts(products);
			});
	}, []);

	const loadCheckout = async (priceId) => {
		const docRef = await db
			.collection("customers")
			.doc(user.uid)
			.collection("checkout_sessions")
			.add({
				price: priceId,
				success_url: window.location.origin,
				cancel_url: window.location.origin,
			});

		docRef.onSnapshot(async (snap) => {
			const { error, sessionId } = snap.data();
			if (error) {
				// show error to customer
				// inspect cloud function logs
				alert(`An error occured: ${error.message}`);
			}

			if (sessionId) {
				// we have a session, lets redirect to checkout
				// takes a key
				const stripe = await loadStripe(
					"pk_test_51I664CDkgfOKq4TCw57ZhVgETXstE0jS4nFRpD7VTmfQWLrhKanO2gD02FE9ryDCiI4bhFcktAUZBS9ELzWysmi800TNsAgDcU"
				);

				stripe.redirectToCheckout({ sessionId });
			}
		});
	};

	return (
		<div className="plansScreen">
			{subscription && (
				<p>
					Renewal Date:{" "}
					{new Date(
						subscription?.current_period_end * 1000
					).toLocaleDateString()}
				</p>
			)}
			{Object.entries(products).map(([productId, productData]) => {
				const isCurrentPackage = productData.name
					?.toLowerCase()
					.includes(subscription?.role);
				return (
					<div
						key={productId}
						className={`${
							isCurrentPackage && "plansScreen__plan--disabled"
						} plansScreen__plan`}
					>
						<div className="plansScreen__info">
							<h5>{productData.name}</h5>
							<h6>{productData.description}</h6>
						</div>
						<button
							onClick={() =>
								!isCurrentPackage && loadCheckout(productData.prices.priceId)
							}
						>
							{isCurrentPackage ? "Current Package" : "Subscribe"}
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default PlansScreen;
