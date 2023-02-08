import Navigation from "./components/Navigation";
import Home1 from "./components/Home1";
import AboutUs from "./components/AboutUs";
import OurWork from "./components/OurWork";
import Products from "./components/Products";
import GuidelinesAndTips from "./components/GuidelinesAndTips";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

import { Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getBeforeafters } from "./services";

import BeforeAftersContext from "./context/BeforeAfters";

function App() {
	const [beforeafters, setBeforeafters] = useState([]);

	useEffect(() => {
		getBeforeafters(setBeforeafters);
	}, []);

	const updateBeforeafters = () => {
		getBeforeafters(setBeforeafters);
	};

	return (
		<BeforeAftersContext.Provider
			value={{
				beforeafters: beforeafters,
				setBeforeafters,
				updateBeforeafters,
			}}
		>
			<div className="App">
				<Navigation />

				<Routes>
					<Route
						path="/"
						element={<Home1 beforeafters={beforeafters} />}
					/>
					<Route
						path="/home"
						element={<Home1 beforeafters={beforeafters} />}
					/>
					<Route
						path="/home1"
						element={<Home1 beforeafters={beforeafters} />}
					/>
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/ourwork" element={<OurWork />} />
					<Route path="/products" element={<Products />} />
					<Route
						path="/guidelinesandtips"
						element={<GuidelinesAndTips />}
					/>
					<Route path="/contactus" element={<ContactUs />} />
				</Routes>
				<Footer />
			</div>
		</BeforeAftersContext.Provider>
	);
}
//<Navigation />
export default App;
/*
 */
