import React from "react";
import PanelSlider from "./PanelSlider";

const PagePanels = ({panelinfo, vert}) => {
	return (
		<div>
			<PanelSlider panelinfo={panelinfo} vert= {vert} />
		</div>
	);
};

export default PagePanels;