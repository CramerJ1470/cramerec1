import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Basements = ({ basements} ) => {
	
	console.log(basements);
	return (
		<>
			<Logo />
			<Banner />
			<PagePanels panelinfo={basements}/>
		</>
	);
};

export default Basements;