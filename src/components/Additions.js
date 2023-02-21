import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Additions = ({ additions} ) => {
	
	console.log(additions);
	return (
		<>
			<span className="disp">
				<div className="title1">Additions</div>
				<Logo />
				<Banner />
			</span>
			<PagePanels panelinfo={additions}/>
		</>
	);
};

export default Additions;