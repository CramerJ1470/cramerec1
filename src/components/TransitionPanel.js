import React from "react";
import Slider from "./Slider";

const TransitionPanel = ({ beforeafters }) => {
	return (
		<div>
			<Slider beforeafters={beforeafters} />
		</div>
	);
};

export default TransitionPanel;
