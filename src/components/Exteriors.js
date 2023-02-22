import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Exteriors = ({ exteriors} ) => {
	
	console.log(exteriors);
	return (
		<>
			<span className="disp">
				<div className="worklinks">Exteriors Under Construction</div>
				<Logo />
				<Banner />
			</span>
			<PagePanels panelinfo={exteriors}/>
		</>
	);
};

export default Exteriors;