import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import Banner from "./Banner";
import OurApproach from "./OurApproach";
import TransitionPanel from "./TransitionPanel";

const AboutUs = (beforeafters) => {
	return (
		<>
			<div className="title1">About Us</div>
			<Logo />
			<Banner />
			<TransitionPanel beforeafters={beforeafters} />
			<OurApproach />
		</>
	);
};

export default AboutUs;
