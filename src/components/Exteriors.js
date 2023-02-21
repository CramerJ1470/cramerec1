import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Exteriors = ({ exteriors} ) => {
	
	console.log(exteriors);
	return (
		<>
			<span className="disp">
				<div className="title1">Exteriors</div>
				<Logo />
				<Banner />
			</span>
			<PagePanels panelinfo={exteriors}/>
		</>
	);
};

export default Exteriors;