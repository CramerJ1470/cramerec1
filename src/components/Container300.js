import React from "react";

import cropped from "../assets/cropped.jpg";

const Container300 = () => {
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

export default Container300;