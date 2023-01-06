import React from "react";
const images = require("../assets/images");

const TransitionPanel = () => {
	let imageBefore = "../assets/NHPSplit/NHPSplitStairs1.jpg";
	//images.images[0].before;
	console.log(imageBefore);

	return (
		<>
			<div className="center">
				<div className="transitionpanel">
					<div>
						<img
							src={imageBefore}
							alt="hello"
							className="beforeAfter"
						></img>
					</div>
				</div>
			</div>
		</>
	);
};

export default TransitionPanel;
