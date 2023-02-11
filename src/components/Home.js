import React from "react";
import Logo from "./Logo";
import Banner from "./Banner";
import TransitionPanel from "./TransitionPanel";

const Home = ( beforeafters ) => {
	
	return (
		<>
			<Logo />
			<Banner />
			<TransitionPanel beforeafters={beforeafters}/>
			<div>
			
			</div>
		</>
	);
};

export default Home;

//{pictureArray.forEach((grouping) => {console.log(grouping); return <Slider grouping={grouping} />})}
