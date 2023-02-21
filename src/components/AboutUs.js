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
			<span className="disp">
				<div className="title1">About US</div>
				<Logo />
				<Banner />
			</span>
			<div className="aboutus">
				<TransitionPanel beforeafters={beforeafters} />

				<OurApproach />
			</div>
			<SeeOurWork/>
		</>
	);
};

export default AboutUs;
