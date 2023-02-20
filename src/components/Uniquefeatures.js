import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Uniquefeatures = ({ uniquefeatures} ) => {
	
	console.log(uniquefeatures);
	return (
		<>
			<Logo />
			<Banner />
			<PagePanels panelinfo={uniquefeatures}/>
		</>
	);
};

export default Uniquefeatures;