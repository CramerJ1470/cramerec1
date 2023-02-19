import Navigation from "./components/Navigation";
import Home1 from "./components/Home1";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurWork from "./components/OurWork";
import Dormers1 from "./components/Dormers1";
import Products from "./components/Products";
import GuidelinesAndTips from "./components/GuidelinesAndTips";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

import { Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getBeforeafters, getAdditions, getDormers } from "./services";

import BeforeAftersContext from "./context/BeforeAfters";
//import BathroomsContext from "./context/Bathrooms";
import DormersContext from "./context/Dormers";

function App() {
	const [beforeafters, setBeforeafters] = useState([]);
	//const [bathrooms, setBathrooms] = useState([]);
	const [dormers, setDormers] = useState([]);

	useEffect(() => {
		getBeforeafters(setBeforeafters);
	}, []);

	useEffect(() => {
		getDormers(setDormers);
	}, []);

	// useEffect(() => {
	// 	getBathrooms(setBathrooms);
	// }, []);


	const updateBeforeafters = () => {
		getBeforeafters(setBeforeafters);
	};
	// const updateBathrooms = () => {
	// 	getBathrooms(setBathrooms);
	// };

	const updateDormers = () => {
		getDormers(setDormers);
	};

	

	return (
		<BeforeAftersContext.Provider
			value={{
				beforeafters: beforeafters,
				setBeforeafters,
				updateBeforeafters,
			}}
		>
		{/*	<BathroomsContext.Provider
				value={{
					bathrooms: bathrooms,
					setBathrooms,
					updateBathrooms,
				}}
			*/}
				<DormersContext.Provider
					value={{
						dormers: dormers,
						setDormers,
						updateDormers,
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
								element={<Home beforeafters={beforeafters} />}
							/>
							<Route
								path="/home1"
								element={<Home1 beforeafters={beforeafters} />}
							/>
							<Route
								path="/aboutus"
								element={
									<AboutUs beforeafters={beforeafters} />
								}
							/>
							<Route
								path="/ourwork"
								element={<OurWork dormers={dormers} />}
							/>
							<Route
								path="/dormers"
								element={<Dormers1 dormers={dormers} />}
							/>
							<Route path="/products" element={<Products />} />
							<Route
								path="/guidelinesandtips"
								element={<GuidelinesAndTips />}
							/>
							<Route path="/contactus" element={<ContactUs />} />
						</Routes>
						<Footer />
					</div>
				</DormersContext.Provider>
			{/*</BathroomsContext.Provider>*/}
		</BeforeAftersContext.Provider>
	);
}
//<Navigation />
export default App;
/*
 */
