import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import TransitionPanel from "./TransitionPanel";

const Home1 = ( beforeafters ) => {
	
	return (
		<>
			<Logo />
			<Banner />
			<TransitionPanel beforeafters={beforeafters}/>
			<div>
			
			</div>
		</>
	);
};

export default Home1;
