import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Baths = ({ baths} ) => {
	
	console.log(baths);
	return (
		<>
			<Logo />
			<Banner />
			<PagePanels panelinfo={baths}/>
		</>
	);
};

export default Baths;