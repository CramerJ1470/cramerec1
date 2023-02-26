import Navigation from "./components/Navigation";
import Home1 from "./components/Home1";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurWork from "./components/OurWork";
import Dormers1 from "./components/Dormers1";
import Baths from "./components/Baths";
import Kitchens from "./components/Kitchens";
import Basements from "./components/Basements";
import Interiors from "./components/Interiors";
import Exteriors from "./components/Exteriors";
import Additions from "./components/Additions";
import Uniquefeatures from "./components/Uniquefeatures";
import Products from "./components/Products";
import GuidelinesAndTips from "./components/GuidelinesAndTips";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

import { Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
	getBeforeafters,
	getAdditions,
	getDormers,
	getBaths,
	getInteriors,
	getExteriors,
	getKitchens,
	getBasements,
	getUniquefeatures,
} from "./services";

import BeforeAftersContext from "./context/BeforeAfters";
import BathsContext from "./context/Baths";
import DormersContext from "./context/Dormers";
import KitchensContext from "./context/Kitchens";
import AdditionsContext from "./context/Additions";
import InteriorsContext from "./context/Interiors";
import ExteriorsContext from "./context/Exteriors";
import BasementsContext from "./context/Basements";
import UniquefeaturesContext from "./context/Uniquefeatures";

function App() {
	const [beforeafters, setBeforeafters] = useState([]);
	const [baths, setBaths] = useState([]);
	const [dormers, setDormers] = useState([]);
	const [kitchens, setKitchens] = useState([]);
	const [interiors, setInteriors] = useState([]);
	const [exteriors, setExteriors] = useState([]);
	const [basements, setBasements] = useState([]);
	const [additions, setAdditions] = useState([]);
	const [uniquefeatures, setUniquefeatures] = useState([]);

	useEffect(() => {
		if (document) {
		  const stylesheet = document.createElement("link");
		  stylesheet.rel = "stylesheet";
		  stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
	
		  document.head.appendChild(stylesheet);
		}
	  }, []);


	useEffect(() => {
		getBeforeafters(setBeforeafters);
	}, []);

	useEffect(() => {
		getDormers(setDormers);
	}, []);

	useEffect(() => {
		getBaths(setBaths);
	}, []);

	useEffect(() => {
		getKitchens(setKitchens);
	}, []);

	useEffect(() => {
		getAdditions(setAdditions);
	}, []);

	useEffect(() => {
		getInteriors(setInteriors);
	}, []);

	useEffect(() => {
		getExteriors(setExteriors);
	}, []);

	useEffect(() => {
		getUniquefeatures(setUniquefeatures);
	}, []);

	useEffect(() => {
		getBasements(setBasements);
	}, []);
	/***************Updates*******************/
	const updateBeforeafters = () => {
		getBeforeafters(setBeforeafters);
	};

	const updateDormers = () => {
		getDormers(setDormers);
	};

	const updateBaths = () => {
		getBaths(setBaths);
	};

	const updateKitchens = () => {
		getKitchens(setKitchens);
	};

	const updateBasements = () => {
		getBasements(setBasements);
	};

	const updateInteriors = () => {
		getInteriors(setInteriors);
	};

	const updateExteriors = () => {
		getExteriors(setExteriors);
	};

	const updateUniquefeatures = () => {
		getUniquefeatures(setUniquefeatures);
	};

	const updateAdditions = () => {
		getAdditions(setAdditions);
	};

	return (
		<BeforeAftersContext.Provider
			value={{
				beforeafters: beforeafters,
				setBeforeafters,
				updateBeforeafters,
			}}
		>
			<DormersContext.Provider
				value={{
					dormers: dormers,
					setDormers,
					updateDormers,
				}}
			>
				<BathsContext.Provider
					value={{
						baths: baths,
						setBaths,
						updateBaths,
					}}
				>
					<KitchensContext.Provider
						value={{
							kitchens: kitchens,
							setKitchens,
							updateKitchens,
						}}
					>
						<AdditionsContext.Provider
							value={{
								additions: additions,
								setAdditions,
								updateAdditions,
							}}
						>
							<BasementsContext.Provider
								value={{
									basements: basements,
									setBasements,
									updateBasements,
								}}
							>
								<InteriorsContext.Provider
									value={{
										interiors: interiors,
										setInteriors,
										updateInteriors,
									}}
								>
									<ExteriorsContext.Provider
										value={{
											exteriors: exteriors,
											setExteriors,
											updateExteriors,
										}}
									>
										<UniquefeaturesContext.Provider
											value={{
												uniquefeatures: uniquefeatures,
												setUniquefeatures,
												updateUniquefeatures,
											}}
										>
											<div className="App">
												<Navigation />

												<Routes>
													<Route
														path="/"
														element={
															<Home
																beforeafters={
																	beforeafters
																}
															/>
														}
													/>
													<Route
														path="/home"
														element={
															<Home
																beforeafters={
																	beforeafters
																}
															/>
														}
													/>
													<Route
														path="/home1"
														element={
															<Home1
																beforeafters={
																	beforeafters
																}
															/>
														}
													/>
													<Route
														path="/aboutus"
														element={
															<AboutUs
																beforeafters={
																	beforeafters
																}
															/>
														}
													/>
													<Route
														path="/ourwork"
														element={
															<OurWork
																dormers={
																	dormers
																}
															/>
														}
													/>
													<Route
														path="/dormers"
														element={
															<Dormers1
																dormers={
																	dormers
																}
															/>
														}
													/>
													<Route
														path="/baths"
														element={
															<Baths
																baths={baths}
															/>
														}
													/>
													<Route
														path="/kitchens"
														element={
															<Kitchens
																kitchens={
																	kitchens
																}
															/>
														}
													/>
													<Route
														path="/additions"
														element={
															<Additions
																additions={
																	additions
																}
															/>
														}
													/>
													<Route
														path="/basements"
														element={
															<Basements
																basements={
																	basements
																}
															/>
														}
													/>
													<Route
														path="/interiors"
														element={
															<Interiors
																interiors={
																	interiors
																}
															/>
														}
													/>
													<Route
														path="/exteriors"
														element={
															<Exteriors
																exteriors={
																	exteriors
																}
															/>
														}
													/>
													<Route
														path="/uniquefeatures"
														element={
															<Uniquefeatures
																uniquefeatures={
																	uniquefeatures
																}
															/>
														}
													/>
													<Route
														path="/products"
														element={<Products />}
													/>
													<Route
														path="/guidelinesandtips"
														element={
															<GuidelinesAndTips />
														}
													/>
													<Route
														path="/contactus"
														element={<ContactUs />}
													/>
												</Routes>
												<Footer />
											</div>
										</UniquefeaturesContext.Provider>
									</ExteriorsContext.Provider>
								</InteriorsContext.Provider>
							</BasementsContext.Provider>
						</AdditionsContext.Provider>
					</KitchensContext.Provider>
				</BathsContext.Provider>
			</DormersContext.Provider>
		</BeforeAftersContext.Provider>
	);
}
//<Navigation />
export default App;
/*
 */
