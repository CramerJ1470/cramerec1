import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Interiors = ({ interiors }) => {
	let vert = true;
	console.log(interiors);
	return (
		<>
			<Logo />
			<Banner />

			<PagePanels panelinfo={interiors} vert={vert} />
		</>
	);
};

export default Interiors;
