import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Dormers1 = ({ dormers} ) => {
	
	console.log(dormers);
	return (
		<>
			<span className="disp">
				<div className="title1">Dormers</div>
				<Logo />
				<Banner />
			</span>
			<PagePanels panelinfo={dormers}/>
		</>
	);
};

export default Dormers1;
