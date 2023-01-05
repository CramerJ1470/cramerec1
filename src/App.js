import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurWork from "./components/OurWork";
import Products from "./components/Products";
import GuidelinesAndTips from "./components/GuidelinesAndTips";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";


function App() {
	return (
		<div className="App">
			
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
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
	);
}

export default App;
