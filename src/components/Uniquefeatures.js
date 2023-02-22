import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Uniquefeatures = ({ uniquefeatures} ) => {
	
	console.log(uniquefeatures);
	return (
		<><span className="disp">
		<div className="title1">Unique Features Under Construction</div>
		<Logo />
		<Banner />
	</span>
	<PagePanels panelinfo={uniquefeatures}/>
		</>
	);
};

export default Uniquefeatures;