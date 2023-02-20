import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Exteriors = ({ exteriors} ) => {
	
	console.log(exteriors);
	return (
		<>
			<Logo />
			<Banner />
			<PagePanels panelinfo={exteriors}/>
		</>
	);
};

export default Exteriors;