import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Dormers1 = ({ dormers} ) => {
	
	console.log(dormers);
	return (
		<>
			<Logo />
			<Banner />
			<PagePanels dormer={dormers}/>
		</>
	);
};

export default Dormers1;
