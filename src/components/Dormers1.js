import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";
import DormerText from "./DormerText";

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
			<DormerText/>
		</>
	);
};

export default Dormers1;
