import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import VertPagePanels from "./VertPagePanels";


const Baths = ({ baths} ) => {
	
	console.log(baths);
	return (
		<>
			<Logo />
			<Banner />
			<VertPagePanels panelinfo={baths}/>
			
		</>
	);
};

export default Baths;