import React from "react";
import PageSlider from "./PageSlider";

const PagePanels = ({panelinfo}) => {
	return (
		<div>
			<PageSlider panelinfo={panelinfo} />
		</div>
	);
};

export default PagePanels;