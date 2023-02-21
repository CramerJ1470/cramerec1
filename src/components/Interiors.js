import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Interiors = ({ interiors }) => {
	let vert = true;
	console.log(interiors);
	return (
		<>
			<span className="disp">
				<div className="title1">Interiors</div>
				<Logo />
				<Banner />
			</span>
			<PagePanels panelinfo={interiors} vert={vert} />
		</>
	);
};

export default Interiors;
