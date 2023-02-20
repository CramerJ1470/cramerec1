import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Additions = ({ additions} ) => {
	
	console.log(additions);
	return (
		<>
			<Logo />
			<Banner />
			<PagePanels panelinfo={additions}/>
		</>
	);
};

export default Additions;