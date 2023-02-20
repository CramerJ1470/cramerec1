import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Interiors = ({ interiors} ) => {
	
	console.log(interiors);
	return (
		<>
			<Logo />
			<Banner />
			<PagePanels panelinfo={interiors}/>
		</>
	);
};

export default Interiors;