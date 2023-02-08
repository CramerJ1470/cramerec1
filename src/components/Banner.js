import React from "react";

import cropped from "../assets/cropped.jpg";

const Banner = () => {
	return (
		<>
			<img
				src={cropped}
				id="cropped"
				className="banner cropped"
				alt="cropped"
			/>
		</>
	);
};

export default Banner;
