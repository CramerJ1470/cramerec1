import React from "react";
import VertPageCarouselImages from "./VertPageCarouselImages";

const VertPanelSlider = ({ panelinfo, vert }) => {
	//console.log(`Slider BA:`, beforeafters.beforeafters);

	console.log(`panelinfo:`, panelinfo);
	//console.log(data.beforeafters);

	return (
		<div className="vertcarousel" id="carousel">
			<VertPageCarouselImages panelinfo={panelinfo} vert={vert} />

			<div className="buttons-container">
				<button id="left" className="btn1">
					Prev
				</button>
				<button id="right" className="btn2">
					Next
				</button>
			</div>
		</div>
	);
	//  console.log(beforeafters1.g{et());
};

export default VertPanelSlider;
