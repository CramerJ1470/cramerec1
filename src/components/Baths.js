import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import VertPagePanels from "./VertPagePanels";


const Baths = ({ baths} ) => {
	
	console.log(baths);
	return (
		<>
			<span className="disp">
				<div className="title1">Baths</div>
				<Logo />
				<Banner />
			</span>
			<VertPagePanels panelinfo={baths}/>
			
		</>
	);
};

export default Baths;