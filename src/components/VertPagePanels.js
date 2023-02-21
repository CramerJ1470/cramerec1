import React from "react";
import VertPanelSlider from "./VertPanelSlider";

const VertPagePanels = ({ panelinfo, vert }) => {
	return (
		<div>
			<VertPanelSlider panelinfo={panelinfo} vert={vert} />
		</div>
	);
};

export default VertPagePanels;
