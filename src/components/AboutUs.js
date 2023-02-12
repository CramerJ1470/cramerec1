import React from "react";
import Navigation from "./Navigation";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./Logo";
import Banner from "./Banner";
import OurApproach from "./OurApproach";
import TransitionPanel from "./TransitionPanel";
import SeeOurWork from "./SeeOurWork";

const AboutUs = (beforeafters) => {
	return (
		<>
			<div className="title1">About Us</div>
			<Logo />
			<Banner />
			<TransitionPanel beforeafters={beforeafters} />
			<OurApproach />
			<SeeOurWork/>
		</>
	);
};

export default AboutUs;
