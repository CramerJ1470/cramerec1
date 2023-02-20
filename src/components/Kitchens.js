import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import PagePanels from "./PagePanels";

const Kitchens = ({ kitchens} ) => {
	
	console.log(kitchens);
	return (
		<><span className="disp">
        <div className="title1">Kitchens</div>
        <Logo />
        <Banner />
    </span>
			<PagePanels panelinfo={kitchens}/>
		</>
	);
};

export default Kitchens;