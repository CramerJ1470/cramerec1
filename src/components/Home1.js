import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import TransitionPanel from "./TransitionPanel";
import SeeOurWork from "./SeeOurWork";

const Home1 = ( beforeafters ) => {
	
	return (
		<>
			<Logo />
			<Banner />
			<TransitionPanel beforeafters={beforeafters}/>
			<SeeOurWork/>
		</>
	);
};

export default Home1;
